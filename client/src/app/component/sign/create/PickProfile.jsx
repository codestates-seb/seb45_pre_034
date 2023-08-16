"use client";

import Image from "next/image";

import { useRecoilValue } from "recoil";
import { userinfo } from "@recoil/Global";

import Button from "@component/sign/Button";

import IconDefaultUser from "/public/icon_default_user.png";
import styles from "./PickProfile.module.css";

function PickProfile() {
    const { profile } = useRecoilValue(userinfo);

    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <Image src={profile || IconDefaultUser} width={96} height={96} alt="유저 프로필 사진" />
            </div>
            <div className={styles.input_container}>
                <p className={styles.label}>Profile picture</p>
                <p className={styles.sub_label}>Adding a photo can make it easier for others to recognize you.</p>
                <label for="userAuthImage" class={styles.file_input}>
                    Pick a photo
                </label>
                <input class={styles.vanish_style} type="file" id="userAuthImage" accept="image/*" />
            </div>
        </div>
    );
}

export default PickProfile;
