package com.preproject.stackoverflow.comment.dto;

import lombok.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * DTO for {@link com.preproject.stackoverflow.comment.entity.Comment}
 */
@Data
@NoArgsConstructor
@Setter
@Getter
public class CommentPostDto implements Serializable {
    @NotNull
    private Integer userId;
    private Integer questionId;
    private Integer answerId;
    @NotBlank(message = "댓글 내용을 작성해야 합니다.")
    private String body;
}
