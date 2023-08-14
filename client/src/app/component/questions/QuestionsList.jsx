"use client";
import { usePathname } from "next/navigation";
import SortHandler from "@component/common/SortHandler";
import styles from "@component/questions/QuestionsList.module.css";
function QuestionsList({ title }) {
    const pathname = usePathname();

    const renderSortHandler = () => {
        if (pathname === "/") {
            return <SortHandler btnNameArr={["Interesting", "Hot", "Week", "Month"]} />;
        }

        if (pathname === "/questions") {
            return <SortHandler btnNameArr={["Newest", "Active", "Unanswered"]} />;
        }
    };

    return (
        <>
            <section className={styles.section}>
                <header className={styles.header}>
                    <div className={styles.inner_title_btn_wrap}>
                        <h1 className={styles.title}>{title ? title : "Questions"}</h1>
                        <button className={styles.ask_q}>Ask Question</button>
                    </div>

                    <div className={styles.sortHandler_container}>{renderSortHandler()}</div>
                </header>
                <ul>
                    <li>QuestionSummary.jsx</li>
                    <li>QuestionSummary.jsx</li>
                    <li>QuestionSummary.jsx</li>
                </ul>
            </section>
        </>
    );
}
export default QuestionsList;
