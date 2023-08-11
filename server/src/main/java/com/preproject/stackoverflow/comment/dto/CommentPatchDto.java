package com.preproject.stackoverflow.comment.dto;

import lombok.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * DTO for {@link com.preproject.stackoverflow.comment.entity.Comment}
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class CommentPatchDto implements Serializable {
    @NotNull
    private Integer CommentId;
    @NotNull
    private Integer nickname;
    private Integer questionId;
    @NotBlank(message = "댓글 내용을 작성해야 합니다.")
    private String body;
}