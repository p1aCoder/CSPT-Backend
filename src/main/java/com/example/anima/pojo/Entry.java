package com.example.anima.pojo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "entry")
@ToString
public class Entry {
//    @Id
//    private Long id;
    private String medicine;
    private String disease;
    private String jinji;
    private String badres;
    private String attn;
    private String method;

//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }



    public String getDisease() {
        return disease;
    }

    public void setDisease(String disease) {
        this.disease = disease;
    }

    public String getMedicine() {
        return medicine;
    }

    public void setMedicine(String medicine) {
        this.medicine = medicine;
    }

    public String getJinji() {
        return jinji;
    }

    public void setJinji(String jinji) {
        this.jinji = jinji;
    }

    public String getBadres() {
        return badres;
    }

    public void setBadres(String badres) {
        this.badres = badres;
    }

    public String getAttn() {
        return attn;
    }

    public void setAttn(String attn) {
        this.attn = attn;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }
}
