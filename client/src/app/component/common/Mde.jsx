"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "@component/common/Mde.module.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

function Mde() {
    const [value, setValue] = useState("");

    return (
        <>
            <MDEditor className={styles.mde} value={value} onChange={setValue} />
        </>
    );
}

export default Mde;
