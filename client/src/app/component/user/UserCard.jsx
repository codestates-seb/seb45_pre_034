import Image from "next/image";

import { FaBirthdayCake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import moment from "moment";

import styles from "./UserCard.module.css";

function UserCard({ user }) {
    const { nickname, email, profile, createdAt } = user;

    return (
        <section className={styles.container}>
            <div className={styles.user_card_image}>
                <Image src={profile} alt="유저 프로필 이미지" width={96} height={96} />
            </div>
            <div className={styles.user_card_detail_container}>
                <h1 className={styles.nickname}>{nickname}</h1>
                <div className={styles.user_card_detail_item}>
                    <FaBirthdayCake size={"1.2rem"} color="#888888" />
                    <p>Member for {moment(createdAt).fromNow(true)}</p>
                </div>
                <div className={styles.user_card_detail_item}>
                    <MdEmail size={"1.3rem"} color="#888888" />
                    <p>{email}</p>
                </div>
            </div>
        </section>
    );
}

export default UserCard;
