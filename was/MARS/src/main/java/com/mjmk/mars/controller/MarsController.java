package com.mjmk.mars.controller;


import com.mjmk.mars.dao.MarsDAO;
import com.mjmk.mars.dto.MarsDTO;
import com.mjmk.mars.service.MarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MarsController {

    private final MarsService service;

    public MarsController(@Autowired MarsService service) {
        this.service = service;
    }



    @GetMapping("/g")
    public void dummyGet(String name)
    {
        service.testRead(name);
    }


    @PostMapping("/p")
    public void dummyPost(MarsDTO dto)
    {
        service.testCreat(dto);
    }



}
