package project.financemanagement.demo.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;
import project.financemanagement.demo.enumeration.TransactionCategories;

import java.time.LocalDateTime;

@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long transactionId; /*a unique identifier for the transaction*/
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "EEEE dd.MMM.yyyy")
    private LocalDateTime transactionDate = LocalDateTime.now(); /*the date the transaction occurred*/
    private double transactionAmount; /*the amount of the transaction*/
    private String transactionDescription; /*a brief description of the transaction*/
    @Enumerated(EnumType.STRING)
    private TransactionCategories transactionCategory;  /*the category the transaction falls under (e.g. rent, groceries, entertainment)*/
    private String transactionNotes; /*any additional notes about the transaction*/

    @ManyToOne
    @JoinColumn(name = "account_id")
    @ToString.Exclude
    private Account account;


    public LocalDateTime getTransactionDate() {
        return this.transactionDate;
    }

    public void setTransactionDate(LocalDateTime transactionDate) {
        this.transactionDate = transactionDate;
    }

    public double getTransactionAmount() {
        return this.transactionAmount;
    }

    public void setTransactionAmount(double transactionAmount) {
        this.transactionAmount = transactionAmount;
    }

    public String getTransactionDescription() {
        return this.transactionDescription;
    }

    public void setTransactionDescription(String transactionDescription) {
        this.transactionDescription = transactionDescription;
    }

    public TransactionCategories getTransactionCategory() {
        return this.transactionCategory;
    }

    public void setTransactionCategory(TransactionCategories transactionCategory) {
        this.transactionCategory = transactionCategory;
    }

    public String getTransactionNotes() {
        return this.transactionNotes;
    }

    public void setTransactionNotes(String transactionNotes) {
        this.transactionNotes = transactionNotes;
    }

    public Account getAccount() {
        return this.account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
