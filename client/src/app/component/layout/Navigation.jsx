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
        const cn = selectedItem === "Home" ? `${styles.li_item} ${styles.selected}` : `${styles.li_item}`;
        return (
            <Link href="/">
                <li className={`${cn}`} onClick={() => onClickHandler("Home")}>
                    Home
                </li>
            </Link>
        );
    };

    const renderQuestionsItem = () => {
        const cn = selectedItem === "Questions" ? `${styles.li_item} ${styles.selected}` : `${styles.li_item}`;

        return (
            <Link href="/questions">
                <li className={`${cn}`} onClick={() => onClickHandler("Questions")}>
                    <div className={styles.items_center}>
                        <BsGlobeAmericas size={"1rem"} />
                        <span style={{ marginLeft: "4px" }}>Questions</span>
                    </div>
                </li>
            </Link>
        );
    };

    const renderUsersItem = () => {
        const cn = selectedItem === "Users" ? `${styles.li_item} ${styles.selected}` : `${styles.li_item}`;

        return (
            <Link href="/users">
                <li className={`${cn}`} onClick={() => onClickHandler("Users")}>
                    <BiUser />
                    <span style={{ marginLeft: "4px" }}>Users</span>
                </li>
            </Link>
        );
    };

    return (
        <aside className={styles.container}>
            <ul className={styles.ul_container}>
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
