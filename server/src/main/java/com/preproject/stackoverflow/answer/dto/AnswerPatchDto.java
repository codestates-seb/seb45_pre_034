package com.preproject.stackoverflow.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerPatchDto {
    private Integer answerId;
    private Integer questionId;
    private Integer userId;
    private String body;
    private Integer recommend;
    private boolean status;
    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime modifiedAt = LocalDateTime.now();
}
