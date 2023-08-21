"use client";
import Button from "@component/common/Button";
import { useEffect, useRef, useState } from "react";
import styles from "@component/comment/Comment.module.css";
const MIN_LENGTH = 15;
const MAX_LENGTH = 500;

function Comment() {
    const inputRef = useRef(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [inputText, setInputText] = useState("");
    const [labelText, setLabelText] = useState("");
    const OpenFormHandler = () => {
        setIsFormOpen(!isFormOpen);
    };

    const InputChangeHandler = () => {
        setInputText(inputRef.current.value);
    };

    const SetNoticeHandler = () => {
        let notice_string;

        if (inputText.length >= MAX_LENGTH) {
            //최대 이상일 때
            notice_string = "You can no longer create it";
        } else {
            if (inputText.length >= MIN_LENGTH) {
                notice_string = `${MAX_LENGTH - inputText.length} characters left`;
            } else {
                //최소 미만일 때
                notice_string = "Enter at least 15 characters";
            }
        }
        setLabelText(notice_string);
    };

    useEffect(() => {
        SetNoticeHandler();
    }, [inputText]);

    return (
        <>
            {/* 댓글 데이터가 있다면 댓글 목록을 표시함  */}
            {isFormOpen ? (
                <div>
                    <form action="#" className={`${styles.flex}`}>
                        <div>
                            <textarea
                                id="comment"
                                className={`${styles.block} ${styles.input}`}
                                type="text"
                                maxlength={MAX_LENGTH}
                                placeholder="Use comments to reply to other users or notify them of changes. if you are adding new information, edit your post instead of commenting."
                                ref={inputRef}
                                // value={inputText}
                                onChange={InputChangeHandler}
                                onPaste={InputChangeHandler}
                            />
                            <label htmlFor="comment" className={styles.block}>
                                <span>{labelText}</span>
                            </label>
                        </div>
                        <Button type={"Primary"} label={"Add comment"}></Button>
                    </form>
                </div>
            ) : (
                <div onClick={OpenFormHandler}>{"Add a comment"}</div>
            )}
        </>
    );
}
export default Comment;
