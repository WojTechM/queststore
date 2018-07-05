package com.codecool.queststore.mappers;

import com.codecool.queststore.entities.Level;
import com.codecool.queststore.repositories.PersistenceLayerException;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.sql.ResultSet;
import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.*;

class LevelMapperTest {
    @Test
    public void testMap() throws SQLException, PersistenceLayerException {
        int id = 1;
        String name = "levelone";
        int threshold = 10;

        ResultSet resultSet = Mockito.mock(ResultSet.class);
        Mockito.when(resultSet.getInt("id")).thenReturn(id);
        Mockito.when(resultSet.getString("name")).thenReturn(name);
        Mockito.when(resultSet.getInt("threshold")).thenReturn(threshold);

        LevelMapper mapper = new LevelMapper();
        Level expectedOutput = new Level(id, name, threshold);
        Level actualOutput = mapper.map(resultSet);
        
        assertEquals(expectedOutput, actualOutput);

    }

    @Test
    public void testMapToJson() {
        LevelMapper mapper = new LevelMapper();
        Level level = new Level(1, "levelone", 10);
        String expectedJson = "{\"id\": 1, \"name\": \"levelone\", \"threshold\": 10}";
        String actualJson = mapper.mapToJson(level);
        assertEquals(expectedJson, actualJson);
    }

}