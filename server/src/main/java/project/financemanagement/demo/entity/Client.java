package project.financemanagement.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long clientId; /*a unique identifier for the user*/
    private String username; /*the user's username for logging in*/
    private String password; /*the user's password for logging in*/
    private String email; /*the user's email address for account verification and password recovery*/
/*    private String firstName; *//*the user's first name*//*
    private String lastName; *//*the user's last name*//*
    private String address; *//*the user's address*//*
    private String phoneNumber; *//*the user's phone number*/

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
