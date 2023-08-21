"use client";

import MdViewer from "@component/common/MdViewer";
import styles from "@component/questions/QuestionPost.module.css";
function QuestionPost() {
    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sequi explicabo quo beatae molestias
                    blanditiis, a eum ad consequatur, consequuntur ab necessitatibus temporibus aliquam.
                </h1>
                <div className={styles.meta}>
                    <div>
                        <span>Asked</span>
                        <span> today</span>
                    </div>
                    <div>
                        <span>Modified</span>
                        <span>today</span>
                    </div>
                    <div>
                        <span>Viewed</span>
                        <span>43 times</span>
                    </div>
                </div>
            </header>
            <section className={styles.section}>
                <div className={styles.post_grid}>
                    <div className={styles.vote_cell}>voiting container</div>
                    <div className={styles.post_cell}>
                        <MdViewer
                            source={`
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
> 코드 설명......
<br/>
위의 코드와 같이 작성한 부분에서 알수 없는 오류가 발생....
`}
                        />
                        <div className={styles.post_cell_bottom}>
                            <div>
                                <div>
                                    <span>share</span>
                                    <span>edit</span>
                                    <span>follow</span>
                                </div>
                            </div>
                            <div>signiture</div>
                            <div>signiture owner</div>
                        </div>
                    </div>
                    <div>{/* grid의 cell을 채우는 용도의 요소 */}</div>
                    <div>{/* Comment.jsx  */}add comment</div>
                </div>
            </section>
        </article>
    );
}
export default QuestionPost;
