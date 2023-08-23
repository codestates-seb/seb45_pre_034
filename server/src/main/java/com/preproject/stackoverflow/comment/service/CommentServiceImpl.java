package com.preproject.stackoverflow.comment.service;

import lombok.Getter;
import com.preproject.stackoverflow.comment.entity.Comment;
import com.preproject.stackoverflow.comment.repository.CommentRepository;
import com.preproject.stackoverflow.exception.BusinessLogicException;
import com.preproject.stackoverflow.exception.ExceptionCode;
import com.preproject.stackoverflow.member.service.MemberService;

import java.util.Optional;

@Getter
public abstract class CommentServiceImpl implements CommentService{
    private final CommentRepository commentRepository;
    private final MemberService memberService;

    public CommentServiceImpl(CommentRepository commentRepository, MemberService memberService) {
        this.commentRepository = commentRepository;
        this.memberService = memberService;
    }

    @Override
    public Comment updateComment(Comment comment) {

        Comment findComment = findVerifiedComment(comment.getCommentId());

        Optional.ofNullable(comment.getBody())
                .ifPresent(body-> findComment.setBody(body));

        return  commentRepository.save(findComment);

    }

    @Override
    public void deleteComment(Long commentId) {
        Comment comment = findVerifiedComment(commentId);
        comment.setCommentStatus(Comment.CommentStatus.COMMENT_DELETED);
        commentRepository.save(comment);
    }

    public Comment findVerifiedComment(long commentId){
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        Comment findComment = optionalComment.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
        return findComment;
    }
}
