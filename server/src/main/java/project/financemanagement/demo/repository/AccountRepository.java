package project.financemanagement.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.financemanagement.demo.entity.Account;

import java.util.List;


public interface AccountRepository extends JpaRepository<Account, Long> {
    List<Account> findAllByOrderByAccountIdAsc();
}
