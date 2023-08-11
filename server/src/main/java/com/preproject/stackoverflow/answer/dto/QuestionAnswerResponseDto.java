package com.preproject.stackoverflow.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class QuestionAnswerResponseDto {
    private Integer questionId;
    private Integer answerId;
    private String body;
    private Integer recommend;
    private boolean status;
}
