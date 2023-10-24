package com.preproject.stackoverflow.comment.repository;

import com.preproject.stackoverflow.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

}
