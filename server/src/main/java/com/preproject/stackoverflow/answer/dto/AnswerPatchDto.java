package com.preproject.stackoverflow.answer.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerPatchDto {
    private Integer answerId;
    private Integer questionId;
    private Integer userId;
    private String body;
    private Integer recommend;
    private boolean status;
}
