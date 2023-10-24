import Layout from "@component/layout/Layout";
import QuestionsList from "@component/questions/QuestionsList";
function Home() {
    return (
        <Layout>
            <QuestionsList title="Top Questions" />
        </Layout>
    );
}

export default Home;
