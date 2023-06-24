package project.financemanagement.demo.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long accountId; /*a unique identifier for the account*/
    private String accountName; /*a name for the account (e.g. savings account, 401k)*/
    private String accountType; /*the type of account (e.g. savings, checking, investment)*/
    private double accountBalance; /*the current balance of the account*/

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    @ToString.Exclude
    private List<Transaction> accountTransactions; /*a list of transactions associated with the account*/


    public String getAccountName() {
        return this.accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public String getAccountType() {
        return this.accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public double getAccountBalance() {
        return this.accountBalance;
    }

    public void setAccountBalance(double accountBalance) {
        this.accountBalance = accountBalance;
    }

    public List<Transaction> getAccountTransactions() {
        return this.accountTransactions;
    }

    public void setAccountTransactions(List<Transaction> accountTransactions) {
        this.accountTransactions = accountTransactions;
    }
}
