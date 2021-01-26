package com.example.anima.pojo;

import lombok.ToString;

@ToString
public class Edge {
    private int id;
    private int source;
    private int target;
    private int type;

    public Edge(int id, int source, int target, int type) {
        this.id = id;
        this.source = source;
        this.target = target;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSource() {
        return source;
    }

    public void setSource(int source) {
        this.source = source;
    }

    public int getTarget() {
        return target;
    }

    public void setTarget(int target) {
        this.target = target;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }
}
