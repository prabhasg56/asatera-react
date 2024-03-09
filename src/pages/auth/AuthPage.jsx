import React from 'react';

import { BackgroundImg } from '../../assets';
import Card1 from '../../components/card/Card1';

const AuthPage = () => {
    return (
        <>
            <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${BackgroundImg})` }}>
              <Card1/>
            </div>
        </>
    )
}

export default AuthPage