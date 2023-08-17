import styles from "@component/questions/QuestionAsk.module.css";
import Mde from "@component/common/Mde";

function QuestionAsk() {
    return (
        <>
            <h1>Ask a public question</h1>
            <div className={styles.notice}>
                <h2>Writing a good question</h2>
                <p>
                    You’re ready to <a href="https://stackoverflow.com/help/how-to-ask">ask</a> a
                    <a href="https://stackoverflow.com/help/on-topic">programming-related question</a>
                    and this form will help guide you through the process.
                </p>
                <p>
                    Looking to ask a non-programming question? See{" "}
                    <a href="https://stackexchange.com/sites#technology-traffic">the topics here</a> to find a relevant
                    site.
                </p>
                <h5>Steps</h5>
                <ul>
                    <li>Summarize your problem in a one-line title.</li>
                    <li>Describe your problem in more detail.</li>
                    <li>Describe what you tried and what you expected to happen.</li>
                    <li>Add “tags” which help surface your question to members of the community.</li>
                    <li>Review your question and post it to the site.</li>
                </ul>
            </div>

            <div className={styles.advice}>
                <div>Writing a good title</div>
                <div>이미지</div>
                <div>
                    <p>Your title should summarize the problem.</p>
                    <p>
                        You might find that you have a better idea of your title after writing out the rest of the
                        question.
                    </p>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <label htmlFor="title">Title</label>
                        <label htmlFor="title">
                            Be specific and imagine you’re asking a question to another person.
                        </label>
                    </div>
                    <input type="text" id="title" />
                </div>
                <button>Next</button>
            </div>

            <div className={styles.problem_details}>
                <div>
                    <label htmlFor="problem-details">
                        What are the details of your problem?
                        <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                    </label>
                </div>
                <div id="problem-details">
                    <Mde />
                </div>
            </div>

            <div className={styles.problem_results}>
                <div>
                    <label htmlFor="problem-results">
                        What are the details of your problem?
                        <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                    </label>
                </div>
                <div id="problem-results">
                    <Mde />
                </div>
            </div>

            <div>
                <div>
                    <label htmlFor="tag-editor">
                        Tags
                        <p>
                            Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
                        </p>
                    </label>
                </div>
                <div>
                    <input type="text" id="tag-editor" />
                </div>
            </div>
        </>
    );
}
export default QuestionAsk;
