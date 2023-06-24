package project.financemanagement.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

//@Getter
//@Setter
//@ToString
//@AllArgsConstructor
//@NoArgsConstructor
@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId; /*a unique identifier for the user*/
    private String username; /*the user's username for logging in*/
    private String password; /*the user's password for logging in*/
    private String email; /*the user's email address for account verification and password recovery*/
    private String firstName; /*the user's first name*/
    private String lastName; /*the user's last name*/
    private String address; /*the user's address*/
    private String phoneNumber; /*the user's phone number*/
}
