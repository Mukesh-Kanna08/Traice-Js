package com.simplilearn.employee_review.entity;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="address")
@Data
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;





}
