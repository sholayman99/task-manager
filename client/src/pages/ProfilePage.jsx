import React, {lazy, Suspense, useEffect} from 'react';
import LazyMotion from "../components/MasterLayout/LazyMotion.jsx";
import {userDetailsRequest} from "../apiRequest/apiRequest.js";
import MasterLayout from "../components/MasterLayout/Master-Layout.jsx";
const Profile = lazy(()=>import( "../components/Profile/Profile.jsx"));

const ProfilePage = () => {

    useEffect(() => {
        (async ()=>{
            await userDetailsRequest();
        })()
    }, []);

    return (
        <MasterLayout>
            <Suspense fallback={<LazyMotion />}>
                <Profile/>
            </Suspense>
        </MasterLayout>
    );
};

export default ProfilePage;