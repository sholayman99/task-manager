import React, {lazy, Suspense} from 'react';
import LazyMotion from "../components/MasterLayout/LazyMotion.jsx";
const ForgetPass = lazy(()=>import( "../components/ForgetPass/ForgetPass.jsx"));

const ForgetPassPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyMotion />}>
                <ForgetPass />
            </Suspense>
        </div>
    );
};

export default ForgetPassPage;