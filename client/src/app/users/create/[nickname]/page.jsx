import Layout from "@component/layout/Layout";
import CreateForm from "@component/sign/create/CreateForm";
import styles from "./CreateProfile.module.css";

function CreateProfile({ params }) {
    // const { nickname } = params;
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.col_center}>
                    <div className={styles.main_msg_container}>
                        <h2 className={styles.main_msg}>You're Almost done!</h2>
                        <p>
                            You are about to create a new account on <strong>Stack Overflow</strong>
                        </p>
                        <br />
                        <p>Share a little more about yourself, and we'll show you more relevant questions</p>
                        {/* <p>{nickname}</p> */}
                    </div>
                    <div className={styles.create_form_container}>
                        <CreateForm />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CreateProfile;
