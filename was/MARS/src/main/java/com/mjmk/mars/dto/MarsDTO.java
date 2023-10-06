package com.mjmk.mars.dto;


import com.mjmk.mars.entity.MarsEntity;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MarsDTO {

    String city;
    Long detail;

    public MarsEntity dTOe()
    {
        return new MarsEntity(this.city, this.detail);
    }

}
