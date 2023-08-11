import styles from "./Button.module.css";

/**
 * @param {"Primary" | "Secondary"} type
 * @param {string} label
 * @returns
 */
function Button({ type, label }) {
    const renderBtnByType = () => {
        if (type === "Primary") {
            return <button className={`${styles.btn_container} ${styles.btn_primary}`}>{label}</button>;
        }

        if (type === "Secondary") {
            return <button className={`${styles.btn_container} ${styles.btn_secondary}`}>{label}</button>;
        }
    };
    return <>{renderBtnByType()}</>;
}

export default Button;
