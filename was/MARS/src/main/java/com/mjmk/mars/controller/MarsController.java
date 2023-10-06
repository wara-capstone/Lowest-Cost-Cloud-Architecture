package com.mjmk.mars.controller;



import com.mjmk.mars.dto.MarsDTO;
import com.mjmk.mars.service.MarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
//@CrossOrigin(origins = "http://118.67.130.119")
public class MarsController {

    private final MarsService service;
    public MarsController(@Autowired MarsService service) {
        this.service = service;
    }


    /**
     * @param name 해당 과일 데이터를 모두 반환
     * */
    @GetMapping(path = "fruits/{name}")
    public List<MarsDTO> dummyGet(@RequestBody @PathVariable String name)
    {
        return service.testRead(name);
    }


    /**
     * "ready"를 받고 "OK"를 리턴
     *
     * */

    @PostMapping(path = "fruits")
    public MarsDTO dummyPost(@RequestBody String name) {
        service.testCreat(name);

        return new MarsDTO("OK", 1L);
    }



}
