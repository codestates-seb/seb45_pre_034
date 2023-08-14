import styles from "./JoinGuide.module.css";
import { MdQuestionAnswer } from "react-icons/md";
import { RiExpandUpDownFill } from "react-icons/ri";
import { BiSolidBookmarkAltPlus } from "react-icons/bi";
import { AiTwotoneTrophy } from "react-icons/ai";

function JoinGuideMsg() {
    return (
        <div className={styles.container}>
            <h1 className={styles.join_msg}>Join the Stack Overflow community</h1>
            <div className={styles.align_msg}>
                <MdQuestionAnswer color={"#0A95FF"} size={"1.5rem"} />
                <p>Get unstuck — ask a question</p>
            </div>
            <div className={styles.align_msg}>
                <RiExpandUpDownFill color={"#0A95FF"} size={"1.5rem"} />
                <p>Unlock new privileges like voting and commenting</p>
            </div>
            <div className={styles.align_msg}>
                <BiSolidBookmarkAltPlus color={"#0A95FF"} size={"1.5rem"} />
                <p>Save your favorite questions, answers, watch tags, and more</p>
            </div>
            <div className={styles.align_msg}>
                <AiTwotoneTrophy color={"#0A95FF"} size={"1.5rem"} />
                <p>Earn reputation and badges</p>
            </div>
        </div>
    );
}

export default JoinGuideMsg;
