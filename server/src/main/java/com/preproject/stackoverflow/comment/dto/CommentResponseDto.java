package com.preproject.stackoverflow.comment.dto;

import lombok.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * DTO for {@link com.preproject.stackoverflow.comment.entity.Comment}
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class CommentResponseDto implements Serializable {
    @NotNull
    private Integer CommentId;
    @NotNull
    private Integer nickname;
    private Integer questionId;
    private Integer answerId;
    private String body;
    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime modifiedAt = LocalDateTime.now();
}