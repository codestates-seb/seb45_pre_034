package com.preproject.stackoverflow.question.repository;


import com.preproject.stackoverflow.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Integer> {

}
