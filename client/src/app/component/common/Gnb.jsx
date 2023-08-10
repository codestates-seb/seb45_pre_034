"use client";

import Link from "next/link";
import { useRecoilValue } from "recoil";
import { userinfo } from "@/app/recoil/Global";

function Gnb() {
    const { nickname } = useRecoilValue(userinfo);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Link href="/">Home</Link>
            <Link href="/questions">Questions</Link>
            <Link href="/users">recoil value: {nickname}</Link>
        </div>
    );
}

export default Gnb;
