"use client";

import { useState } from "react";
import styles from "./FindPwForm.module.css";
import SignInput from "@component/sign/SignInput";
import Button from "@component/common/Button";

function FindPwForm() {
    const [email, setEmail] = useState("");
    const [isEmailChecked, setIsEmailChecked] = useState(false);

    return (
        <div className={styles.container}>
            {isEmailChecked ? (
                <>
                    <p className={styles.guide_msg}>Reset your password for {email}</p>
                    <SignInput label="New password" />
                    <SignInput label="New password (again)" />
                    <Button label="Reset your password" type="Primary" isFullBtn={true} />
                </>
            ) : (
                <>
                    <p className={styles.guide_msg}>
                        Forgot your account's password? Enter your email address and we'll check if your email is valid.
                    </p>
                    <SignInput label="Email" />
                    <Button label="Check if your email is valid" type="Primary" isFullBtn={true} />
                </>
            )}
        </div>
    );
}

export default FindPwForm;
