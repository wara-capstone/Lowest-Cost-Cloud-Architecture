package com.mjmk.mars.entity;


import lombok.AllArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
public class MarsEntity {

    @Id
    String city;
    @Column
    String detail;

}
