package com.preproject.stackoverflow.comment.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import com.preproject.stackoverflow.comment.dto.CommentPatchDto;
import com.preproject.stackoverflow.comment.dto.CommentResponseDto;
import com.preproject.stackoverflow.comment.entity.Comment;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentPatchDtoToComment(CommentPatchDto commentPatchDto);
    /*
    @Mapping(source = "createdAt", target = "createdAt")
    @Mapping(source = "user.userId", target = "userId")
    @Mapping(source = "user.displayName", target = "commenter")
    */
    CommentResponseDto commentToCommentResponseDto(Comment comment);

    @Named("CommentsToCommentResponseDtos")
    List<CommentResponseDto> commentsToCommentResponseDtos(List<Comment> comments);
}
