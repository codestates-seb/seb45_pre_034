package com.preproject.stackoverflow.answer.entity;

import com.preproject.stackoverflow.question.entity.Question;
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

    @ManyToOne
    @JoinColumn(name = "questionId")
    private Question question;

//    유저 엔티티 추가후 수정
//    @ManyToOne
//    @JoinColumn(name = "userId")
//    private User user;

    @Column(nullable = false)
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
