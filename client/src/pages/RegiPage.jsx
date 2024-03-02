import React, {Suspense} from 'react';
import LazyMotion from "../components/MasterLayout/LazyMotion.jsx";
import Registration from "../components/Registration/Registration.jsx";

const RegiPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyMotion />}>
              <Registration />
            </Suspense>
        </div>
    );
};

export default RegiPage;