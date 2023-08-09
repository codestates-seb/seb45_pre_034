import Link from "next/link";

function Gnb() {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/questions">Questions</Link>
            <Link href="/users">Users</Link>
        </div>
    );
}

export default Gnb;
