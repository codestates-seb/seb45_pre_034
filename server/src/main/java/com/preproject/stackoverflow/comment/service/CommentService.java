package com.preproject.stackoverflow.comment.service;

import com.preproject.stackoverflow.comment.entity.Comment;

public interface CommentService {
    Comment createComment(Comment comment);

    Comment updateComment(Comment comment);

    void deleteComment(Integer commentId);
}
