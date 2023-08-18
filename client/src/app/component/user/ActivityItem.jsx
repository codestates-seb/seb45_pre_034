import moment from "moment";
import styles from "./ActivityItem.module.css";

function ActivityItem({ question, answer, comment }) {
    const renderRecommendByType = () => {
        if (question) {
            return <p>{question.recomended}</p>;
        }

        if (answer) {
            return <p>{answer.recomended}</p>;
        }

        if (comment) {
            return <></>;
        }
    };

    const renderTitleByType = () => {
        if (question) {
            return <p>{question.title}</p>;
        }

        if (answer) {
            return <p>{answer.question.title}</p>;
        }

        if (comment) {
            return <p>{comment.body}</p>;
        }
    };

    const renderCreatedAtByType = () => {
        if (question) {
            return <p>{moment(question.createdAt).format("MMM DD, YYYY")}</p>;
        }

        if (answer) {
            return <p>{moment(answer.createdAt).format("MMM DD, YYYY")}</p>;
        }

        if (comment) {
            return <p>{moment(comment.createdAt).format("MMM DD, YYYY")}</p>;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.recommend_count}>{renderRecommendByType()}</div>
            <div className={styles.question_title}>{renderTitleByType()}</div>
            <div className={styles.created_at}>{renderCreatedAtByType()}</div>
        </div>
    );
}

export default ActivityItem;
