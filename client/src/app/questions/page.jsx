import Layout from "@component/layout/Layout";
import QuestionsList from "@component/questions/QuestionsList";
function Questions() {
    return (
        <>
            <Layout>
                <QuestionsList title="All Questions" />
            </Layout>
        </>
    );
}

export default Questions;
