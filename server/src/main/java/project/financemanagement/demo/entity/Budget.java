package project.financemanagement.demo.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long budgetId; /*a unique identifier for the budget*/
    private String budgetCategory; /*the category the budget applies to (e.g. rent, groceries, entertainment)*/
    private double budgetAmount; /*the budgeted amount for the category*/
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "EEEE dd.MMM.yyyy")
    private LocalDateTime startDate = LocalDateTime.now();  /*the start date of the budget period*/
    private LocalDateTime endDate;  /*the end date of the budget period*/
    private double goal; /*a financial goal associated with the budget*/
    private double progress; /*the current progress towards the goal*/


    public String getBudgetCategory() {
        return this.budgetCategory;
    }

    public void setBudgetCategory(String budgetCategory) {
        this.budgetCategory = budgetCategory;
    }

    public double getBudgetAmount() {
        return this.budgetAmount;
    }

    public void setBudgetAmount(double budgetAmount) {
        this.budgetAmount = budgetAmount;
    }

    public LocalDateTime getStartDate() {
        return this.startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return this.endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public double getGoal() {
        return this.goal;
    }

    public void setGoal(double goal) {
        this.goal = goal;
    }

    public double getProgress() {
        return this.progress;
    }

    public void setProgress(double progress) {
        this.progress = progress;
    }
}
