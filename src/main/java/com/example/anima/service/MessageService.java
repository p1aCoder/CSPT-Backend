package com.example.anima.service;

import com.example.anima.dao.MessageDAO;
import com.example.anima.pojo.Edge;
import com.example.anima.pojo.Graph;
import com.example.anima.pojo.Message;
import com.example.anima.pojo.Node;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MessageService {
    @Autowired
    MessageDAO messageDAO;

    public Graph processMessage(Message message){
        String medicine=message.getName();
        List<String> badreses=message.getBadres();
        List<String> diseases=message.getDisease();

        List<Node> nodes=new ArrayList<>();
        List<Edge> edges=new ArrayList<>();
        nodes.add(new Node(0,medicine,6));

        int node_id=0;
        int edge_id=0;

        for(String badres:badreses){
            node_id++;
            nodes.add(new Node(node_id,badres,8));
            edge_id++;
            edges.add(new Edge(edge_id,0,node_id,2));
        }

        for(String disease:diseases){
            node_id++;
            nodes.add(new Node(node_id,disease,7));
            edge_id++;
            edges.add(new Edge(edge_id,0,node_id,6));
        }

        return new Graph(nodes,edges);

    }
}
