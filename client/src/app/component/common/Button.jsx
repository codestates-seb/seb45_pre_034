"use client";

import styles from "./Button.module.css";

/**
 * @param {"Primary" | "Secondary" | "Tertiary"} type
 * @param {boolean} isFullBtn
 * @param {string} label
 * @param {Function} onClickHandler
 * @returns
 */
function Button({ type, label, isFullBtn = false, onClickHandler }) {
    let cn = `${styles.btn_container}`;

    if (type === "Primary") {
        cn = `${cn} ${styles.btn_primary}`;
    }

    if (type === "Secondary") {
        cn = `${cn} ${styles.btn_secondary}`;
    }

    if (type === "Tertiary") {
        cn = `${cn} ${styles.btn_tirtiary}`;
    }

    return (
        <button
            onClick={() => {
                if (onClickHandler) {
                    onClickHandler();
                }
            }}
            className={`${cn}`}
            style={isFullBtn ? { width: "100%", height: "38px" } : { width: "fit-content" }}
        >
            {label}
        </button>
    );
}

export default Button;
