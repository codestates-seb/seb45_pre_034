import Header from "@component/layout/Header";
import Navigation from "@component/layout/Navigation";

function Layout() {
    return (
        <>
            <Header />
            <div style={{ marginTop: "52px" }}>
                <Navigation />
            </div>
        </>
    );
}

export default Layout;
