package project.financemanagement.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import project.financemanagement.demo.entity.Client;
import project.financemanagement.demo.service.UserService;

import java.util.List;

@RestController
public class UserControllerImpl implements UserController {
    private final UserService userService;

    @Autowired
    public UserControllerImpl(UserService userService) {
        this.userService = userService;
    }

    @Override
    public List<Client> getEveryUser() {
        return this.userService.getEveryUser();
    }

    @Override
    public Client getUser(Long id) {
        return this.userService.getUser(id);
    }

    @Override
    public Client createUser(Client client) {
        return this.userService.createUser(client);
    }

    @Override
    public Client updateUser(Long id, Client client) {
        return this.userService.updateUser(id, client);
    }

    @Override
    public void deleteUser(Long id) {
        this.userService.deleteUser(id);
    }
}
