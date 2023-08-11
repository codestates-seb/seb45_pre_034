package com.preproject.stackoverflow.question.service;

import com.preproject.stackoverflow.exception.BusinessLogicException;
import com.preproject.stackoverflow.exception.ExceptionCode;
import com.preproject.stackoverflow.question.entity.Question;
import com.preproject.stackoverflow.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId(), question.getUserId());

        // 각 값이 NULL이 아니라면 값을 치환한다.
        Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getBody()).ifPresent(body -> findQuestion.setBody(body));
        findQuestion.setModifiedAt(LocalDateTime.now());

        return findQuestion;
    }

    private Question findVerifiedQuestion(Integer questionId, Integer userId) {
        //Optional<Question> optionalQuestion = questionRepository.findByQuestionIdAndUser_UserId(questionId, userId);
        Optional<Question> optionalQuestion = questionRepository.findByQuestionIdAndUserId(questionId, userId);
        Question findQuestion = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
    private void verifyExistQuestion(Integer questionId) {
        Optional<Question> question = questionRepository.findById(questionId);
        if(question.isPresent()){
            throw new BusinessLogicException(ExceptionCode.QUESTION_EXISTS);
        }
    }
}
