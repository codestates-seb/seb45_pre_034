package com.preproject.stackoverflow.answer.controller;

import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.answer.mapper.AnswerMapper;
import com.preproject.stackoverflow.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/answer")
public class AnswerController {
    private AnswerService answerService;
    private AnswerMapper answerMapper;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
    }

//    @PostMapping
//    public ResponseEntity postAnswer(@RequestParam("questionId") int questionId){
//        Answer answer = AnswerService.
//    }

    /**
     * 특정 질문에 대한 전체 답변 출력 메서드
     * @param questionId 질문 id
     * @author wongwan choi
     */
    @GetMapping
    public ResponseEntity getQuestionAnswer(@RequestParam("questionId") int questionId){
        List<Answer> answers = answerService.findQuestionAnswer(questionId);
        return new ResponseEntity<>(answerMapper.answersToAnswerResponseDtos(answers),HttpStatus.OK);
    }

//    @GetMapping
//    public ResponseEntity getUserAnswer(@RequestParam("userId") int userId){
//
//    }



}
