package com.preproject.stackoverflow.answer.repository;

import com.preproject.stackoverflow.answer.entity.Answer;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AnswerRepository extends CrudRepository<Answer, Integer> {

    List<Answer> findAllByQuestionId(Integer questionId);
    List<Answer> findAllByUserId(Integer userId);
}
