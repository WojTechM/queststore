package com.codecool.queststore.repositories;

import com.codecool.queststore.model.entities.User;
import com.codecool.queststore.specifications.SqlSpecification;

import java.sql.SQLException;
import java.util.List;

public class UserRepository extends AbstractRepository<User> {
    public UserRepository() throws PersistenceLayerException {}

    @Override
    void addEntity(User entity) throws SQLException {

    }

    @Override
    void updateEntity(User entity) throws SQLException {

    }

    @Override
    void deleteEntity(User entity) throws SQLException {

    }

    @Override
    List<User> deserializeEntities() throws SQLException {
        return null;
    }
}
