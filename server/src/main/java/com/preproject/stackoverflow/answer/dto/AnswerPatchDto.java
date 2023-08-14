package com.preproject.stackoverflow.answer.dto;

import lombok.Getter;

@Getter
public class AnswerPatchDto {
    private Integer questionId;
    private Integer userId;
    private String body;
    private Integer recommend;
    private boolean status;
}
