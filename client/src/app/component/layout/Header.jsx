"use client";

import Image from "next/image";
import Link from "next/link";

import { useRecoilState } from "recoil";
import { userinfo } from "@recoil/Global";

import { useSceenWidthAndHeight } from "@hook/useScreenWidthAndHeight";

import Button from "@component/sign/Button";
import SearchInput from "@component/common/SearchInput";

import IconStackOverflow from "/public/icon_stackoverflow.png";
import IconStackOverflowMini from "/public/icon_stackoverflow_mini.png";
import IconDefaultUser from "/public/icon_default_user.png";
import styles from "./Header.module.css";

import { FiMenu } from "react-icons/fi";

function Header() {
    const [defaultUserInfo, setDefaultUserInfo] = useRecoilState(userinfo);

    const { width } = useSceenWidthAndHeight();

    const renderIconByWidth = () => {
        if (width < 600) {
            return (
                <div className={styles.mini_logo}>
                    <Image src={IconStackOverflowMini} alt="stackoverflow 로고" />
                </div>
            );
        }

        return (
            <div className={styles.logo}>
                <Image src={IconStackOverflow} alt="stackoverflow 로고" />
            </div>
        );
    };

    const renderBtnsByAuth = () => {
        if (defaultUserInfo.nickname) {
            return (
                <>
                    <div className={styles.profile}>
                        <Image
                            src={defaultUserInfo.profile || IconDefaultUser}
                            width={30}
                            height={30}
                            alt="유저 프로필 사진"
                        />
                    </div>
                    <Button label="Log out" type="Secondary" onClickHandler={logoutHandler} />
                </>
            );
        }

        return (
            <>
                <Button label="Log in" type="Secondary" />
                <Button label="Sign up" type="Primary" />
            </>
        );
    };

    return (
        <div className={styles.container}>
            <button className={styles.btn_menu}>
                <FiMenu size={"1.2rem"} />
            </button>
            <Link href="/">{renderIconByWidth()}</Link>

            <SearchInput />

            {renderBtnsByAuth()}
        </div>
    );
}

export default Header;
