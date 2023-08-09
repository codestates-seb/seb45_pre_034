import RecoilRootWrapper from "./RecoilRootWrapper";
import "./globals.css";

export const metadata = {
    title: "Stack Overflow",
    description: "team 034 with passion",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <RecoilRootWrapper>{children}</RecoilRootWrapper>
            </body>
        </html>
    );
}
