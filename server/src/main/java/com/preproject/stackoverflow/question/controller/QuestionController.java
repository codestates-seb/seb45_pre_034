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

    /**
    * 질문 등록
    * @param questionPostDto 질문 등록 정보
    * @return 201_CREATED
    */
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    /**
     * 특정 유저의 특정 질문 조회
     * @param questionId 질문 아이디
     * @param userId 유저 아이디
     * @return QuestionResponseDto, 200_OK
     */
    @GetMapping("/user/question")
    public ResponseEntity getQuestion(@RequestParam("questionId") @Positive Integer questionId,
                                      @RequestParam("userId") @Positive Integer userId) {
        log.debug("getQuestion() called");
        Question question = questionService.findQeustionUser(questionId, userId);
        return new ResponseEntity<>(mapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

    /**
     * 특정 유저의 질문 목록 조회
     * @param userId 유저 아이디
     * @return QuestionResponseDtos, 200_OK
     */
    @GetMapping("/user")
    public ResponseEntity getQuestionsUser(@RequestParam("userId") @Positive Integer userId) {
        log.debug("getQuestionsUser() called");
        return new ResponseEntity<>(mapper.questionsToQuestionResponseDtos(questionService.findQuestionsUser(userId)), HttpStatus.OK);
    }

    /**
     * 전체 질문 목록 조회
     * @return QuestionResponseDtos, 200_OK
     */
    @GetMapping
    public ResponseEntity getQuestions() {
        log.debug("getQuestions() called");
        return new ResponseEntity<>(mapper.questionsToQuestionResponseDtos(questionService.findQuestions()), HttpStatus.OK);
    }

    /**
     * 특정 유저의 특정 질문 수정
     * @param questionPatchDto 질문 수정 정보
     * @return QuestionResponseDto, 200_OK
     */
    @PatchMapping
    public ResponseEntity patchQuestion(@Valid @RequestBody QuestionPatchDto questionPatchDto)
    {
        log.debug("patchQuestion() called");
        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));
        return new ResponseEntity<>(mapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

    /**
     * 특정 유저의 특정 질문 삭제
     * @param questionId 질문 아이디
     * @param userId 유저 아이디
     * @return 204_NO_CONTENT
     */
    @DeleteMapping("/user")
    public ResponseEntity deleteQuestion(@RequestParam("questionId") @Positive Integer questionId,
                                         @RequestParam("userId") @Positive Integer userId) {
        questionService.deleteQuestion(questionId, userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /**
     * 특정 유저의 전체 질문 삭제
     * @param userId 유저 아이디
     * @return 204_NO_CONTENT
     */
    @Transactional
    @DeleteMapping
    public ResponseEntity deleteQuestions(@RequestParam("userId") @Positive Integer userId) {
        questionService.deleteQuestions(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
