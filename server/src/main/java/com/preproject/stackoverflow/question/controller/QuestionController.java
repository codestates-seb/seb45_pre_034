package com.preproject.stackoverflow.question.controller;


import com.preproject.stackoverflow.question.dto.QuestionPatchDto;
import com.preproject.stackoverflow.question.dto.QuestionPostDto;
import com.preproject.stackoverflow.question.entity.Question;
import com.preproject.stackoverflow.question.mapper.QuestionMapper;
import com.preproject.stackoverflow.question.service.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/questions")
@Validated
public class QuestionController {
    private QuestionService questionService;
    private QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping
    public ResponseEntity patchQuestion(@PathVariable("questionId") @Positive Integer questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto)
    {
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
