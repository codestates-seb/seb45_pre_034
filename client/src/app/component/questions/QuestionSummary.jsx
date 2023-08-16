import Link from "next/link";
import styles from "@component/questions/QuestionSummary.module.css";

function QuestionSummary() {
    return (
        <div className={styles.container}>
            <div className={styles.summary}>
                <div className={styles.summary_stat}>
                    <div>
                        <span>0</span>
                        <span>votes</span>
                    </div>
                    <div>
                        <span>0</span>
                        <span>answer</span>
                    </div>
                    <div>
                        <span>0</span>
                        <span>views</span>
                    </div>
                </div>
                <div>
                    <Link href="/questions/post">
                        <h3 className={styles.h3}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, magni. Autem tempora magnam
                            dicta! Ipsa dolores et architecto voluptas
                        </h3>
                    </Link>

                    <div className={styles.meta}>
                        <ul className={styles.ul_tag}>
                            <li>sql</li>
                            <li>sql-server</li>
                            <li>sql-like</li>
                        </ul>

                        <div className={styles.user_card}>
                            <div>
                                <img src="" alt="유저 아바타" />
                            </div>
                            <div>
                                <a href="#">유저 닉네임</a>
                            </div>
                            <div>
                                <a href="#">
                                    modified <span>10 minutes ago</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default QuestionSummary;
