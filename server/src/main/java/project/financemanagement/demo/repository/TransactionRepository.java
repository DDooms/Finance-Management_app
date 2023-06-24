package project.financemanagement.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.financemanagement.demo.entity.Transaction;

import java.time.LocalDate;
import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findAllByOrderByTransactionIdAsc();

    List<Transaction> findAllByOrderByTransactionAmountAsc();

    List<Transaction> findAllByOrderByTransactionAmountDesc();

    List<Transaction> findAllByOrderByTransactionDateAsc();
}
