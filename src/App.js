import React from "react";
import './App.css';
import MainLayout from "./layout/MainLayout";
import LandingPage from "./components/LandingPage";
import '@ionic/react/css/core.css';
import { setupIonicReact } from "@ionic/react";

setupIonicReact()

function App() {
    return (
		<MainLayout>
            <LandingPage />
        </MainLayout>
    );
}

export default App;
