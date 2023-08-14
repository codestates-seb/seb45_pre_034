"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./SignInput.module.css";

function SignInput({ label, regex, subGuideMsg }) {
    const inputRef = useRef(null);

    const [value, setValue] = useState();
    const [isWrongValue, setIsWrongValue] = useState(false);
    const [showSubGuide, setShowSubGuide] = useState(false);

    useEffect(() => {
        if (subGuideMsg) {
            const outsideClick = (e) => {
                if (showSubGuide && !inputRef.current?.contains(e.target)) {
                    setShowSubGuide(false);
                }
            };

            document.body.addEventListener("click", outsideClick);

            return () => {
                document.body.removeEventListener("click", outsideClick);
            };
        }
    }, [showSubGuide]);

    useEffect(() => {
        if (regex && !regex.test(value)) {
            setIsWrongValue(true);
        }
    }, [value, setValue]);

    const SubGuidMsg = () => {
        return (
            <div className={styles.sub_guide_msg_container}>
                {subGuideMsg.split("\n").map((v, i) => (
                    <p key={i + v}>{v}</p>
                ))}
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <p className={styles.label}>{label}</p>
            <input
                onFocus={() => setShowSubGuide(true)}
                ref={inputRef}
                className={`${styles.sign_input} ${isWrongValue ? `${styles.wrong_value}` : ""}`}
            />
            {subGuideMsg && showSubGuide && <SubGuidMsg />}
        </div>
    );
}

export default SignInput;
