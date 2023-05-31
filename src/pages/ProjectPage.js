import React from "react";
import MainLayout from "../layout/MainLayout";
import Projects from "../components/Project";

const ProjectPage = () => {
    return (
        <MainLayout>
            <div>
                <Projects />
            </div>
        </MainLayout>
    )
}

export default ProjectPage;