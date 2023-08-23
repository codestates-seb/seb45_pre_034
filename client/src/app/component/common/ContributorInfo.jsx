import styles from "@component/common/ContributorInfo.module.css";
function ContributorInfo() {
    const UserInfo = () => {
        return (
            <div className={styles.user_info}>
                <div>user action time</div>
                <div>user details</div>
            </div>
        );
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.actions}>
                    <div>
                        <a href="#">share</a>
                    </div>
                    <div>
                        <a href="#">edit</a>
                    </div>
                    <div>
                        <a href="#">follow</a>
                    </div>
                </div>
                <div className={styles.signature}><UserInfo/></div>
                <div className={styles.signature_owner}><UserInfo/></div>
            </div>
        </>
    );
}
export default ContributorInfo;
