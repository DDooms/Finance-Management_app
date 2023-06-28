package project.financemanagement.demo.service;

import project.financemanagement.demo.entity.Client;

import java.util.List;

public interface UserService {
    List<Client> getEveryUser();

    Client getUser(Long id);

    Client createUser(Client account);

    Client updateUser(Long id, Client updatedClient);

    void deleteUser(Long id);
}
