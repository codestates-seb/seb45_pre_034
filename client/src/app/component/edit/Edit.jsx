"use client";

import Mde from "@component/common/Mde";

// 질문의 edit인지 답변의 edit인지 알 수 있게 data 라는 props를 내려받는다고 가정
function Edit( {data} ) {

    const Rev = () => {
        return (
            <div className="Rev_container">
                <label>Rev</label>
                <select>
                    <option>{/* 수정한 데이터가 존재하면 추가되고 선택되면 데이터 불러와짐 */}</option>
                </select>
            </div>
            
        )
    }

    const QuestionTitle = () => {
        return (
            <div className="Q_title_container">
                <label>Title</label>
                <input type="text" placeholder="e.g Is there an R function For finding the index of an element in a vector?"></input>
            </div>
        )
    }

    const QuestionBody = () => {
        return (
            <div className="Q_body_container">
                <label>Body</label>
                <Mde/>
                {/* Mde에서 작성된 내용이 사용자에게 어떻게 보이는지 미리보기 */}
            </div>
        )
    }

    const AnswerTitle = () => {
        <>
            <h2>
                <a></a>
            </h2>
            <div className="grippie"></div>
        </>
    }

    const AnswerBody = () => {
        <header className={styles.header}>
            <h2>Answer</h2>
            <Mde/>
        </header>
    }

    return (
        <>
        <Rev/>

        {/* data가 question일 경우 */}
        {data === "question" && (
            <div>
                <QuestionTitle/>
                <QuestionBody/>
            </div>
        )}

        {/* data가 answer일 경우 */}
        {data === "answer" && (
            <div>
                <AnswerTitle/>
                <AnswerBody/>
            </div>
        )}
        </>
    )
}

export default Edit;