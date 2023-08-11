"use client";

import Link from "next/link";
import { useState } from "react";

import { BsGlobeAmericas } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import styles from "./Navigation.module.css";

function Navigation() {
    const [selectedItem, setSelectedItem] = useState("Home");

    const onClickHandler = (itemName) => {
        setSelectedItem(itemName);
    };

    const renderHomeItem = () => {
        if (selectedItem === "Home") {
            return (
                <li className={`${styles.li_item} ${styles.selected}`} onClick={() => onClickHandler("Home")}>
                    <Link href="/">Home</Link>
                </li>
            );
        }

        return (
            <li className={styles.li_item} onClick={() => onClickHandler("Home")}>
                <Link href="/">Home</Link>
            </li>
        );
    };

    const renderQuestionsItem = () => {
        if (selectedItem === "Questions") {
            return (
                <li className={`${styles.li_item} ${styles.selected}`} onClick={() => onClickHandler("Questions")}>
                    <Link href="/questions">
                        <div className={styles.items_center}>
                            <BsGlobeAmericas size={"1rem"} />
                            <span style={{ marginLeft: "4px" }}>Questions</span>
                        </div>
                    </Link>
                </li>
            );
        }

        return (
            <li className={styles.li_item} onClick={() => onClickHandler("Questions")}>
                <Link href="/questions">
                    <div className={styles.items_center}>
                        <BsGlobeAmericas size={"1rem"} />
                        <span style={{ marginLeft: "4px" }}>Questions</span>
                    </div>
                </Link>
            </li>
        );
    };

    const renderUsersItem = () => {
        if (selectedItem === "Users") {
            return (
                <li className={`${styles.li_item} ${styles.selected}`} onClick={() => onClickHandler("Users")}>
                    <Link href="/users">
                        <BiUser />
                        <span style={{ marginLeft: "4px" }}>Users</span>
                    </Link>
                </li>
            );
        }

        return (
            <li className={styles.li_item} onClick={() => onClickHandler("Users")}>
                <Link href="/users">
                    <BiUser />
                    <span style={{ marginLeft: "4px" }}>Users</span>
                </Link>
            </li>
        );
    };

    return (
        <aside className={styles.container}>
            <ul>
                {renderHomeItem()}
                <li className={styles.li_sub_item}>
                    <p>PUBLIC</p>
                </li>
                {renderQuestionsItem()}
                {renderUsersItem()}
            </ul>
        </aside>
    );
}

export default Navigation;
