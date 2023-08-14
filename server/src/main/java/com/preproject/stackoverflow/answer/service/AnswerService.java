package com.preproject.stackoverflow.answer.service;

import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.answer.repository.AnswerRepository;
import com.preproject.stackoverflow.question.entity.Question;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

//    public Answer createAnswer(Answer answer){
//
//    }

    /** BUSINESS LOGIC EXCEPTION 클래스 생성 이전에 임시로 RuntimeException 사용 **/
    public Answer findAnswer(int answerId){
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new RuntimeException("404_NOT_FOUND"));
        return findAnswer;
    }
    /**임시로 runtime exception에 넣었습니다**/
    public List<Answer> findQuestionAnswer(int questionId){
        List<Answer> answerList = answerRepository.findAllByQuestionId(questionId);
        return answerList;
    }
}
