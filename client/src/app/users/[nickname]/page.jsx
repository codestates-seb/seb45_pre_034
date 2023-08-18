import Layout from "@component/layout/Layout";
import UserCard from "@component/user/UserCard";
import IconDefaultUser from "/public/icon_default_user.png";
import ToggleView from "@component/user/ToggleView";

import styles from "./UserDetail.module.css";

import { user, questions, answers, comments } from "./mockdata";
import ActivityItem from "@component/user/ActivityItem";

function UserDetail({ params }) {
    const { nickname } = params;

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.user_card_container}>
                    <UserCard user={user} />
                </div>
                <ToggleView nickname={nickname} />
                <div>
                    <h2 className={styles.sub_title}>Questions</h2>
                    <div className={styles.sub_list}>
                        {questions.map((v) => (
                            <ActivityItem question={v} />
                        ))}
                    </div>
                    <h2 className={styles.sub_title}>Answers</h2>
                    <div className={styles.sub_list}>
                        {answers.map((v) => (
                            <ActivityItem answer={v} />
                        ))}
                    </div>
                    <h2 className={styles.sub_title}>Comments</h2>
                    <div className={styles.sub_list}>
                        {comments.map((v) => (
                            <ActivityItem comment={v} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserDetail;
