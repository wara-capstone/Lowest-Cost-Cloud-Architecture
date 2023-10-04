package com.mjmk.mars.repository;

import com.mjmk.mars.entity.MarsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MarsRepository extends JpaRepository<MarsEntity, String> {


    List<MarsEntity> findAllByCity(String name);
}
