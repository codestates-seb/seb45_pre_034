import AnswerList from "@component/answer/AnswerList";
import Mde from "@component/common/Mde";
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
