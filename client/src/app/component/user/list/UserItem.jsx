import Link from "next/link";
import Image from "next/image";
import styles from "./UserItem.module.css";

function UserItem({ email, nickname, image }) {
    return (
        <div className={styles.container}>
            <div className={styles.profile_container}>
                <Image src={image} alt={`${nickname} 유저의 프로필`} width={48} height={48} />
            </div>
            <div>
                <Link href={`/users/${nickname}`}>
                    <p className={styles.nickname_link}>{nickname}</p>
                </Link>
                <p className={styles.email}>{email}</p>
            </div>
        </div>
    );
}

export default UserItem;
