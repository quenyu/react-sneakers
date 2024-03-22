import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';

import './index.css';
// import { router } from 'json-server';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path='/*' element={<App />}/>
        </Routes>
    </Router>
)
