package com.preproject.stackoverflow.question.service;

import com.preproject.stackoverflow.exception.BusinessLogicException;
import com.preproject.stackoverflow.exception.ExceptionCode;
import com.preproject.stackoverflow.question.entity.Question;
import com.preproject.stackoverflow.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    /**
     * 질문 생성
     * @param question
     * @return Question
     */
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    /**
     * 질문 수정
     * @param question
     * @return Question
     */
    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId(), question.getUserId());

        // 각 값이 NULL이 아니라면 값을 치환한다.
        Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getBody()).ifPresent(body -> findQuestion.setBody(body));
        findQuestion.setModifiedAt(LocalDateTime.now());

        return questionRepository.save(findQuestion);
    }

    /**
     * 특정 유저의 특정 질문 조회
     * @param questionId
     * @param userId
     * @return Question
     */
    public Question findQeustionUser(Integer questionId, Integer userId) {
        return findVerifiedQuestion(questionId, userId);
    }

    /**
     * 특정 유저의 질문 목록 조회
     * @param userId
     * @return Question
     */
    public List<Question> findQuestionsUser(Integer userId) {
        return questionRepository.findByUserId(userId);
    }

    /**
     * 모든 질문 조회
     * @return List<Question>
     */
    public List<Question> findQuestions() {
        return questionRepository.findAll();
    }

    /**
     * 특정 질문 삭제
     * @param questionId
     * @param userId
     */
    public void deleteQuestion(Integer questionId, Integer userId) {
        Question findQuestion = findVerifiedQuestion(questionId, userId);
        questionRepository.delete(findQuestion);
    }

    /**
     * 특정 유저의 모든 질문 삭제
     * @param userId
     */
    public void deleteQuestions(Integer userId) {
        questionRepository.deleteAllByUserId(userId);
    }

    /**
     * 특정 유저의 특정 질문을 조회하는 메서드입니다.
     * 만약 질문이 존재하지 않는다면 예외를 발생시킵니다.
     * @param questionId
     * @param userId
     * @return Question
     */
    private Question findVerifiedQuestion(Integer questionId, Integer userId) {
        //Optional<Question> optionalQuestion = questionRepository.findByQuestionIdAndUser_UserId(questionId, userId);
        Optional<Question> optionalQuestion = questionRepository.findByQuestionIdAndUserId(questionId, userId);
        Question findQuestion = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }

    /**
     * 질문이 존재하는지 확인하는 메서드입니다.
     * 만약 질문이 존재한다면 예외를 발생시킵니다.
     * @param questionId
     */
    private void verifyExistQuestion(Integer questionId) {
        Optional<Question> question = questionRepository.findById(questionId);
        if(question.isPresent()){
            throw new BusinessLogicException(ExceptionCode.QUESTION_EXISTS);
        }
    }
}
