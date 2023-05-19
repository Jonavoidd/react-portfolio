import React from "react";
import MainLayout from "../layout/MainLayout";
import Experience from "../components/Experience";
export default function ResumePage() {
    return (
        <MainLayout>
            <div>
                <Experience />
            </div>
        </MainLayout>
    );
}