"use client";

// import dynamic from "next/dynamic";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useState } from "react";
import styles from "@component/common/Mde.module.css";


/**
 * MDEditor - 사용자가 마크다운 문법을 입력하는 웹 에디터
 * @prop: previewOption - 
 */
// const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

function Mde() {
    const [value, setValue] = useState("");
    return (
        <>
            <MDEditor
                className={styles.mde}
                value={value}
                onChange={setValue}
                // previewOptions={}
            />
        </>
    );
}

export default Mde;
