import React, {lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/Master-Layout.jsx";
import LazyMotion from "../components/MasterLayout/LazyMotion.jsx";
const Completed = lazy(()=> import("../components/Completed/Completed.jsx"));

const CompletedPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyMotion />}>
              <Completed />
            </Suspense>
        </MasterLayout>
    );
};

export default CompletedPage;