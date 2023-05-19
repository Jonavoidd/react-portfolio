import React from "react";
import Nav from "../components/Nav"
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/Footer";

const MainLayout = ({ children }) => {
    return (
        <div className={"App min-h-screen"}>
            <MyHeader />
            <main className={"min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white"}>
                <Nav />
                <div>{children}</div>
            </main>
            <MyFooter />
        </div>
    )
}

export default MainLayout;