import Link from "next/link";

import SignInput from "@component/sign/SignInput";
import Button from "@component/common/Button";
import styles from "../SignForm.module.css";

function SignInForm() {
    return (
        <div className={styles.container}>
            <SignInput label="Email" />
            <div className={styles.pw_guide_container}>
                <p className={styles.link_tag}>
                    <Link href="/users/account-recovery">Forget password?</Link>
                </p>
                <SignInput label="Password" />
            </div>

            <Button label="Log in" type="Primary" isFullBtn={true} />
        </div>
    );
}

export default SignInForm;
