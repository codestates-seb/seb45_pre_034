package com.preproject.stackoverflow.comment.service;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.preproject.stackoverflow.comment.entity.Comment;
import com.preproject.stackoverflow.comment.repository.CommentRepository;
import com.preproject.stackoverflow.member.service.MemberService;
import com.preproject.stackoverflow.question.service.QuestionService;

@Service
@Qualifier("questionCommentService")
@Transactional
public class QuestionCommentService extends CommentServiceImpl {
    private final QuestionService questionService;

    public QuestionCommentService(CommentRepository commentRepository,
                                  MemberService memberService, QuestionService questionService) {
        super(commentRepository, memberService);
        this.questionService = questionService;
    }
    @Override
    public Comment createComment(Comment comment) {
        Member member = verifyComment(comment);
        comment.setMember(member);
        return getCommentRepository().save(comment);
    }

    /**
     * 댓글 등록 요청 데이터에 포함된 memberId와 questionId가 유효한지 검증하는 메서드입니다
     * @param comment
     */
    private Member verifyComment(Comment comment) {
        Long questionId = comment.getQuestion().getQuestionId();
        questionService.findVerifiedQuestion(questionId);
        Long memberId = comment.getMember().getMemberId();
        return getMemberService().findVerifiedMember(memberId);
    }
}
