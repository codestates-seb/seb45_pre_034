import Layout from "@component/layout/Layout";
import FindPwForm from "@component/users/FindPwForm";

import styles from "./AccountRecovery.module.css";

function AccountRecovery() {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.col_center}>
                    <div className={styles.recovery_form_container}>
                        <h1 className={styles.recovery_title}>Account Recovery</h1>
                        <FindPwForm />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AccountRecovery;
