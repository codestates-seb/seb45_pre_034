package com.preproject.stackoverflow.answer.service;

import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.answer.repository.AnswerRepository;
import com.preproject.stackoverflow.exception.BusinessLogicException;
import com.preproject.stackoverflow.exception.ExceptionCode;
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

    /**
     * POST 메서드 사용시 필요한 create 메서드
     * @param answer
     * @return answer 생성
     */
    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    /**
     * PATCH 메서드 사용시 필요한 업데이트 메서드
     * @param answer
     * @return 수정된 answer
     */
    public Answer updateAnswer(Answer answer){
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getBody())
                .ifPresent(body -> findAnswer.setBody(body));
        Optional.ofNullable(answer.getRecommend())
                .ifPresent(recommend -> findAnswer.setRecommend(recommend));
        findAnswer.setStatus(answer.isStatus());

        return answerRepository.save(findAnswer);
    }

    /**
     *
     * @param answerId
     * @return Answer 번호로 찾아진 Answer
     */
    public Answer findAnswer(int answerId){
        return findVerifiedAnswer(answerId);
    }

    /**
     *
     * @param questionId
     * @return QuestionId로 찾아진 전체 리스트
     */
    public List<Answer> findQuestionAnswer(int questionId){
        List<Answer> answerList = answerRepository.findAllByQuestionId(questionId);
        return answerList;
    }

    /**
     *
     * @param userId
     * @return UserId로 찾아진 전체 리스트
     */
    public List<Answer> findUserAnswer(int userId){
        List<Answer> answerList = answerRepository.findAllByUserId(userId);
        return answerList;
    }

    /**
     * 답변 삭제
     * @param answerId
     */
    public void deleteAnswer(int answerId){
        answerRepository.deleteById(answerId);
    }
    public Answer findVerifiedAnswer(int answerId){
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(()
                        -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }

}
