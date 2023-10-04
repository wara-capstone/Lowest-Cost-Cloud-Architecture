package com.mjmk.mars.dto;


import com.mjmk.mars.entity.MarsEntity;
import lombok.Builder;
import org.springframework.stereotype.Component;

@Component
public class MarsDTO {

    String city;
    String detail;



    public MarsEntity dTOe()
    {
        return new MarsEntity(this.city, this.detail);
    }

}
