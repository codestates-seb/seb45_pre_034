import Header from "@component/layout/Header";
import Navigation from "@component/layout/Navigation";
import QuestionsList from "@component/questions/QuestionsList";
import styles from "@component/layout/Layout.module.css";

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.under_header_container}>
                <Navigation />
                { children }
            </div>
        </>
    );
}

export default Layout;
