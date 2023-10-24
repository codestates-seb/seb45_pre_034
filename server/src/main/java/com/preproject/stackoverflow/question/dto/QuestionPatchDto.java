package com.preproject.stackoverflow.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@Getter
@Setter
public class QuestionPatchDto {
    @NotNull(message = "질문 아이디는 빈칸으로 둘 수 없습니다.")
    private Integer questionId;

    @NotNull(message = "유저 아이디는 빈칸으로 둘 수 없습니다.")
    private Integer userId;

    @NotBlank(message = "제목은 빈칸으로 둘 수 없습니다.")
    private String title;

    @NotBlank(message = "내용은 빈칸으로 둘 수 없습니다.")
    private String body;
}
