package project.financemanagement.demo.controller;

import org.springframework.web.bind.annotation.*;
import project.financemanagement.demo.entity.Budget;

import java.util.List;

@RequestMapping("/budget")
public interface BudgetController {
    @GetMapping
    List<Budget> getEveryBudget();

    @GetMapping("/{id}")
    Budget getBudget(@PathVariable Long id);

    @PostMapping
    Budget createBudget(@RequestBody Budget budget);

    @PutMapping("/{id}")
    Budget updateBudget(@PathVariable Long id, @RequestBody Budget budget);

    @DeleteMapping("/{id}")
    void deleteBudget(@PathVariable Long id);
}
