package com.preproject.stackoverflow.comment.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import com.preproject.stackoverflow.comment.dto.CommentPostDto;
import com.preproject.stackoverflow.comment.entity.Comment;

@Mapper(componentModel = "spring")
public interface AnswerCommentMapper extends CommentMapper{
    /*
    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "answerId", target = "answer.answerId")
    */
    Comment commentPostDtoToComment(CommentPostDto commentPostDto);
}