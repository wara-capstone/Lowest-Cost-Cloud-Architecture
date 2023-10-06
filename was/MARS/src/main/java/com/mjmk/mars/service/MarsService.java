package com.mjmk.mars.service;

import com.mjmk.mars.dao.MarsDAO;
import com.mjmk.mars.dto.MarsDTO;
import com.mjmk.mars.entity.MarsEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MarsService {

    private final MarsDAO dao;

    public MarsService(@Autowired MarsDAO dao) {
        this.dao = dao;
    }



    public String testCreat(String ready)
    {
        MarsEntity dummyEntity = new MarsEntity();
        dummyEntity.setCity(ready);
        dao.dummyCreate(dummyEntity);
        return "OK";
    }

    public List<MarsDTO> testRead(String name)
    {
        List<MarsEntity> entityList= dao.dummyRead(name);
        List<MarsDTO> dtoList = new ArrayList<>();

        for(var item: entityList)
        {
            dtoList.add(item.eTod());
        }

        return dtoList;
    }



}
