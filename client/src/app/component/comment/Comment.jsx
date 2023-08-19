"use client";

import { useRef, useState } from "react";
import styles from "@component/comment/Comment.module.css";
import Button from "@component/sign/Button";
function Comment() {
    const LIMIT_OF_COMMENT = 500;
    const inputRef = useRef(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [textLength, setTextLength] = useState(0);
    const [labelText, setLabelText] = useState("Enter at least 15 characters");

    const AddCommentHandler = () => {
        setIsFormOpen(!isFormOpen);
    };

    const handleInputChange = () => {
        const inputValue = inputRef.current.value;
        setTextLength(inputValue.length);

        if (textLength >= 15) {
            setLabelText(`${LIMIT_OF_COMMENT - textLength} characters left`);
        } else {
            setLabelText("Enter at least 15 characters");
        }
    };

    return (
        <>
            {/* 댓글 데이터가 있다면 댓글 목록을 표시함  */}
            {isFormOpen ? (
                <div >
                    <form action="#" className={`${styles.flex}`}>
                        <div>
                            <textarea
                                id="comment_input"
                                className={`${styles.block} ${styles.input}` }
                                ref={inputRef}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Use comments to reply to other users or notify them of changes. if you are adding new information, edit your post instead of commenting."
                            />
                            <label htmlFor="comment_input" className={styles.block}>
                                <span>{labelText}</span>
                            </label>
                        </div>
                        <Button type={"Primary"} label={"Add comment"}></Button>
                    </form>
                </div>
            ) : (
                <div onClick={AddCommentHandler}>{"Add a comment"}</div>
            )}
        </>
    );
}
export default Comment;
