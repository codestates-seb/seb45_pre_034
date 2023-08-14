import Image from "next/image";
import Link from "next/link";

import Header from "@component/layout/Header";
import SignOauth from "@component/sign/SignOauth";
import SignInForm from "@component/sign/login/SignInForm";
import TailMsg from "@component/sign/TailMsg";

import styles from "./Login.module.css";
import IconStackOverflowMini from "/public/icon_stackoverflow_mini.png";

function Login() {
    return (
        <>
            <Header />
            <div style={{ marginTop: "52px" }} className={styles.container}>
                <div className={styles.col_center}>
                    <Link href="/">
                        <div className={styles.mini_logo}>
                            <Image src={IconStackOverflowMini} width={40} height={40} alt="stackoverflow 로고" />
                        </div>
                    </Link>
                    <div className={styles.sign_form_container}>
                        <SignOauth />
                        <SignInForm />
                    </div>
                    <TailMsg />
                </div>
            </div>
        </>
    );
}

export default Login;
