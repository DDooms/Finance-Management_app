package project.financemanagement.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.financemanagement.demo.entity.Account;
import project.financemanagement.demo.entity.Budget;
import project.financemanagement.demo.exception.EntityNotFoundException;
import project.financemanagement.demo.repository.BudgetRepository;

import java.util.List;

@Service
public class BudgetServiceImpl implements BudgetService{

    private final BudgetRepository budgetRepository;

    @Autowired
    public BudgetServiceImpl(BudgetRepository budgetRepository) {
        this.budgetRepository = budgetRepository;
    }

    @Override
    public List<Budget> getEveryBudget() {
        return this.budgetRepository.findAllByOrderByBudgetIdAsc();
    }

    @Override
    public Budget getBudget(Long id) {
        if (this.budgetRepository.findById(id).isPresent()) {
            return this.budgetRepository.getReferenceById(id);
        }
        throw new EntityNotFoundException("Budget not found with id: " + id);
    }

    @Override
    public Budget createBudget(Budget budget) {
        return this.budgetRepository.save(budget);
    }

    @Override
    public Budget updateBudget(Long id, Budget updatedBudget) {
        Budget budget = this.budgetRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Budget not found with id: " + id));

        budget.setBudgetCategory(updatedBudget.getBudgetCategory());
        budget.setBudgetAmount(updatedBudget.getBudgetAmount());
        budget.setStartDate(updatedBudget.getStartDate());
        budget.setEndDate(updatedBudget.getEndDate());
        budget.setGoal(updatedBudget.getGoal());
        budget.setProgress(updatedBudget.getProgress());

        return this.budgetRepository.save(budget);
    }

    @Override
    public void deleteBudget(Long id) {
        this.budgetRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Budget not found with id: " + id));
        this.budgetRepository.deleteById(id);
    }
}
