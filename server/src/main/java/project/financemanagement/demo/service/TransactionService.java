package project.financemanagement.demo.service;

import project.financemanagement.demo.entity.Transaction;

import java.time.LocalDate;
import java.util.List;

public interface TransactionService {
    List<Transaction> getEveryTransaction();

    List<Transaction> getEveryTransactionByDate(LocalDate date);

    List<Transaction> sortEveryTransactionByDate();

    List<Transaction> getEveryTransactionByCategory(String category);

    List<Transaction> sortEveryTransactionByAmountAscending();

    List<Transaction> sortEveryTransactionByAmountDescending();

    Transaction getTransaction(Long id);

    Transaction createTransaction(Transaction transaction);

    Transaction updateTransaction(Long id, Transaction updatedTransaction);

    void deleteTransaction(Long id);
}
