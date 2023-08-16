"use client";

import Mde from "@component/common/Mde";
import styles from "@component/questions/QuestionPost.module.css";
function QuestionPost() {
    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sequi explicabo quo beatae molestias
                    blanditiis, a eum ad consequatur, consequuntur ab necessitatibus temporibus aliquam.
                </h1>
                <div className={styles.meta}>
                    <div>
                        <span>Asked</span>
                        <span> today</span>
                    </div>
                    <div>
                        <span>Modified</span>
                        <span>today</span>
                    </div>
                    <div>
                        <span>Viewed</span>
                        <span>43 times</span>
                    </div>
                </div>
            </header>
            <section className={styles.section}>
                <div className={styles.post_grid}>
                    <div className={styles.vote_cell}>voiting container</div>
                    <div className={styles.post_cell}>
                        <div>본문 컴포넌트</div>
                        <div className={styles.post_cell_bottom}>
                            <div>menu</div>
                            <div>signiture</div>
                            <div>signiture owner</div>
                        </div>
                    </div>
                    <div>{/* grid의 cell을 채우는 용도의 요소 */}</div>
                    <div>
                        {/* 질문글과 답변에 comment가 가능하므로 컴포넌트화 해야함 */}
                        comment 컴포넌트 필요
                        <div>post comments area</div>
                        <div>
                            <a href="#">Add a comment</a>
                        </div>
                    </div>
                </div>

                <div>답변 목록</div>

                <div>
                    Your Answer
                    <Mde />
                </div>
            </section>
        </article>
    );
}
export default QuestionPost;
