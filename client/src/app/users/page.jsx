import Layout from "@component/layout/Layout";
import SearchSection from "@component/user/list/SearchSection";

import styles from "./Users.module.css";
import UserItem from "@component/user/list/UserItem";

export const fetchUsers = async () => {
    try {
        const res = await fetch(`https://dummyjson.com/users`, { cache: "force-cache" });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();
    } catch (err) {
        console.log(err);
    }
};

async function Users() {
    const { users } = await fetchUsers();
    console.log(users);

    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>Users</h1>
                <SearchSection />
                <div className={styles.user_items_container}>
                    {users.map((v) => (
                        <UserItem email={v.email} nickname={v.username} image={v.image} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Users;
