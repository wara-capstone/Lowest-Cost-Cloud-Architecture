package com.mjmk.mars.controller;



import com.mjmk.mars.dto.MarsDTO;
import com.mjmk.mars.service.MarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MarsController {

    private final MarsService service;
    public MarsController(@Autowired MarsService service) {
        this.service = service;
    }


    /**
     * @param name 해당 과일 데이터를 모두 반환
     * */
    @GetMapping(path = "fruit/{name}")
    public List<MarsDTO> dummyGet(@PathVariable String name)
    {
        return service.testRead(name);
    }


    /**
     * "ready"를 받고 "OK"를 리턴
     *
     * */
    @PostMapping(path = "fruits/{name}")
    public String dummyPost(@PathVariable String name) {
        return service.testCreat(name);
    }



}
