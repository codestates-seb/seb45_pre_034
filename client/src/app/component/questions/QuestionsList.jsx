import styles from "@component/questions/QuestionsList.module.css";
function QuestionsList({ title }) {
    return (
        <>
            <section className={styles.section}>
                <header className={styles.header}>
                    <div className={styles.inner_title_btn_wrap}>
                        <h1 className={styles.title}>{title ? title : "Questions"}</h1>
                        <button className={styles.ask_q}>Ask Question</button>
                    </div>

                    <div className={styles.sortHandler_container}>
                        <div>sortHandler.jsx</div>
                    </div>
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
