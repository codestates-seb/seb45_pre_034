import styles from "./Button.module.css";

/**
 * @param {"Primary" | "Secondary"} type
 * @param {string} label
 * @param {Function} onClickHandler
 * @returns
 */
function Button({ type, label, onClickHandler }) {
    const renderBtnByType = () => {
        if (type === "Primary") {
            return (
                <button
                    onClick={() => {
                        if (onClickHandler) {
                            onClickHandler();
                        }
                    }}
                    className={`${styles.btn_container} ${styles.btn_primary}`}
                >
                    {label}
                </button>
            );
        }

        if (type === "Secondary") {
            return (
                <button
                    onClick={() => {
                        if (onClickHandler) {
                            onClickHandler();
                        }
                    }}
                    className={`${styles.btn_container} ${styles.btn_secondary}`}
                >
                    {label}
                </button>
            );
        }
    };
    return <>{renderBtnByType()}</>;
}

export default Button;
