package project.financemanagement.demo.controller;

import org.springframework.web.bind.annotation.*;
import project.financemanagement.demo.entity.Client;

import java.util.List;

@RequestMapping("/user")
public interface ClientController {
    @GetMapping
    List<Client> getEveryUser();

    @GetMapping("/{id}")
    Client getUser(@PathVariable Long id);

    @PostMapping
    Client createUser(@RequestBody Client client);

    @PutMapping("/{id}")
    Client updateUser(@PathVariable Long id, @RequestBody Client client);

    @DeleteMapping("/{id}")
    void deleteUser(@PathVariable Long id);
}
