"use client";

import { useRef, useState, useEffect } from "react";
import { useElementWidthAndHeight } from "@hook/useElementWidthAndHeight";

import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from "./SearchInput.module.css";

function SearchInput() {
    const inputRef = useRef(null);
    const { width } = useElementWidthAndHeight(inputRef);

    const [showInput, setShowInput] = useState(false);

    useEffect(() => {
        const outsideClick = (e) => {
            if (showInput && !inputRef.current?.contains(e.target)) {
                setShowInput(false);
            }
        };

        document.body.addEventListener("click", outsideClick);

        return () => {
            document.body.removeEventListener("click", outsideClick);
        };
    }, [showInput]);

    const MobileSearchInput = () => {
        return (
            <div className={styles.container_mobile_input}>
                <input className={styles.mobile_input} placeholder="Search..." />
                <div className={styles.mobile_input_magnify}>
                    <FaMagnifyingGlass size={"1.3rem"} color="#a2a2a2" />
                </div>
            </div>
        );
    };

    const DesktopSearchInput = () => {
        return (
            <div className={styles.container_desktop_input}>
                <input className={styles.desktop_input} placeholder="Search..." />
                <div className={styles.desktop_input_magnify}>
                    <FaMagnifyingGlass size={"1.3rem"} color="#a2a2a2" />
                </div>
            </div>
        );
    };

    const renderInputByWidth = () => {
        if (width < 176) {
            return (
                <>
                    <div className={styles.mobile_container}>
                        <button className={styles.btn_mobile_input} onClick={() => setShowInput(!showInput)}>
                            <FaMagnifyingGlass />
                        </button>
                    </div>
                    {showInput ? <MobileSearchInput /> : null}
                </>
            );
        }
        return <DesktopSearchInput />;
    };

    return (
        <div ref={inputRef} className={styles.container}>
            {renderInputByWidth()}
        </div>
    );
}

export default SearchInput;
