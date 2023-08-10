package com.preproject.stackoverflow.comment.controller;

import com.preproject.stackoverflow.comment.dto.CommentPatchDto;
import com.preproject.stackoverflow.comment.dto.CommentPostDto;
import com.preproject.stackoverflow.comment.dto.CommentResponseDto;
import com.preproject.stackoverflow.comment.entity.Comment;
import com.preproject.stackoverflow.comment.mapper.CommentMapper;
import com.preproject.stackoverflow.comment.service.CommentService;
import com.preproject.stackoverflow.dto.MultiResponseDto;
import com.preproject.stackoverflow.dto.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Positive;
import java.util.List;
@RestController
@RequestMapping("/comments")
@Validated
@RequiredArgsConstructor
public class CommentController {
    /*
    private final CommentService commentService;
    private final CommentMapper mapper;
    public ResponseEntity postComment(@Validated CommentPostDto commentPostDto) {
        Comment comment = mapper.CommentPostDtoToComment(commentPostDto);
        List<Comment> commentList = commentService.createComment(comment);
        return new ResponseEntity(mapper.commentsToResponseDto(commentList), HttpStatus.CREATED);
    }

    public ResponseEntity patchComment(@Validated CommentPatchDto commentPatchDto) {
        Comment comment = mapper.CommentPatchDtoToComment(commentPatchDto);
        List<Comment> commentList = commentService.editComment(comment);
        return new ResponseEntity<>(mapper.commentsToResponseDto(commentList), HttpStatus.OK);
    }

    public ResponseEntity getComments() {
        List<Comment> commentList = commentService.getComments();
        return new ResponseEntity(mapper.commentsToResponseDto(commentList), HttpStatus.OK);
    }

    public ResponseEntity deleteComment(@Positive long commentId){
        List<Comment> commentList = commentService.deleteComment(commentId);
        return new ResponseEntity(mapper.commentsToResponseDto(commentList), HttpStatus.NO_CONTENT);
    }
    */
}
