package com.example.anima.dao;

import com.example.anima.pojo.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageDAO extends MongoRepository<Message,Long> {
//    Entry findFirstByDiseaseLikeOrMedicineLike(String keyword1,String keyword2);
    Message findFirstByNameLike(String name);
}
