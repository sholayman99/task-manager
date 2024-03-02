import React, {lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/Master-Layout.jsx";
import LazyMotion from "../components/MasterLayout/LazyMotion.jsx";
const Dashboard = lazy(()=>import("../components/Dashboard/Dashboard.jsx")) ;

const DashboardPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyMotion />}>
               <Dashboard />
            </Suspense>
        </MasterLayout>
    );
};

export default DashboardPage;