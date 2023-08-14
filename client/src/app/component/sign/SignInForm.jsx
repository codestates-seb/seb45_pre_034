import SignInput from "@component/sign/SignInput";
import Button from "@component/sign/Button";
import styles from "./SignForm.module.css";

function SignUpForm() {
    return (
        <div className={styles.container}>
            <SignInput label="Email" />
            <SignInput label="Password" />

            <Button label="Log in" type="Primary" isFullBtn={true} />
        </div>
    );
}

export default SignUpForm;
