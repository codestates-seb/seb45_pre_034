package com.preproject.stackoverflow.answer.mapper;

import com.preproject.stackoverflow.answer.dto.AnswerResponseDto;
import com.preproject.stackoverflow.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);

}
