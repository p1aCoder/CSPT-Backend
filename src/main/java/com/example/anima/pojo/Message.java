package com.example.anima.pojo;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "message")
@ToString
public class Message {
//    @Id
//    private Long id;
    private String name;
    private List<String> badres;
    private List<String> disease;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getBadres() {
        return badres;
    }

    public void setBadres(List<String> badres) {
        this.badres = badres;
    }

    public List<String> getDisease() {
        return disease;
    }

    public void setDisease(List<String> disease) {
        this.disease = disease;
    }
}
