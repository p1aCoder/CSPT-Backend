package com.example.anima.controller;


import com.example.anima.dao.EntryDAO;
import com.example.anima.dao.MessageDAO;
import com.example.anima.pojo.Entry;
import com.example.anima.pojo.Graph;
import com.example.anima.pojo.Message;
import com.example.anima.result.Result;
import com.example.anima.result.ResultFactory;
import com.example.anima.service.EntryService;
import com.example.anima.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
public class EntryController {
    @Autowired
    EntryService entryService;
    @Autowired
    EntryDAO entryDAO;
    @Autowired
    MessageDAO messageDAO;
    @Autowired
    MessageService messageService;

    @CrossOrigin
    @GetMapping("/api/message/{name}")
    public Result listMedicine(@PathVariable("name") String name) throws Exception{
        Graph graph=null;
        try {
            Message message = messageDAO.findFirstByNameLike(name);
            graph=messageService.processMessage(message);
        } catch (Exception e) {
            return ResultFactory.buildFailureResult("查询失败");
        }
        return ResultFactory.buildSuccessResult(graph);
    }

    @CrossOrigin
    @GetMapping("/api/graph/{disease}")
    public Result listGraph(@PathVariable("disease") String disease) throws Exception{
        Graph graph= null;
        try {
            graph = entryService.listGraphByDisease(disease,null);
        } catch (Exception e) {
            return ResultFactory.buildFailureResult("查询失败");
        }
        return ResultFactory.buildSuccessResult(graph);
    }

    @CrossOrigin
    @GetMapping("/api/search")
    public Result listByCategory(@RequestParam("keywords") String keywords) throws Exception{
        Graph graph1= null;
        try {
            String disease=entryService.searchEntry(keywords).getDisease();
            String medicine=entryService.searchEntry(keywords).getMedicine();
            if (medicine.contains(keywords)){
                keywords=medicine;
            }
            Graph graph=entryService.listGraphByDisease(disease,entryService.searchEntry(keywords));
            graph1 = entryService.editGraph(graph,keywords);
        } catch (Exception e) {
            return ResultFactory.buildFailureResult("查询失败");
        }
        return ResultFactory.buildSuccessResult(graph1);
    }

//    @CrossOrigin
//    @GetMapping("/api/grap")
//    public String listGrapha() throws Exception{
//        return "success";
//    }
}
