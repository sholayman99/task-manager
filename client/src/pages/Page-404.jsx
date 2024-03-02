import React, {lazy, Suspense} from 'react';
import LazyMotion from "../components/MasterLayout/LazyMotion.jsx";
const NotFound = lazy(()=>import("../components/NotFound/NotFound.jsx"));

const Page404 = () => {
    return (
        <div>
            <Suspense fallback={<LazyMotion />}>
                <NotFound />
            </Suspense>
        </div>
    );
};

export default Page404;