"use client";

import { useRecoilState } from "recoil";
import { userOrder } from "@recoil/user/UserDetail";

import SortHandler from "@component/common/SortHandler";

import styles from "./SearchSection.module.css";

import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchSection() {
    const [uOrder, setUOrder] = useRecoilState(userOrder);

    return (
        <div className={styles.container}>
            <div className={styles.container_user_input}>
                <input className={styles.user_input} placeholder="Filter by user..." />
                <div className={styles.user_input_magnify}>
                    <FaMagnifyingGlass size={"1.1rem"} color="#a2a2a2" />
                </div>
            </div>
            <SortHandler
                btnNameArr={["Newest", "Oldest", "Answered", "UnAnswered"]}
                selectedItem={uOrder}
                setSelectedItem={setUOrder}
            />
        </div>
    );
}

export default SearchSection;
