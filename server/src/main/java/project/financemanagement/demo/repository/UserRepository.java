package project.financemanagement.demo.repository;

import org.springframework.data.repository.CrudRepository;
import project.financemanagement.demo.entity.User;

public interface UserRepository extends CrudRepository<User, Long> {
}
