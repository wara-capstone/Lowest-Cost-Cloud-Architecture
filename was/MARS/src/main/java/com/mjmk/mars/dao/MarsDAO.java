package com.mjmk.mars.dao;


import com.mjmk.mars.entity.MarsEntity;
import com.mjmk.mars.repository.MarsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MarsDAO {

    private final MarsRepository repository;

    public MarsDAO(@Autowired MarsRepository repository) {
        this.repository = repository;
    }

    public void dummyCreate(MarsEntity entity)
    {
        this.repository.save(entity);
    }



    public List<MarsEntity> dummyRead(String name)
    {
        return  this.repository.findAllByCity(name);
    }
}
