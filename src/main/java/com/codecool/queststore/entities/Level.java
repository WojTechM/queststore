package com.codecool.queststore.entities;

public class Level {
    private int id;
    private String name;
    private int threshold;

    public Level(String name, int threshold) {
        this.name = name;
        this.threshold = threshold;
    }

    public Level(int id, String name, int threshold) {
        this(name, threshold);
        this.id = id;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getThreshold() {
        return this.threshold;
    }

    public void setThreshold(int threshold) {
        this.threshold = threshold;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this) return true;
        if (!(o instanceof Level)) return false;

        Level level = (Level) o;

        return (level.getId() == this.id &&
                level.getName().equals(this.getName()) &&
                level.getThreshold() == this.getThreshold());
    }
}
