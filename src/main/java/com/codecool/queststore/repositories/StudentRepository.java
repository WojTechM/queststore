package com.codecool.queststore.repositories;

import com.codecool.queststore.model.entities.Student;
import com.codecool.queststore.specifications.SqlSpecification;

import java.sql.SQLException;
import java.util.List;

public class StudentRepository extends AbstractRepository<Student> {
    public StudentRepository() {}

    @Override
    void addEntity(Student entity) throws SQLException {

    }

    @Override
    void updateEntity(Student entity) throws SQLException {

    }

    @Override
    void deleteEntity(Student entity) throws SQLException {

    }

    @Override
    List<Student> deserializeEntities() throws SQLException {
        return null;
    }
}
