package project.financemanagement.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.financemanagement.demo.entity.Budget;
import project.financemanagement.demo.entity.Transaction;
import project.financemanagement.demo.enumeration.TransactionCategories;
import project.financemanagement.demo.exception.EntityNotFoundException;
import project.financemanagement.demo.repository.TransactionRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionServiceImpl(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    @Override
    public List<Transaction> getEveryTransaction() {
        return this.transactionRepository.findAllByOrderByTransactionIdAsc();
    }

    @Override
    public List<Transaction> getEveryTransactionByDate(LocalDate date) {
        List<Transaction> transactionList = this.transactionRepository.findAll();
        return transactionList.stream()
                .filter(transaction -> transaction.getTransactionDate().toLocalDate().isEqual(date))
                .collect(Collectors.toList());
    }

    @Override
    public List<Transaction> sortEveryTransactionByDate() {
        return this.transactionRepository.findAllByOrderByTransactionDateAsc();
    }

    @Override
    public List<Transaction> getEveryTransactionByCategory(String category) {
        List<Transaction> transactionList = this.transactionRepository.findAll();
        return transactionList.stream()
                .filter(transaction -> transaction.getTransactionCategory().toString().equals(category))
                .collect(Collectors.toList());
    }

    @Override
    public List<Transaction> sortEveryTransactionByAmountAscending() {
        return this.transactionRepository.findAllByOrderByTransactionAmountAsc();
    }

    @Override
    public List<Transaction> sortEveryTransactionByAmountDescending() {
        return this.transactionRepository.findAllByOrderByTransactionAmountDesc();
    }

    @Override
    public Transaction getTransaction(Long id) {
        if (this.transactionRepository.findById(id).isPresent()) {
            return this.transactionRepository.getReferenceById(id);
        }
        throw new EntityNotFoundException("Transaction not found with id: " + id);
    }

    @Override
    public Transaction createTransaction(Transaction transaction) {
        return this.transactionRepository.save(transaction);
    }

    @Override
    public Transaction updateTransaction(Long id, Transaction updatedTransaction) {
        Transaction transaction = this.transactionRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Transaction not found with id: " + id));

        transaction.setTransactionDate(updatedTransaction.getTransactionDate());
        transaction.setTransactionAmount(updatedTransaction.getTransactionAmount());
        transaction.setTransactionDescription(updatedTransaction.getTransactionDescription());
        transaction.setTransactionCategory(updatedTransaction.getTransactionCategory());
        transaction.setTransactionNotes(updatedTransaction.getTransactionNotes());

        return this.transactionRepository.save(transaction);
    }

    @Override
    public void deleteTransaction(Long id) {
        this.transactionRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Transaction not found with id: " + id));
        this.transactionRepository.deleteById(id);
    }
}
