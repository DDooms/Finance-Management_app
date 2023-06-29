package project.financemanagement.demo.service;

import project.financemanagement.demo.entity.Client;

import java.util.List;

public interface ClientService {
    List<Client> getEveryClient();

    Client getClient(Long id);

    Client createClient(Client account);

    Client updateClient(Long id, Client updatedClient);

    void deleteClient(Long id);
}
