import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
import LogInPage from './Pages/LogInPage';
import DataDisplay from './Pages/DataDisplay';
import Regitration from './Pages/Regitration';
import SignInPage from './Pages/SignInPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogInPage />} />
                <Route path="/registration" element={<Regitration />} />
                <Route path='/dashboard' element={<DashBoard />} />
                <Route path="/data-display" element={<DataDisplay />} />
                <Route path="/sign-up" element={<SignInPage />} />
            </Routes>
        </Router>
    );
}

export default App;
