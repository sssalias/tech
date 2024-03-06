import React from 'react';
import GlobalRouter from "router/GlobalRouter/GlobalRouter";

import 'app/App.style.css'
import {Outlet} from "react-router-dom";

const App = () => {
    return (
        <>
         <GlobalRouter/>
        </>
    );
};

export default App;