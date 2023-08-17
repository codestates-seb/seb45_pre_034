"use client";

function AnswerList() {
    const AnswerData = ""
    
    const AnswerSubHeader =() => {
        return(
            <div className="answer-sub-header">
                <h2>Answer</h2>
                <div className="sort-container">
                    <label>Sorted by: </label>
                    <select>
                        <option value="">Highest score (default)</option>
                        <option value="">Trending (recent votes count more)</option>
                        <option value="">Date modified (newest first)</option>
                        <option value="">Date created (oldest first)</option>
                    </select>
                </div>
            </div>
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
        return(
            <section className="container">
                <AnswerSubHeader/>
                <Answer/>
            </section>
        )
    }

    return (
    <>
        {AnswerData ? <AnswerForm/> : null}
    </>
    )
}
export default AddAnswerForm;