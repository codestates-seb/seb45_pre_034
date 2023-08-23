package com.preproject.stackoverflow.comment.controller;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.preproject.stackoverflow.comment.dto.CommentPostDto;
import com.preproject.stackoverflow.comment.dto.CommentPatchDto;
import com.preproject.stackoverflow.comment.entity.Comment;
import com.preproject.stackoverflow.comment.mapper.QuestionCommentMapper;
import com.preproject.stackoverflow.comment.service.CommentService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/questions/{questionId}/comments")
@Validated
public class QuestionCommentController {
    private final CommentService commentService;
    private final QuestionCommentMapper mapper;

    public QuestionCommentController(@Qualifier("questionCommentService") CommentService commentService,
                                     QuestionCommentMapper mapper) {
        this.commentService = commentService;
        this.mapper = mapper;
    }

    /**
     * 질문 댓글 작성
     * @param post
     * @return 201_CREATED
     */
    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentPostDto post,
                                         @Positive @PathVariable("questionId") Integer questionId) {
        Comment QusetionComment = mapper.commentPostDtoToComment(post);
        Comment createdComment = commentService.createComment(QusetionComment);
        return new ResponseEntity(mapper.commentToCommentResponseDto(createdComment), HttpStatus.CREATED);
    }

    /**
     * 질문 댓글 수정
     * @param commentId
     * @param patch
     * @return 200_OK
     */
    @PatchMapping("/{commentId}")
    public ResponseEntity patchComment(@Positive @PathVariable("commentId") Integer commentId,
                                          @Valid @RequestBody CommentPatchDto patch) {
        patch.setCommentId(commentId);
        Comment comment = commentService.updateComment(mapper.commentPatchDtoToComment(patch));
        return new ResponseEntity<>(mapper.commentToCommentResponseDto(comment), HttpStatus.OK);

    }

    /**
     * 질문 댓글 삭제
     * @param commentId
     * @return 204_NO_CONTENT
     */
    @DeleteMapping("/{commentId}")
    public ResponseEntity deleteComment(@Positive @PathVariable("commentId") Integer commentId) {
        commentService.deleteComment(commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
