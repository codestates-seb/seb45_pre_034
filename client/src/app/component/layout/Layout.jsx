"use client";

import { useRecoilValue } from "recoil";
import { userinfo } from "@recoil/Global";

import Header from "@component/layout/Header";
import Navigation from "@component/layout/Navigation";
import styles from "@component/layout/Layout.module.css";

function Layout({ children }) {
    const { email } = useRecoilValue(userinfo);

    const renderNavigationByAuthAndWidth = () => {
        if (email) {
            return <Navigation />;
        }
    };

    return (
        <>
            <Header />
            <div className={styles.under_header_container}>
                {renderNavigationByAuthAndWidth()}
                {children}
            </div>
        </>
    );
}

export default Layout;
