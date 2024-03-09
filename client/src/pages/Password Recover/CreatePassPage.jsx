import React, {lazy, Suspense} from 'react';
import LazyMotion from "../../components/MasterLayout/LazyMotion.jsx";
const CreatePassword = lazy(()=>import("../../components/PasswordRecover/CreatePassword.jsx"));


const CreatePassPage = () => {
    return (
        <>
            <Suspense fallback={LazyMotion}>
                <CreatePassword />
            </Suspense>
        </>
    );
};

export default CreatePassPage;