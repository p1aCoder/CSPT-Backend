package com.example.anima;

import com.example.anima.dao.EntryDAO;
import com.example.anima.dao.MessageDAO;
import com.example.anima.pojo.*;
import com.example.anima.service.EntryService;
import com.example.anima.service.MessageService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import java.util.List;
import static org.junit.Assert.*;
@SpringBootTest
@RunWith(SpringRunner.class)
public class EntryServiceTest {
    @Autowired
    private EntryService entryService;

    @Autowired
    private EntryDAO entryDAO;

    @Autowired
    MessageDAO messageDAO;

    @Autowired
    MessageService messageService;

//    @Test
//    public void listMedicine() throws Exception {
//        List<Entry> entries = entryService.listMedicine("齐墩果酸片");
//        System.out.println(entries);
////        assertEquals("null",user.getPassword());
//    }

    @Test
    public void findAllByDisease() throws Exception {
        List<Entry> entries = entryDAO.findAllByDisease("肝炎");
        System.out.println(entries);
    }

    @Test
    public void listGraphByDisease() throws Exception {
        Graph graph = entryService.listGraphByDisease("肝炎",null);
        for (Edge edge:graph.getEdges()){
            System.out.println(edge);
        }
        for (Node node:graph.getNodes()){
            System.out.println(node);
        }
    }

    @Test
    public void findAllByDisease32() throws Exception {
//        Message message = messageDAO.findByName("mouyao");
//        Graph graph=messageService.processMessage(message);
//        System.out.println(graph.getNodes());
//        System.out.println(graph.getEdges());
    }
}
