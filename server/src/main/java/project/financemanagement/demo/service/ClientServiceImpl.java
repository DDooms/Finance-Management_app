package project.financemanagement.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.financemanagement.demo.entity.Client;
import project.financemanagement.demo.exception.EntityNotFoundException;
import project.financemanagement.demo.repository.ClientRepository;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {
    private final ClientRepository clientRepository;

    @Autowired
    public ClientServiceImpl(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public List<Client> getEveryClient() {
        return this.clientRepository.findAllByOrderByClientIdAsc();
    }

    @Override
    public Client getClient(Long id) {
        if (this.clientRepository.findById(id).isPresent()) {
            return this.clientRepository.getReferenceById(id);
        }
        throw new EntityNotFoundException("Client not found with id: " + id);
    }

    @Override
    public Client createClient(Client account) {
        return this.clientRepository.save(account);
    }

    @Override
    public Client updateClient(Long id, Client updatedClient) {
        Client client = this.clientRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Client not found with id: " + id));

        client.setUsername(updatedClient.getUsername());
        client.setEmail(updatedClient.getEmail());
        client.setPassword(updatedClient.getPassword());

        return this.clientRepository.save(client);
    }

    @Override
    public void deleteClient(Long id) {
        this.clientRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Client not found with id: " + id));
        this.clientRepository.deleteById(id);
    }
}
