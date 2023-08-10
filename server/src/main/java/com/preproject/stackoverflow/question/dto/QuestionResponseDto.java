package com.preproject.stackoverflow.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.Column;
import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class QuestionResponseDto {
    private Integer questionId;
    //private User user;
    private String title;
    private String body;
    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime modifiedAt = LocalDateTime.now();
}
