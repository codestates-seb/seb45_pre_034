"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useRecoilState } from "recoil";
import { userinfo, navShow } from "@recoil/Global";

import { useSceenWidthAndHeight } from "@hook/useScreenWidthAndHeight";

import Button from "@component/common/Button";
import SearchInput from "@component/common/SearchInput";

import IconStackOverflow from "/public/icon_stackoverflow.png";
import IconStackOverflowMini from "/public/icon_stackoverflow_mini.png";
import IconDefaultUser from "/public/icon_default_user.png";
import styles from "./Header.module.css";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
    const router = useRouter();

    const [isNavShow, setIsNavShow] = useRecoilState(navShow);
    const [defaultUserInfo, setDefaultUserInfo] = useRecoilState(userinfo);

    const { width } = useSceenWidthAndHeight();

    const logoutHandler = () => {
        setDefaultUserInfo({
            nickname: "",
            email: "",
            profile: "",
        });
    };

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
                <Button label="Log in" type="Secondary" onClickHandler={() => router.push("/users/login")} />

                <Button label="Sign up" type="Primary" onClickHandler={() => router.push("/users/signup")} />
            </>
        );
    };

    const renderMenuBtnByAuthAndWidth = () => {
        if (!defaultUserInfo.email) {
            return (
                <button className={styles.btn_menu} onClick={() => setIsNavShow(!isNavShow)}>
                    {isNavShow ? <AiOutlineClose size={"1.2rem"} /> : <FiMenu size={"1.2rem"} />}
                </button>
            );
        }
    };

    return (
        <header className={styles.container}>
            {renderMenuBtnByAuthAndWidth()}
            <button onClick={() => router.push("/")}>{renderIconByWidth()}</button>

            <SearchInput />

            {renderBtnsByAuth()}
        </header>
    );
}

export default Header;
