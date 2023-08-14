import Header from "@component/layout/Header";
import JoinGuideMsg from "@component/sign/signup/JoinGuideMsg";
import SignOauth from "@component/sign/SignOauth";
import SignUpForm from "@component/sign/signup/SignUpForm";
import TailMsg from "@component/sign/TailMsg";

import styles from "./SignUp.module.css";

function SignUp() {
    return (
        <>
            <Header />
            <div style={{ marginTop: "52px" }} className={styles.container}>
                <div className={`${styles.col_center} ${styles.join_msg_container}`}>
                    <JoinGuideMsg />
                </div>
                <div className={styles.col_center}>
                    <div className={styles.main_msg_container}>
                        <h2 className={styles.main_msg}>Create your Stack Overflow account. It's free</h2>
                        <h2 className={styles.main_msg}>And Only takes a minute.</h2>
                    </div>
                    <div className={styles.sign_form_container}>
                        <SignOauth />
                        <SignUpForm />
                    </div>
                    <TailMsg />
                </div>
            </div>
        </>
    );
}

export default SignUp;
