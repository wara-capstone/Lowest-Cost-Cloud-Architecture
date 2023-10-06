package com.mjmk.mars.entity;


import com.mjmk.mars.dto.MarsDTO;
import lombok.AllArgsConstructor;
import lombok.Generated;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class MarsEntity {

    @Column
    String city;
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long detail;



    public MarsDTO eTod()
    {
        return new MarsDTO(this.city, this.detail);
    }
}
