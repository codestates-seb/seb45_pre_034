package com.preproject.stackoverflow.answer.mapper;

import com.preproject.stackoverflow.answer.dto.QuestionAnswerResponseDto;
import com.preproject.stackoverflow.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    QuestionAnswerResponseDto answerToAnswerResponseDto(Answer answer);
    List<QuestionAnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);

}
