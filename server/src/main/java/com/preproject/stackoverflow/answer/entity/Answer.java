package com.preproject.stackoverflow.answer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer answerId;

    private Integer questionId;

    private Integer userId;

    @Column(name="body", nullable = false)
    private String body;

    @Column(name = "recommend")
    private Integer recommend;

    @Column(name = "status")
    private boolean status;

    @Column(name = "createdAt")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "modifiedAt")
    private LocalDateTime modifiedAt = LocalDateTime.now();



}
