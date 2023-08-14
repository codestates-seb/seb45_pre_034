package com.preproject.stackoverflow.answer.controller;

import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.answer.mapper.AnswerMapper;
import com.preproject.stackoverflow.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
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
    @GetMapping("/{questionId}")
    public ResponseEntity getQuestionAnswer(@PathVariable("questionId") @Positive int questionId){
        List<Answer> answers = answerService.findQuestionAnswer(questionId);
        return new ResponseEntity<>(
                answerMapper.answersToQuestionAnswerResponseDtos(answers),
                HttpStatus.OK);
    }
    /**
     * 특정 유저에 대한 전체 답변 출력 메서드
     * @param userId
     * @author wongwan choi
     * */
    @GetMapping("/{userId}")
    public ResponseEntity getUserAnswer(@PathVariable("userId") @Positive int userId){
        List<Answer> answers = answerService.findUserAnswer(userId);
        return new ResponseEntity<>(
                answerMapper.answersToUserAnswerResponseDtos(answers),
                HttpStatus.OK
        );
    }



}
