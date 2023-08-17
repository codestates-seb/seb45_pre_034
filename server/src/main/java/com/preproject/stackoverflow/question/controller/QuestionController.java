package com.preproject.stackoverflow.question.controller;


import com.preproject.stackoverflow.question.dto.QuestionPatchDto;
import com.preproject.stackoverflow.question.dto.QuestionPostDto;
import com.preproject.stackoverflow.question.dto.QuestionResponseDto;
import com.preproject.stackoverflow.question.entity.Question;
import com.preproject.stackoverflow.question.mapper.QuestionMapper;
import com.preproject.stackoverflow.question.service.QuestionService;
import lombok.extern.flogger.Flogger;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.Parameter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import javax.validation.constraints.Positive;



@RestController
@RequestMapping("/questions")
@Validated
@Slf4j
public class QuestionController {
    private QuestionService questionService;

    private QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/user/question")
    public ResponseEntity getQuestion(@RequestParam("questionId") @Positive Integer questionId,
                                      @RequestParam("userId") @Positive Integer userId) {
        log.debug("getQuestion() called");
        Question question = questionService.findQeustionUser(questionId, userId);
        return new ResponseEntity<>(mapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity getQuestionsUser(@RequestParam("userId") @Positive Integer userId) {
        log.debug("getQuestionsUser() called");
        return new ResponseEntity<>(mapper.questionsToQuestionResponseDtos(questionService.findQuestionsUser(userId)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions() {
        log.debug("getQuestions() called");
        return new ResponseEntity<>(questionService.findQuestions(), HttpStatus.OK);
    }

    @PatchMapping
    public ResponseEntity patchQuestion(@Valid @RequestBody QuestionPatchDto questionPatchDto)
    {
        log.debug("patchQuestion() called");
        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));
        return new ResponseEntity<>(question, HttpStatus.OK);
    }

    @DeleteMapping("/user")
    public ResponseEntity deleteQuestion(@RequestParam("questionId") @Positive Integer questionId,
                                         @RequestParam("userId") @Positive Integer userId) {
        questionService.deleteQuestion(questionId, userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Transactional
    @DeleteMapping
    public ResponseEntity deleteQuestions(@RequestParam("userId") @Positive Integer userId) {
        questionService.deleteQuestions(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
