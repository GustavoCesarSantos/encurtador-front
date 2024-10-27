import './reset.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './components/App';
import Redirect from './components/Redirect';
import { Login } from './components/Login';
import { Register } from './components/RegisterUser';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:code" element={<Redirect />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    </BrowserRouter>,
);
