import SignInput from "@component/sign/SignInput";
import Button from "@component/common/Button";
import styles from "../SignForm.module.css";
import PickProfile from "./PickProfile";

function CreateForm() {
    const nicknameSubGuide = `Display name can only
    \n- contains letters, digits, spaces, hyphens or apostrophes
    \n- start with a letter of digis
    \n- be 3 to 30 characters long`;

    const nicknameSubLable = "Your display name will be shown on your posts and comments.";

    return (
        <div className={styles.container}>
            <SignInput label="Display name(Nickname)" subGuideMsg={nicknameSubGuide} subLabel={nicknameSubLable} />
            <PickProfile />

            <Button label="Create my account" type="Primary" isFullBtn={true} />
            <p className={styles.guide_msg}>
                By clicking “Sign up”, you agree to our terms of service and acknowledge that you have read and
                understand our privacy policy and code of conduct.
            </p>
        </div>
    );
}

export default CreateForm;
