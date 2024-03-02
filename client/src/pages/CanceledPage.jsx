import React,{Suspense,lazy} from 'react';
import MasterLayout from "../components/MasterLayout/Master-Layout.jsx";
import LazyMotion from "../components/MasterLayout/LazyMotion.jsx";
const Canceled = lazy(()=>import( "../components/Canceled/Canceled.jsx")) ;

const CanceledPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyMotion />}>
                <Canceled />
            </Suspense>
        </MasterLayout>
    );
};

export default CanceledPage;