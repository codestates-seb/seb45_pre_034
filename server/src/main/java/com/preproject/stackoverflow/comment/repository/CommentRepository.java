package com.preproject.stackoverflow.comment.repository;

import com.preproject.stackoverflow.comment.entity.Comment;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface CommentRepository extends CrudRepository<Comment, Integer> {

}
