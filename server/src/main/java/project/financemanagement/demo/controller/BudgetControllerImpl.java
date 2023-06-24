package project.financemanagement.demo.controller;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import project.financemanagement.demo.entity.Budget;
import project.financemanagement.demo.service.BudgetService;

import java.util.List;

@RestController
public class BudgetControllerImpl implements BudgetController{
    private final BudgetService budgetService; // Constructor injection

    @Autowired
    public BudgetControllerImpl(BudgetService budgetService){
        this.budgetService = budgetService;
    }

    @Override
    public List<Budget> getEveryBudget() {
        return this.budgetService.getEveryBudget();
    }

    @Override
    public Budget getBudget(Long id) {
        return this.budgetService.getBudget(id);
    }

    @Override
    public Budget createBudget(Budget budget) {
        return this.budgetService.createBudget(budget);
    }

    @Override
    public Budget updateBudget(Long id, Budget budget) {
        return this.budgetService.updateBudget(id, budget);
    }

    @Override
    public void deleteBudget(Long id) {
        this.budgetService.deleteBudget(id);
    }
}
