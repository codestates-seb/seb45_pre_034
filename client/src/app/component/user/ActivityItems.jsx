"use client";

import Link from "next/link";

import moment from "moment";
import { useRecoilState } from "recoil";
import { questionOrder, answerOrder, commentOrder } from "@recoil/user/UserDetail";

import SortHandler from "@component/common/SortHandler";

import styles from "./ActivityItems.module.css";

function ActivityItems({ type, items, nickname }) {
    const ActivityItem = ({ item }) => {
        return (
            <div className={styles.item_container}>
                <div className={styles.recommend_count}>
                    <p>{item.recomended || 0}</p>
                </div>
                <div className={styles.question_title}>
                    <p>{item.title || "deleted post"}</p>
                </div>
                <div className={styles.created_at}>
                    <p>{moment(item.createdAt).format("MMM DD, YYYY")}</p>
                </div>
            </div>
        );
    };

    const [qOrder, setQOrder] = useRecoilState(questionOrder);
    const [aOrder, setAOrder] = useRecoilState(answerOrder);
    const [cOrder, setCOrder] = useRecoilState(commentOrder);

    const renderActivityItemByType = () => {
        // TODO: 데이터 가공
        const filteredItems = items.map((v) => v);
        const totalItemCnt = 1000;
        const totalItem = totalItemCnt.toLocaleString("ko-KR");

        if (type === "question") {
            return (
                <>
                    <div className={styles.sub_title_container}>
                        <h2 className={styles.sub_title}>Questions</h2>
                        <SortHandler
                            btnNameArr={["Newest", "Oldest", "Answered", "UnAnswered"]}
                            size="sm"
                            selectedItem={qOrder}
                            setSelectedItem={setQOrder}
                        />
                    </div>
                    {totalItemCnt > 5 ? (
                        <Link href={`/users/${nickname}/all/questions`}>
                            <p className={styles.see_all_msg}>view {totalItem} questions</p>
                        </Link>
                    ) : null}
                    <div className={styles.sub_list}>
                        {filteredItems.slice(0, 5).map((v) => (
                            <ActivityItem key={`${v.id} ${v.createdAt}`} item={v} />
                        ))}
                    </div>
                </>
            );
        }

        if (type === "answer") {
            return (
                <>
                    <div className={styles.sub_title_container}>
                        <h2 className={styles.sub_title}>Answers</h2>
                        <SortHandler
                            btnNameArr={["Newest", "Oldest"]}
                            size="sm"
                            selectedItem={aOrder}
                            setSelectedItem={setAOrder}
                        />
                    </div>
                    {totalItemCnt > 5 ? (
                        <Link href={`/users/${nickname}/all/answers`}>
                            <p className={styles.see_all_msg}>view {totalItem} answers</p>
                        </Link>
                    ) : null}
                    <div className={styles.sub_list}>
                        {filteredItems.slice(0, 5).map((v) => (
                            <ActivityItem key={`${v.id} ${v.createdAt}`} item={v} />
                        ))}
                    </div>
                </>
            );
        }

        if (type === "comment") {
            return (
                <>
                    <div className={styles.sub_title_container}>
                        <h2 className={styles.sub_title}>Comments</h2>
                        <SortHandler
                            btnNameArr={["Newest", "Oldest"]}
                            size="sm"
                            selectedItem={cOrder}
                            setSelectedItem={setCOrder}
                        />
                    </div>
                    {totalItemCnt > 5 ? (
                        <Link href={`/users/${nickname}/all/comments`}>
                            <p className={styles.see_all_msg}>view {totalItem} comments</p>
                        </Link>
                    ) : null}
                    <div className={styles.sub_list}>
                        {filteredItems.slice(0, 5).map((v) => (
                            <ActivityItem key={`${v.id} ${v.createdAt}`} item={v} />
                        ))}
                    </div>
                </>
            );
        }

        return <></>;
    };

    return <>{renderActivityItemByType()}</>;
}

export default ActivityItems;
