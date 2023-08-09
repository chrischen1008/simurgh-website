import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter,Routes,Route,Outlet } from 'react-router-dom'
// import Home component
import Home from "./components/pages/Home";
// import About component
import About from "./components/pages/About";
// import ContactUs component
import ContactUs from "./components/pages/ContactUs";
// import ContactUs component
import ErrorPage from "./components/pages/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
    <BrowserRouter>
    {/* <App/> */}
    <Routes>
        <Route path="/" element={<App />} />
        {/* 使用 <Outlet> 显示路由匹配的组件 */}
        <Route path="/about" element={<About />} />
        <Route path="/contactUS" element={<ContactUs />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
);


reportWebVitals();
