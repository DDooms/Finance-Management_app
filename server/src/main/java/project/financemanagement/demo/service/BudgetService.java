package project.financemanagement.demo.service;

import project.financemanagement.demo.entity.Budget;

import java.util.List;

public interface BudgetService{

    List<Budget> getEveryBudget();

    Budget getBudget(Long id);

    Budget createBudget(Budget budget);

    Budget updateBudget(Long id, Budget updatedBudget);

    void deleteBudget(Long id);
}
