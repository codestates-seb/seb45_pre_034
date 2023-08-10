package com.preproject.stackoverflow.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@Getter
public class QuestionPatchDto {
    @NotBlank
    private Integer questionId;

    @NotBlank
    private String nickname;

    @NotBlank(message = "제목은 빈칸으로 둘 수 없습니다.")
    private String title;

    @NotBlank(message = "내용은 빈칸으로 둘 수 없습니다.")
    private String body;
}
