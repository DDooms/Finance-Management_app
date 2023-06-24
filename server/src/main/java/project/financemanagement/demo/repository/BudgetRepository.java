package project.financemanagement.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.financemanagement.demo.entity.Budget;

import java.util.List;

public interface BudgetRepository extends JpaRepository<Budget, Long> {
    List<Budget> findAllByOrderByBudgetIdAsc();
}
