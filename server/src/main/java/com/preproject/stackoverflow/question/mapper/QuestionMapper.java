package com.preproject.stackoverflow.question.mapper;

import com.preproject.stackoverflow.question.dto.QuestionPatchDto;
import com.preproject.stackoverflow.question.dto.QuestionPostDto;
import com.preproject.stackoverflow.question.dto.QuestionResponseDto;
import com.preproject.stackoverflow.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

    QuestionResponseDto questionToQuestionResponseDto(Question question);
    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);
}
