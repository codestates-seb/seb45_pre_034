import SignInput from "@component/sign/SignInput";
import Button from "@component/sign/Button";
import styles from "../SignForm.module.css";

function SignUpForm() {
    const nicknameSubGuide = `Display name can only
    \n- contains letters, digits, spaces, hyphens or apostrophes
    \n- start with a letter of digis
    \n- be 3 to 30 characters long`;

    const passwordSubGuide = `Passwords must contain at least eight characters, including at least 1 letter and 1 number.`;
    return (
        <div className={styles.container}>
            <SignInput label="Display name(Nickname)" subGuideMsg={nicknameSubGuide} />
            <SignInput label="Email" />
            <SignInput label="Password" subGuideMsg={passwordSubGuide} />

            <Button label="Sign up" type="Primary" isFullBtn={true} />

            <p className={styles.guide_msg}>
                By clicking “Sign up”, you agree to our terms of service and acknowledge that you have read and
                understand our privacy policy and code of conduct.
            </p>
        </div>
    );
}

export default SignUpForm;
