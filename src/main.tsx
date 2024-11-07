import './reset.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Redirect } from './components/Redirect';
import { App } from './components/App';
import { UrlList } from './components/User/Urls';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/user/insight" element={<App />} />
            <Route path="/user/urls" element={<UrlList />} />
            <Route path="/:code" element={<Redirect />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>,
);
