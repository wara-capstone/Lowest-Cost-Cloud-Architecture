package com.mjmk.mars.service;

import com.mjmk.mars.dao.MarsDAO;
import com.mjmk.mars.dto.MarsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MarsService {

    private final MarsDAO dao;

    public MarsService(@Autowired MarsDAO dao) {
        this.dao = dao;
    }



    public void testCreat(MarsDTO dto)
    {
        dao.dummyCreate(dto.dTOe());
    }

    public void testRead(String name)
    {
        dao.dummyRead(name);
    }


}
