package com.preproject.stackoverflow.comment.controller;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.preproject.stackoverflow.comment.dto.CommentPostDto;
import com.preproject.stackoverflow.comment.dto.CommentPatchDto;
import com.preproject.stackoverflow.comment.dto.CommentResponseDto;
import com.preproject.stackoverflow.dto.SingleResponseDto;
import com.preproject.stackoverflow.comment.entity.Comment;
import com.preproject.stackoverflow.comment.mapper.AnswerCommentMapper;
import com.preproject.stackoverflow.comment.service.CommentService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

/**
 * 답변 댓글 컨트롤러
 */
@RestController
@RequestMapping("/questions/{questionId}/answers/{answerId}/comments")
@Validated
public class AnswerCommentController {
    private final CommentService commentService;
    private final AnswerCommentMapper mapper;

    public AnswerCommentController(@Qualifier("answerCommentService") CommentService commentService,
                                   AnswerCommentMapper mapper) {
        this.commentService = commentService;
        this.mapper = mapper;
    }

    /**
     * 답변 댓글 작성
     * @param post
     * @return 201_CREATED
     */
    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentPostDto post,
                                      @Positive @PathVariable("answerId") long answerId) {
        Comment answerComment = mapper.commentPostDtoToComment(post);
        Comment createdComment = commentService.createComment(answerComment);
        CommentResponseDto response = mapper.commentToCommentResponseDto(createdComment);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    /**
     * 답변 댓글 수정
     * @param commentId
     * @param patch
     * @return 200_OK
     */
    @PatchMapping("/{commentId}")
    public ResponseEntity patchComment(@Positive @PathVariable("commentId") Integer commentId,
                                       @Valid @RequestBody CommentPatchDto patch) {
        patch.setCommentId(commentId);
        Comment comment = commentService.updateComment(mapper.commentPatchDtoToComment(patch));
        CommentResponseDto response = mapper.commentToCommentResponseDto(comment);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.OK);
    }

    /**
     * 답변 댓글 삭제
     * @param commentId
     * @return 204_NO_CONTENT
     */
    @DeleteMapping("/{commentId}")
    public ResponseEntity deleteComment(@Positive @PathVariable("commentId") Integer commentId) {
        commentService.deleteComment(commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
