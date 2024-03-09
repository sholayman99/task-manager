import React, {lazy, Suspense} from 'react';
import LazyMotion from "../../components/MasterLayout/LazyMotion.jsx";
const SendOtp = lazy(()=> import("../../components/PasswordRecover/SendOtp.jsx"));

const SendOtpPage = () => {
    return (
        <>
            <Suspense fallback={LazyMotion}>
                <SendOtp />
            </Suspense>
        </>
    );
};

export default SendOtpPage;