package com.example.anima.service;

import com.example.anima.dao.EntryDAO;
import com.example.anima.pojo.Edge;
import com.example.anima.pojo.Entry;
import com.example.anima.pojo.Graph;
import com.example.anima.pojo.Node;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class EntryService {
    @Autowired
    private EntryDAO entryDAO;



    public Entry searchEntry(String keywords){
        return entryDAO.findFirstByDiseaseLikeOrMedicineLike( keywords,  keywords );
    }

    public Graph editGraph(Graph graph,String keyword){
        List<Node> nodes=graph.getNodes();
        for(Node node:nodes){
            if(node.getName().equals(keyword)){
                if (node.getType()==1){
                    node.setType(4);
                }else{
                    node.setType(5);
                }
                break;
            }
        }
        return graph;
    }

    public Graph listGraphByDisease(String disease,Entry entry3){

        List<Entry> entries=entryDAO.findAllByDisease(disease);

        if (entries.size()>20){
            Collections.shuffle(entries);
            int randomSeriesLength = 20;
            entries = entries.subList(0, randomSeriesLength);
        }


        int flag=0;
        if(entry3!=null){
            for(Entry entry1:entries){
                if (entry3.getMedicine().equals(entry1.getMedicine())) {
                    flag = 1;
                    break;
                }
            }
            if(flag==0){
                entries.add(entry3);
            }
        }

        List<Node> nodes=new ArrayList<>();
        List<Edge> edges=new ArrayList<>();
        nodes.add(new Node(0,disease,1));
        int node_id=0;
        int edge_id=0;
        for(Entry entry:entries){
            node_id++;
            nodes.add(new Node(node_id,entry.getMedicine(),2));
            edge_id++;
            edges.add(new Edge(edge_id,0,node_id,1));
            int medicine_id=node_id;
            if (!entry.getBadres().equals("") && !entry.getBadres().equals("暂无")){
                node_id++;
                edge_id++;
                nodes.add(new Node(node_id,entry.getBadres(),3));
                edges.add(new Edge(edge_id,medicine_id,node_id,2));
            }
            if (!entry.getJinji().equals("") && !entry.getBadres().equals("暂无")){
                node_id++;
                edge_id++;
                nodes.add(new Node(node_id,entry.getJinji(),3));
                edges.add(new Edge(edge_id,medicine_id,node_id,3));
            }
            if (!entry.getAttn().equals("") && !entry.getBadres().equals("暂无")){
                node_id++;
                edge_id++;
                nodes.add(new Node(node_id,entry.getAttn(),3));
                edges.add(new Edge(edge_id,medicine_id,node_id,4));
            }
            if (!entry.getMethod().equals("") && !entry.getBadres().equals("暂无")){
                node_id++;
                edge_id++;
                nodes.add(new Node(node_id,entry.getMethod(),3));
                edges.add(new Edge(edge_id,medicine_id,node_id,5));
            }

        }
        return new Graph(nodes,edges);
    }
//    public List<Entry> listMedicine(String medicine){
//        return entryDAO.findAllByMedicine(medicine);
//    }
}
