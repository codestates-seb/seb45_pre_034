package com.preproject.stackoverflow.answer.controller;

import com.preproject.stackoverflow.answer.dto.AnswerPatchDto;
import com.preproject.stackoverflow.answer.dto.AnswerPostDto;
import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.answer.mapper.AnswerMapper;
import com.preproject.stackoverflow.answer.service.AnswerService;
import com.preproject.stackoverflow.dto.MultiResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/answers")
public class AnswerController {
    private AnswerService answerService;
    private AnswerMapper answerMapper;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
    }

    /**
     * 답변 작성
     * @param answerPostDto
     * @return 201_CREATED
     */
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){
        Answer answer = answerService.createAnswer(answerMapper.answerPostDtoToAnswer(answerPostDto));

        return new ResponseEntity<>(answerMapper.answerToAnswerResponseDto(answer), HttpStatus.CREATED);
    }

    /**
     * 답변 수정
     * @param answerId
     * @param answerPatchDto
     * @return 200_OK
     */
    @PatchMapping("/{answerId}")
    public ResponseEntity patchAnswer(@PathVariable("answerId") @Positive int answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto){
        answerPatchDto.setAnswerId(answerId);

        Answer answer = answerService.updateAnswer(answerMapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(answerMapper.answerToAnswerResponseDto(answer), HttpStatus.OK);
    }

    /**
     * 특정 질문에 대한 전체 답변
     * @param questionId 질문 id
     * @return 200_OK, 질문에 대한 전체 답변
     */
    @GetMapping("/question/{questionId}")
    public ResponseEntity getQuestionAnswer(@PathVariable("questionId") @Positive int questionId){
        List<Answer> answers = answerService.findQuestionAnswer(questionId);
        return new ResponseEntity<>(
                answerMapper.answersToQuestionAnswerResponseDtos(answers),
                HttpStatus.OK);
    }
    /**
     * 특정 유저에 대한 전체 답변
     * @param userId
     * @return 200_OK, 유저에 대한 전체 답변
     * */
    @GetMapping("/user/{userId}")
    public ResponseEntity getUserAnswer(@PathVariable("userId") @Positive int userId){
        List<Answer> answers = answerService.findUserAnswer(userId);
        return new ResponseEntity<>(
                answerMapper.answersToUserAnswerResponseDtos(answers),
                HttpStatus.OK
        );
    }

    /**
     *
     * @param page
     * @param size
     * @return 200_OK, 페이지네이션 적용된 유저에 대한 답변
     */
    @GetMapping
    public ResponseEntity getUserAnswers(@Positive @RequestParam int page,
                                         @Positive @RequestParam int size){
        Page<Answer> pageAnswers = answerService.findUserAnswers(page - 1, size);
        List<Answer> answers = pageAnswers.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(answerMapper.answersToUserAnswerResponseDtos(answers),
                        pageAnswers),
                HttpStatus.OK);
    }

    /**
     * 해당 답변 삭제
     * @param answerId
     * @return 204_NO_CONTENT
     */
    @DeleteMapping("/{answerId}")
    public ResponseEntity deleteAnswer(@PathVariable("answerId") @Positive int answerId){
        answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}