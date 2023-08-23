package com.preproject.stackoverflow.comment.service;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.preproject.stackoverflow.answer.service.AnswerService;
import com.preproject.stackoverflow.comment.entity.Comment;
import com.preproject.stackoverflow.comment.repository.CommentRepository;
import com.preproject.stackoverflow.member.service.MemberService;

@Service
@Qualifier("answerCommentService")
@Transactional
public class AnswerCommentService extends CommentServiceImpl{
    private final AnswerService answerService;

    public AnswerCommentService(CommentRepository commentRepository,
                                MemberService memberService, AnswerService answerService) {
        super(commentRepository, memberService);
        this.answerService = answerService;
    }

    @Override
    public Comment createComment(Comment comment) {
        Member member = verifyComment(comment);
        comment.setMember(member);
        return getCommentRepository().save(comment);
    }

    /**
     * 댓글 등록 요청 데이터에 포함된 memberId와 answerId가 유효한지 검증하는 메서드입니다
     * @param comment
     */
    private Member verifyComment(Comment comment) {
        Long answerId = comment.getAnswer().getAnswerId();
        answerService.findVerifiedAnswer(answerId);
        Long memberId = comment.getMember().getMemberId();
        return getMemberService().findVerifiedMember(memberId);
    }
}
