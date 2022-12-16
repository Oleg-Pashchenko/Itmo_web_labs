package com.olegpash.web_lab2.model;

import com.olegpash.web_lab2.entity.User;

import java.util.Optional;

public interface UserDAO {

    Optional<User> getUserByToken(String token);

    void saveUser(User user);

    void updateUser(User user);
}
