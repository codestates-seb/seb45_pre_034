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
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quia voluptates eos
                            unde exercitationem obcaecati, quasi tenetur magni veniam. Qui assumenda, facere quis
                            veritatis omnis hic similique aliquam rerum laudantium? Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Non voluptatibus sint doloribus. Commodi corporis odit quasi
                            officia quos dolorem expedita soluta necessitatibus, atque, culpa placeat, perspiciatis
                            minus suscipit fuga! Nisi.
                        </div>
                        <div className={styles.post_cell_bottom}>
                            <div>
                                <div>
                                    <span>share</span>
                                    <span>edit</span>
                                    <span>follow</span>
                                </div>
                            </div>
                            <div>signiture</div>
                            <div>signiture owner</div>
                        </div>
                    </div>
                    <div>{/* grid의 cell을 채우는 용도의 요소 */}</div>
                    <div>{/* Comment.jsx  */}add comment</div>
                </div>
            </section>
        </article>
    );
}
export default QuestionPost;
