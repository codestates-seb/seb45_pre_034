import Link from "next/link";
import styles from "@component/questions/QuestionSummary.module.css";
import { usePathname } from "next/navigation";

function QuestionSummary({ data }) {
    console.log(data);
    const propData = data;

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
                    <Link href={`/questions/${propData.id}`}>
                        <h3 className={styles.h3}>{propData.title}</h3>
                    </Link>

                    <div className={styles.meta}>
                        {propData ? (
                            <ul className={styles.ul_tag}>
                                {propData.tags.map((el, idx) => (
                                    <li key={idx}>{el}</li>
                                ))}
                            </ul>
                        ) : null}

                        <div className={styles.user_card}>
                            {/* <div>
                                <img src="" alt="유저 아바타" />
                            </div> */}
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
