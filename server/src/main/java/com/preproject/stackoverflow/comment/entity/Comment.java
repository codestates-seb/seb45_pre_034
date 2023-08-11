package com.preproject.stackoverflow.comment.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Comment{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer commentId;
    /*
    @ManyToOne
    @JoinColumn(name = "userId")
    private User nickname;

    @ManyToOne
    @JoinColumn(name = "questionId")
    private Question questionId;

    @ManyToOne
    @JoinColumn(name = "answerId")
    private Answer answerId;
    */
    @Column(name="body", nullable = false)
    private String body;

    @Column(name = "createdAt")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "modifiedAt")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    /*
    public void setUser(User user) {
        this.user = user;
        if (!user.getQuestionCommentList().contains(this)) {
            user.getQuestionCommentList().add(this);
        }
    }

    public void setQuestion(Question question) {
        this.question = question;
        if (!question.getQuestionCommentList().contains(this)) {
            question.getQuestionCommentList().add(this);
        }
    }

    public void setAnswer(Answer answer) {
        this.answer = answer;
        if (!answer.getAnswerCommentList().contains(this)) {
            answer.getAnswerCommentList().add(this);
        }
    }
    */
}
