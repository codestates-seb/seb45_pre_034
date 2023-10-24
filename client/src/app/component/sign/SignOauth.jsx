"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import styles from "./SignOauth.module.css";
import IconGoogle from "/public/icon_google.png";
import IconGitHub from "/public/icon_github.png";
import IconFacebook from "/public/icon_facebook.png";

function SignOauth() {
    const pathname = usePathname();
    const msg = pathname === "/users/signup" ? "Sign up" : "Log in";

    const Container = ({ children, type }) => {
        let cn = `${styles.container}`;

        if (type === "Google") {
            cn = `${cn} ${styles.google}`;
        }

        if (type === "GitHub") {
            cn = `${cn} ${styles.github}`;
        }

        if (type === "Facebook") {
            cn = `${cn} ${styles.facebook}`;
        }

        return <button className={cn}>{children}</button>;
    };

    return (
        <>
            <Container type="Google">
                <div className={styles.icon_container}>
                    <Image src={IconGoogle} width={18} height={18} alt="구글 아이콘" />
                </div>
                <span>{msg} with Google</span>
            </Container>

            <Container type="GitHub">
                <div className={styles.icon_container}>
                    <Image src={IconGitHub} width={18} height={18} alt="깃허브 아이콘" />
                </div>
                <span>{msg} with GitHub</span>
            </Container>

            <Container type="Facebook">
                <div className={`${styles.icon_container} ${styles.icon_facebook_container}`}>
                    <Image src={IconFacebook} width={14} height={14} alt="페이스북 아이콘" />
                </div>
                <span>{msg} with Google</span>
            </Container>
        </>
    );
}

export default SignOauth;
