"use client";

import { useRecoilValue } from "recoil";
import { userinfo } from "@recoil/Global";

import SignInput from "@component/sign/SignInput";
import Button from "@component/common/Button";

import styles from "./EditForm.module.css";

function EditPwForm() {
    const { email } = useRecoilValue(userinfo);

    return (
        <div className={styles.container}>
            <p className={styles.guide_msg}>Change your password for {email}</p>
            <SignInput label="Current password" />
            <SignInput label="New password" />
            <SignInput label="New password (again)" />
            <Button label="Change your password" type="Primary" isFullBtn={true} />
        </div>
    );
}

export default EditPwForm;
