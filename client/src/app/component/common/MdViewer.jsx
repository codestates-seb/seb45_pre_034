"use client";

import React from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";

function MdViewer({ source }) {
    return (
        <>
            <MDEditor.Markdown source={source}/>
        </>
    );
}

export default MdViewer;
