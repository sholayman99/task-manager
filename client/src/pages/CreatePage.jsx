import React, {lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/Master-Layout.jsx";
import LazyMotion from "../components/MasterLayout/LazyMotion.jsx";
const Create = lazy(()=>import( "../components/Create/Create.jsx"));

const CreatePage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyMotion />}>
                <Create />
            </Suspense>
        </MasterLayout>
    );
};

export default CreatePage;