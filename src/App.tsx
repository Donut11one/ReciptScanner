import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Translate from './pages/translate';
import ErrorPage from './pages/error';
import NavigationBar from './component/NavigationBar/NavigationBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)
const App: React.FC = () => {
    return (
        <Router>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/translate" element={<Translate />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default App;
