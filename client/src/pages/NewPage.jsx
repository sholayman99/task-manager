import React, {lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/Master-Layout.jsx";
import LazyMotion from "../components/MasterLayout/LazyMotion.jsx";
const New = lazy(()=>import( "../components/New/New.jsx"));

const NewPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyMotion />}>
              <New />
            </Suspense>
        </MasterLayout>
    );
};

export default NewPage;