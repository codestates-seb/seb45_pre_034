"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./TailMsg.module.css";

function TailMsg() {
    const pathname = usePathname();
    const renderByPathName = () => {
        if (pathname === "/users/signup") {
            return (
                <div>
                    <span className={styles.tail_msg}>Already have an account?</span>
                    <Link href="/users/login">
                        <span className={styles.link_tag}>Log in</span>
                    </Link>
                </div>
            );
        } else {
            return (
                <div>
                    <span className={styles.tail_msg}>Don’t have an account?</span>
                    <Link href="/users/login">
                        <span className={styles.link_tag}>Sign up</span>
                    </Link>
                </div>
            );
        }
    };

    return <>{renderByPathName()}</>;
}

export default TailMsg;
