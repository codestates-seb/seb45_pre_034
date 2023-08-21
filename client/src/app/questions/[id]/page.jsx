"use client";
import AnswerList from "@component/answer/AnswerList";
import Layout from "@component/layout/Layout";
import QuestionPost from "@component/questions/QuestionPost";
function Questions() {
 
    return (
        <>
            <Layout>
                <QuestionPost/>
                <AnswerList/>
            </Layout>
        </>
    );
}

export default Questions;
