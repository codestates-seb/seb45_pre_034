import Layout from "@component/layout/Layout";
import UserCard from "@component/user/UserCard";
import ActivityItems from "@component/user/ActivityItems";
import ToggleView from "@component/user/ToggleView";

import styles from "./UserDetail.module.css";

import { user, questions, answers, comments } from "./mockdata";

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
                    <ActivityItems type="question" items={questions} nickname={nickname} />
                    <ActivityItems type="answer" items={answers} nickname={nickname} />
                    <ActivityItems type="comment" items={comments} nickname={nickname} />
                </div>
            </div>
        </Layout>
    );
}

export default UserDetail;
