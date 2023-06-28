package project.financemanagement.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.financemanagement.demo.entity.Client;

import java.util.List;

public interface UserRepository extends JpaRepository<Client, Long> {
    List<Client> findAllByOrderByClientIdAsc();
}
