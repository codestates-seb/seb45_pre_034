"use client";

import Layout from "@component/layout/Layout";
import Mde from "@component/common/Mde";
import MdViewer from "@component/common/MdViewer";
import QuestionPost from "@component/questions/QuestionPost";
function Questions() {
    
    const str = `
### Preview Markdown

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-md-editor-preview-markdown-vrucl?fontsize=14&hidenavigation=1&theme=dark)

\`\`\`jsx
import React from "react";
import ReactDOM from "react-dom";
import MDEditor from '@uiw/react-md-editor';

export default function App() {
  return (
    <div className="container">
      <MDEditor.Markdown source="Hello Markdown!" />
    </div>
  );
}
\`\`\`
> 이렇게 작성한 코드가 어쩌구 저쩌구......
<br/>
`;

    return (
        <>
            <Layout>
                <QuestionPost />
                <MdViewer source={str}/>
                <Mde />
            </Layout>
        </>
    );
}

export default Questions;
