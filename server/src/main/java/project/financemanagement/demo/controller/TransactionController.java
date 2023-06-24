package project.financemanagement.demo.controller;

import org.springframework.web.bind.annotation.*;
import project.financemanagement.demo.entity.Transaction;

import java.util.List;

@RequestMapping("/transaction")
public interface TransactionController {
    @GetMapping
    List<Transaction> getEveryTransaction();

    @GetMapping("/{id}")
    Transaction getTransaction(@PathVariable Long id);

    @PostMapping
    Transaction createTransaction(@RequestBody Transaction transaction);

    @PutMapping("/{id}")
    Transaction updateTransaction(@PathVariable Long id, @RequestBody Transaction transaction);

    @DeleteMapping("/{id}")
    void deleteTransaction(@PathVariable Long id);
}
