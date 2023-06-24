package project.financemanagement.demo.controller;

import org.springframework.web.bind.annotation.*;
import project.financemanagement.demo.entity.Account;

import java.util.List;

@RequestMapping("/account")
public interface AccountController {
    @GetMapping
    List<Account> getEveryAccount();

    @GetMapping("/{id}")
    Account getAccount(@PathVariable Long id);

    @PostMapping
    Account createAccount(@RequestBody Account account);

    @PutMapping("/{id}")
    Account updateAccount(@PathVariable Long id, @RequestBody Account account);

    @DeleteMapping("/{id}")
    void deleteAccount(@PathVariable Long id);
}
