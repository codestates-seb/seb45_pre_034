"use client";
import Mde from '@component/common/Mde';
import styles from '@component/answer/AnswerList.module.css'

function AnswerList() {
    
    const AnswerSubHeader = () => {
        return (
            <header className={styles.header}>
                <h2>Answer</h2>
                <div className={styles.sort_container}>
                    <div className={styles.sorted_by_container}>
                        <label>Sorted by: </label>
                        <a>Reset to default</a>
                    </div>
                    
                    <select>
                        <option value="">Highest score (default)</option>
                        <option value="">Trending (recent votes count more)</option>
                        <option value="">Date modified (newest first)</option>
                        <option value="">Date created (oldest first)</option>
                    </select>
                </div>
            </header>
        )
    }

    const Answer = () => {
        return (
            <>
                <div className="vote-container"></div>
                <div className="answer-container">
                    <div className="answer-main"></div>
                    <div className="answer-info">
                        <div className="buttons">
                            <a>share</a>
                            <a>edit</a>
                            <button>follow</button>
                        </div>
                        <div className="user-info"></div>
                    </div>
                </div>
            </>
        )
    }

    const AnswerForm = () => {
        return (
            <section className={styles.container}>
                <AnswerSubHeader/>
                <Answer/>
            </section>
        )
    }



    return (
        <>
            <AnswerForm/>
            <Mde/>
        </>
    )
}

export default AnswerList;