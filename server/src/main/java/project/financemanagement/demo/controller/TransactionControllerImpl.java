package project.financemanagement.demo.controller;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import project.financemanagement.demo.entity.Transaction;
import project.financemanagement.demo.service.TransactionService;

import java.util.List;

@RestController
public class TransactionControllerImpl implements TransactionController {

    private final TransactionService transactionService; // Constructor injection

    @Autowired
    public TransactionControllerImpl(TransactionService transactionService){
        this.transactionService = transactionService;
    }

    @Override
    public List<Transaction> getEveryTransaction() {
        return this.transactionService.getEveryTransaction();
    }

    @Override
    public Transaction getTransaction(Long id) {
        return this.transactionService.getTransaction(id);
    }

    @Override
    public Transaction createTransaction(Transaction transaction) {
        return this.transactionService.createTransaction(transaction);
    }

    @Override
    public Transaction updateTransaction(Long id, Transaction transaction) {
        return this.transactionService.updateTransaction(id, transaction);
    }

    @Override
    public void deleteTransaction(Long id) {
        this.transactionService.deleteTransaction(id);
    }
}
