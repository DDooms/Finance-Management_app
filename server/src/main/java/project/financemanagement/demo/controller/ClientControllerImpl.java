package project.financemanagement.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import project.financemanagement.demo.entity.Client;
import project.financemanagement.demo.service.ClientService;

import java.util.List;

@RestController
public class ClientControllerImpl implements ClientController {
    private final ClientService clientService;

    @Autowired
    public ClientControllerImpl(ClientService clientService) {
        this.clientService = clientService;
    }

    @Override
    public List<Client> getEveryUser() {
        return this.clientService.getEveryClient();
    }

    @Override
    public Client getUser(Long id) {
        return this.clientService.getClient(id);
    }

    @Override
    public Client createUser(Client client) {
        return this.clientService.createClient(client);
    }

    @Override
    public Client updateUser(Long id, Client client) {
        return this.clientService.updateClient(id, client);
    }

    @Override
    public void deleteUser(Long id) {
        this.clientService.deleteClient(id);
    }
}
