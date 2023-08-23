package com.preproject.stackoverflow.comment.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import com.preproject.stackoverflow.comment.dto.CommentPostDto;
import com.preproject.stackoverflow.comment.entity.Comment;

@Mapper(componentModel = "spring")
public interface QuestionCommentMapper extends CommentMapper{
    /*
    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "questionId", target = "question.questionId")
    */
    Comment commentPostDtoToComment(CommentPostDto commentPostDto);
}
