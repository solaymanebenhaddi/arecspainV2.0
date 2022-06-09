import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./pages/style.css"
import App from './App';
import { AuthContextProvider } from './components/contextapi/AuthContext';
import { SearchContextProvider } from './components/contextapi/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <AuthContextProvider>
    <SearchContextProvider>
    <App />
    </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
