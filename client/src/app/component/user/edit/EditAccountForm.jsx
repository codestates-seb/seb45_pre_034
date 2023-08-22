"use client";

import Image from "next/image";

import { useRecoilValue } from "recoil";
import { userinfo } from "@recoil/Global";

import SignInput from "@component/sign/SignInput";
import Button from "@component/common/Button";

import IconDefaultUser from "/public/icon_default_user.png";

import styles from "./EditForm.module.css";

function EditAccountForm() {
    const { profile } = useRecoilValue(userinfo);

    const nicknameSubGuide = `Display name can only
    \n- contains letters, digits, spaces, hyphens or apostrophes
    \n- start with a letter of digis
    \n- be 3 to 30 characters long`;

    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <Image src={profile || IconDefaultUser} width={96} height={96} alt="유저 프로필 사진" />
                <label for="userAuthImage" class={styles.file_input}>
                    Edit photo
                </label>
                <input class={styles.vanish_style} type="file" id="userAuthImage" accept="image/*" />
            </div>

            <div>
                <SignInput label="Display name(Nickname)" subGuideMsg={nicknameSubGuide} />
                <Button label="Change Nickname" type="Primary" />
            </div>
        </div>
    );
}

export default EditAccountForm;
