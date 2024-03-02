import React, {Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/Master-Layout.jsx";
import LazyMotion from "../components/MasterLayout/LazyMotion.jsx";
import Progress from "../components/Progress/Progress.jsx";

const ProgressPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyMotion />}>
                <Progress />
            </Suspense>
        </MasterLayout>
    );
};

export default ProgressPage;