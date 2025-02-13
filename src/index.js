import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // RoutesとRouteをインポート
import App from './App';
import CreateNote from './CreateNote'; // CreateNoteコンポーネントのインポート
import EditNote from './EditNote';  // EditNoteをインポート
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes> {/* React Router v6ではSwitchではなくRoutesを使用 */}
        <Route path="/" element={<App />} /> {/* elementでコンポーネントを指定 */}
        <Route path="/create" element={<CreateNote />} /> {/* CreateNoteページ */}
        <Route path="/edit/:id" element={<EditNote />} />  {/* 編集画面のルート */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
