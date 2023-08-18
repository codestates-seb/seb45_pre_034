import styles from "@component/common/SortHandler.module.css"
function SortHandler({ btnNameArr }) {
    return (
        <>
            <div className={styles.container}>
                {btnNameArr
                    ? btnNameArr.map((el,idx) => {
                          return <div className={styles.btn} key={idx}>{el}</div>;
                      })
                    : null}
            </div>
        </>
    );
}
export default SortHandler;
