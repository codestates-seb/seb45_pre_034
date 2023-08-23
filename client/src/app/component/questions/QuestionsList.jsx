"use client";

import SortHandler from "@component/common/SortHandler";
import QuestionSummary from "./QuestionSummary";
import Button from "@component/common/Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@component/questions/QuestionsList.module.css";

function QuestionsList({ title }) {
    const pathname = usePathname();

    const [allPostsData, setAllPostsData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://dummyjson.com/posts", { cache: 'no-store' });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setAllPostsData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    const RenderSortHandler = () => {
        let buttons = [];
        if (pathname === "/") {
            buttons = ["Interesting", "Hot", "Week", "Month"];
        }
        if (pathname === "/questions") {
            buttons = ["Newest", "Active", "Unanswered"];
        }
        return <SortHandler btnNameArr={buttons} />;
    };

    return (
        <>
            <section className={styles.section}>
                <header className={styles.header}>
                    <div className={styles.inner_header_wrap}>
                        <h1 className={styles.title}>{title ? title : "Questions"}</h1>
                        <Button type="Primary" label="Ask Question"></Button>
                    </div>

                    <div className={styles.sortHandler_container}>
                        <RenderSortHandler />
                    </div>
                </header>

                {allPostsData ? (
                <ul className={styles.summary_list}>
                    {allPostsData.posts.map((el) => (
                        <li key={el.id}><QuestionSummary data={el}/></li>
                    ))}
                </ul>
            ) : null}
                    

            </section>
        </>
    );
}
export default QuestionsList;
