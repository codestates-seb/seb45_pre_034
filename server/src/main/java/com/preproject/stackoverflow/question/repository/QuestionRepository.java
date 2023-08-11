package com.preproject.stackoverflow.question.repository;


import com.preproject.stackoverflow.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
    //Optional<Question> findByQuestionIdAndUser_UserId(Integer questionId, Integer userId);
    Optional<Question> findByQuestionIdAndUserId(Integer questionId, Integer userId);
}
