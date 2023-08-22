"use client";
import Mde from '@component/common/Mde';
import styles from '@component/answer/AnswerList.module.css'
import { useRecoilState } from 'recoil';
import { followingState, sortState } from '@recoil/Global';

function AnswerList() {
    
    const AnswerSubHeader = () => {
        const [selectedSort, setSelectedSort] = useRecoilState(sortState);

        const handleSortChange = (event) => {
            const selectedSortValue = event.target.value;
            setSelectedSort(selectedSortValue);
        }

        return (
            <header className={styles.header}>
                <h2>Answer</h2>
                <div className={styles.sort_container}>
                    <div className={styles.sorted_by_container}>
                        <label className={styles.sorted_by_label}>Sorted by: </label>
                        <a 
                        className={`${styles.link} ${selectedSort == '' ? styles.hidden : ''}`}
                        onClick={() => setSelectedSort('')}
                        >
                            Reset to default
                        </a>
                    </div>
                    
                    <select value={selectedSort} onChange={handleSortChange}>
                        <option value="">Highest score (default)</option>
                        <option value="trending">Trending (recent votes count more)</option>
                        <option value="dateModified">Date modified (newest first)</option>
                        <option value="dateCreated">Date created (oldest first)</option>
                    </select>
                </div>
            </header>
        )
    }

    const Answer = () => {
        const [isFollowing, setIsFollowing] = useRecoilState(followingState);

        const handleFollowToggle = () => {
            setIsFollowing(!isFollowing);
        }

        return (
            <>
                <div className="vote-container"></div>
                <div className="answer-container">
                    <div className="answer-main"></div>
                    <div className="answer-info">
                        <div className="buttons">
                            <a>share</a>
                            <a>edit</a>
                            <button onClick={handleFollowToggle}>{isFollowing ? 'Following' : 'Follow'}</button>
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