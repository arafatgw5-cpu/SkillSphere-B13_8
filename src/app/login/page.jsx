import React, { Suspense } from 'react';
import LoginPage from './components/LogInFrom';

const page = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <LoginPage/>
            </Suspense>
        </div>
    );
};

export default page;