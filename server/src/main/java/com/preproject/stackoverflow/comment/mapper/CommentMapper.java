package com.preproject.stackoverflow.comment.mapper;

import com.preproject.stackoverflow.comment.dto.CommentPatchDto;
import com.preproject.stackoverflow.comment.dto.CommentPostDto;
import com.preproject.stackoverflow.comment.dto.CommentResponseDto;
import com.preproject.stackoverflow.comment.entity.Comment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    /*
    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "answerId", target = "answer.answerId")
    Comment CommentPostDtoToComment(CommentPostDto CommentPostDto);

    @Mapping(source = "userId", target = "user.userId")
    Comment CommentpatchDtoToComment(CommentPatchDto CommentPatchDto);

    @Mapping(source = "user.userId", target = "userId")
    @Mapping(source = "answer.answerId", target = "answerId")
    CommentResponseDto commentToCommentResponseDto(Comment Comment);

    @Mapping(source = "user.userId", target = "userId")
    @Mapping(source = "answer.answerId", target = "answerId")
    List<CommentResponseDto> commentsToResponseDto(List<Comment> Comments);
    */
}
