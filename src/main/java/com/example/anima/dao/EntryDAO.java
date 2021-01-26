package com.example.anima.dao;

import com.example.anima.pojo.Entry;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntryDAO extends MongoRepository<Entry,Long> {
    Entry findFirstByDiseaseLikeOrMedicineLike(String keyword1,String keyword2);
    List<Entry> findAllByDisease(String disease);
}
