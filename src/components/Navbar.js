import {
    BrowserRouter as Router,
    //Switch, //! react router  V6後棄用
    Route,
    //Redirect, //! react router  V6後棄用
    Routes, //! react router v6後需要用到 =v5 Switch
    Navigate, //! react router v6後需要用到 =v5 Redirect
    Link,
    NavLink
  } from "react-router-dom";
// import Home component
import Home from "./Home";
// import About component
import About from "./About";
// import ContactUs component
import ContactUs from "./ContactUs";

const Navbar01 = () => {
    return (
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#f5f5f5' }} id="test01">
        <div className="container">
          <img src="https://cms.cdn.91app.com/images/original/40984/5b3063fc-4b59-42ae-a7f7-05bd98c65021-1672215451-fskh4d94va_d.png" alt="logo" /><a className="navbar-brand" href="/#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  獨家企劃
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><Link to="/About" style={{ textDecoration: 'none', color: 'var(--bs-dropdown-link-color)' }} className="dropdown-item">Sù-Si舒仕裝系列</Link></li>
                  <li><Link to="/About" style={{ textDecoration: 'none', color: 'var(--bs-dropdown-link-color)' }} className="dropdown-item">運動機能系列</Link></li>
                  <li><Link to="/ContactUS" style={{ textDecoration: 'none', color: 'var(--bs-dropdown-link-color)' }} className="dropdown-item">高爾夫系列</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  男裝
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><a className="dropdown-item" href="/#">外套</a></li>
                  <li><a className="dropdown-item" href="/#">上著</a></li>
                  <li><a className="dropdown-item" href="/#">下著</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  女裝
                </a>
                <ul className="dropdown-menu " aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><a className="dropdown-item" href="/#">外套</a></li>
                  <li><a className="dropdown-item" href="/#">上著</a></li>
                  <li><a className="dropdown-item" href="/#">下著</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="/#" id="navbarDarkDropdownMenuLink" role="button" aria-expanded="false">
                  穿搭合輯
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="/#" id="navbarDarkDropdownMenuLink" role="button" aria-expanded="false">
                  團服客製
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  關於SIMURGH
                </a>
                <ul className="dropdown-menu " aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><a className="dropdown-item" href="/#">BLOG</a></li>
                  <li><a className="dropdown-item" href="/#">媒體曝光</a></li>
                  <li><a className="dropdown-item" href="/#">下載APP教學</a></li>
                  <li><a className="dropdown-item" href="/#">創意手編｜布料再生奇蹟</a></li>
                  <li><a className="dropdown-item" href="/#">實體門市</a></li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

export default Navbar01()