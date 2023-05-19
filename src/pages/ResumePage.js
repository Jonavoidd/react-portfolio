import React from "react";
import MainLayout from "../layout/MainLayout";
import Resume from "../components/Resume";
export default function ResumePage() {
    return (
        <MainLayout>
            <div>
                <Resume />
            </div>
        </MainLayout>
    );
}