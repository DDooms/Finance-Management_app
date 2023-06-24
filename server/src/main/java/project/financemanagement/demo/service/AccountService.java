package project.financemanagement.demo.service;

import project.financemanagement.demo.entity.Account;

import java.util.List;

public interface AccountService {
    List<Account> getEveryAccount();

    Account getAccount(Long id);

    Account createAccount(Account account);

    Account updateAccount(Long id, Account updatedAccount);

    void deleteAccount(Long id);
}
