"use client";

import { useRecoilValue } from "recoil";
import { userinfo, navShow } from "@recoil/Global";

import Header from "@component/layout/Header";
import Navigation from "@component/layout/Navigation";
import styles from "@component/layout/Layout.module.css";

function Layout({ children }) {
    const { email } = useRecoilValue(userinfo);
    const isNavShow = useRecoilValue(navShow);

    const renderNavigationByAuthAndWidth = () => {
        if (email || isNavShow) {
            return <Navigation />;
        }
    };

    return (
        <>
            <Header />
            <div className={`${styles.under_header_container} ${email || (isNavShow && `${styles.with_navigation}`)}`}>
                {renderNavigationByAuthAndWidth()}
                {children}
            </div>
        </>
    );
}

export default Layout;
