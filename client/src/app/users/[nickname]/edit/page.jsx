import Layout from "@component/layout/Layout";
import UserCard from "@component/user/UserCard";
import ToggleView from "@component/user/ToggleView";
import HorizontalLine from "@component/user/edit/HorizontalLine";
import EditPwForm from "@component/user/edit/EditPwForm";
import EditAccountForm from "@component/user/edit/EditAccountForm";

import styles from "./UserEdit.module.css";

import { user, questions, answers, comments } from "../mockdata";
import Button from "@component/common/Button";

function UserEdit({ params }) {
    const { nickname } = params;

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.user_card_container}>
                    <UserCard user={user} />
                </div>
                <ToggleView nickname={nickname} />
                <div>
                    <h2 className={styles.title}>Edit your profile</h2>
                    <HorizontalLine />
                    <p className={styles.sub_title}>Public information</p>
                    <div className={styles.form_container}>
                        <p className={styles.category}>Account</p>
                        <EditAccountForm />
                    </div>

                    <HorizontalLine />
                    <p className={styles.sub_title}>Private information</p>
                    <div className={styles.form_container}>
                        <p className={styles.category}>Password</p>
                        <EditPwForm />

                        <p className={styles.category}>Remove account</p>
                        <Button type="Tertiary" label="remove" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserEdit;
