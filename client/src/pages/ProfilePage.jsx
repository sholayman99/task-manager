import React, {lazy, Suspense} from 'react';
import LazyMotion from "../components/MasterLayout/LazyMotion.jsx";
const Profile = lazy(()=>import( "../components/Profile/Profile.jsx"));

const ProfilePage = () => {
    return (
        <div>
            <Suspense fallback={<LazyMotion />}>
                <Profile/>
            </Suspense>
        </div>
    );
};

export default ProfilePage;