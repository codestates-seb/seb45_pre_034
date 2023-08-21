"use client";

import Layout from "@component/layout/Layout";
import Mde from "@component/common/Mde";
import MdViewer from "@component/common/MdViewer";
import QuestionPost from "@component/questions/QuestionPost";
function Questions() {
 
    return (
        <>
            <Layout>
                <QuestionPost />
                <Mde />
            </Layout>
        </>
    );
}

export default Questions;
