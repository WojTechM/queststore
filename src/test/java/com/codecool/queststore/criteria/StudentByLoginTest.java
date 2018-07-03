package com.codecool.queststore.criteria;

import com.codecool.queststore.repositories.PersistenceLayerException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class StudentByLoginTest {

    @Test
    @DisplayName("Test basic functionality - search for student with login \"Student\"")
    void testBasicFunctionality() throws PersistenceLayerException {
        String expectedResult = "SELECT * FROM students WHERE login='student'";
        String login = "student";
        assertEquals(expectedResult, new StudentByLogin(login).toPreparedStatement().toString());
    }

    @Test
    @DisplayName("Test Protection Against SQL injection - drop table users")
    void testProtectionAgainstSqlInjection() throws PersistenceLayerException {
        String expectedResult = "SELECT * FROM students WHERE login='''); DROP TABLE users CASCADE; --'";
        String sqlInjectionInput = "'); DROP TABLE users CASCADE; --";
        assertEquals(expectedResult, new StudentByLogin(sqlInjectionInput).toPreparedStatement().toString());
    }
}