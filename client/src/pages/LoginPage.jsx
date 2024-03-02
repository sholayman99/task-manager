import React, {lazy, Suspense} from 'react';
import LazyMotion from "../components/MasterLayout/LazyMotion.jsx";
const Login = lazy(()=>import("../components/Login/Login.jsx"));

const LoginPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyMotion />}>
                <Login />
            </Suspense>
        </div>
    );
};

export default LoginPage;