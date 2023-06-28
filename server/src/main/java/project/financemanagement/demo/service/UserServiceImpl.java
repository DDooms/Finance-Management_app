package project.financemanagement.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.financemanagement.demo.entity.Client;
import project.financemanagement.demo.exception.EntityNotFoundException;
import project.financemanagement.demo.repository.UserRepository;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<Client> getEveryUser() {
        return this.userRepository.findAllByOrderByClientIdAsc();
    }

    @Override
    public Client getUser(Long id) {
        if (this.userRepository.findById(id).isPresent()) {
            return this.userRepository.getReferenceById(id);
        }
        throw new EntityNotFoundException("Client not found with id: " + id);
    }

    @Override
    public Client createUser(Client account) {
        return this.userRepository.save(account);
    }

    @Override
    public Client updateUser(Long id, Client updatedClient) {
        Client client = this.userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Client not found with id: " + id));

        client.setUsername(updatedClient.getUsername());
        client.setEmail(updatedClient.getEmail());
        client.setPassword(updatedClient.getPassword());

        return this.userRepository.save(client);
    }

    @Override
    public void deleteUser(Long id) {
        this.userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Client not found with id: " + id));
        this.userRepository.deleteById(id);
    }
}
