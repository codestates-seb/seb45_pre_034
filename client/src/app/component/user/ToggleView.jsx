"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./ToggleView.module.css";

function ToggleView({ nickname }) {
    const router = useRouter();
    const pathname = usePathname();
    const [selectedItem, setSelectedItem] = useState("Activity");

    useEffect(() => {
        if (pathname === `/users/${nickname}`) {
            setSelectedItem("Activity");
            return;
        }

        if (pathname === `/users/${nickname}/edit`) {
            setSelectedItem("My Profile");
            return;
        }
    }, [pathname]);

    return (
        <div className={styles.container}>
            <button
                onClick={() => {
                    if (selectedItem !== "Activity") {
                        router.push(`/users/${nickname}`);
                        setSelectedItem("Activity");
                    }
                }}
            >
                <p className={`${styles.btn} ${selectedItem === "Activity" ? styles.selected : ""}`}>Activity</p>
            </button>
            <button
                onClick={() => {
                    if (selectedItem !== "My Profile") {
                        router.push(`/users/${nickname}/edit`);
                        setSelectedItem("My Profile");
                    }
                }}
            >
                <p className={`${styles.btn} ${selectedItem === "My Profile" ? styles.selected : ""}`}>My Profile</p>
            </button>
        </div>
    );
}

export default ToggleView;
