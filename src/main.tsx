import './reset.css';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Redirect from './components/Redirect';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:code" element={<Redirect />} />
        </Routes>
    </BrowserRouter>,
);
