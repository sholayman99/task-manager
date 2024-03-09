import React, {lazy, Suspense} from 'react';
import LazyMotion from "../../components/MasterLayout/LazyMotion.jsx";
const VerifyOtp = lazy(()=>import("../../components/PasswordRecover/VerifyOtp.jsx"));

const VerifyOtpPage = () => {
    return (
       <>
           <Suspense fallback={LazyMotion}>
               <VerifyOtp />
           </Suspense>
       </>
    );
};

export default VerifyOtpPage;