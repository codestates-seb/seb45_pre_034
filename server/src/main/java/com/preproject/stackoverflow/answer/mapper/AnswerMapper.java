package com.preproject.stackoverflow.answer.mapper;

import com.preproject.stackoverflow.answer.dto.QuestionAnswerResponseDto;
import com.preproject.stackoverflow.answer.dto.UserAnswerResponseDto;
import com.preproject.stackoverflow.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    QuestionAnswerResponseDto answerToAnswerResponseDto(Answer answer);
    List<QuestionAnswerResponseDto> answersToQuestionAnswerResponseDtos(List<Answer> answers);

    UserAnswerResponseDto userToAnswerResponseDto(Answer answer);
    List<UserAnswerResponseDto> answersToUserAnswerResponseDtos(List<Answer> answers);

}
