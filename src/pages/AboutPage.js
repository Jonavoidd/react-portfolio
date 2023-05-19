import React from "react";
import MainLayout from "../layout/MainLayout";
import About from "../components/About";
export default function AboutPage() {
    return (
        <MainLayout>
            <div>
                <About />
            </div>
        </MainLayout>
    );
}