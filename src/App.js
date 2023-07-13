import axios from "axios";
import React from "react";

// import {
//   Container, Row, Col, Form, Input, Button, Navbar, Nav,
//   NavbarBrand, NavItem, UncontrolledDropdown,
//   DropdownToggle, DropdownMenu, DropdownItem
// } from 'reactstrap';
// ! router功能測試
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
import Home from "./components/Home";
// import About component
import About from "./components/About";
// import ContactUs component
import ContactUs from "./components/ContactUs";
//!----------------

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// const baseURL = "http://localhost:8000/v1/products/items_img/?skip=0&limit=10";
// const baseURL = "http://127.0.0.1:8000/v1/products/clothes_img/?clothes_no=C50021"
//上線API網址
// const baseURL = "https://simurgh01-qds5m4plcq-de.a.run.app/v1/products/items/?skip=0&limit=10";
const baseURL =process.env.REACT_APP_BASE_URL;

function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      // console.log(response.data);
    }).catch(err => {
      // Handle error
      console.log(err);
  });;
  }, []);
  
  if (!post) return null;
  // console.log(post[0].clothes_no);
const clothesData=()=>{
    var output=[];
    for(let i=0;i<post.length;i++){
        output.push(
        // <ol>
        //   <li>
        //     {post[i].clothes_no}
        //     <ul>
        //       <li>{post[i].clothes_name}</li>
        //     </ul>
        //   </li>
        //   <Button color="danger">danger</Button>
        // </ol>

        // <tr>
        //   <th scope="row">{i+1}</th>
        //   <td>{post[i].clothes_no}</td>
        //   <td>{post[i].clothes_name}</td>
        // </tr>
            <div className="col-sm-2 d-flex align-items-stretch" key={post[i].clothes_img}>
                <div className="card mt-2" style={{width: '18rem'}} >  {/* mt-5 為bootstrap提供card的上下左右間隔*/}
                  <img className="card-img-top" src={post[i].clothes_img} alt="Card image cap" object-fit= "cover" width="500px"  height="500px" />
                  <div className="card-body">
                    <h5 className="card-title">{post[i].clothes_no}</h5>
                    <p className="card-text">{post[i].clothes_name}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>

        //
        // <div className="card" style={{width: '18rem'}}>
        //   <img className="card-img-top" src={post[i].clothes_img} alt="Card image cap" />
        //   <div className="card-body">
        //     <h5 className="card-title">{post[i].clothes_no}</h5>
        //     <p className="card-text"></p>
        //     <a href="#" className="btn btn-primary">Go somewhere</a>
        //   </div>
        // </div>
        )
      }
    return output;
}
const clothesGalleryButtons=()=>{ //下方滑動按鈕
  var output=[];
  for(let i=1;i<post.length;i++){
      output.push(
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} aria-label={{"Slide ":i+1}} key={i}></button>
      )
    } //data-bs-slide-to 按照索引新增
  return output;
}

const clothesGalleryFirst=()=>{ //第一張圖
  var output=[];
  output.push(
    <div className="carousel-item active" data-bs-interval="2000" key={post[0].clothes_img}>
      <img src={post[0].clothes_img}  className="d-block w-100" alt="..." width="50%" height="auto" />
    </div>
  )
  return output;
}


const clothesGallery=()=>{
  var output=[];
  for(let i=1;i<post.length;i++){
      output.push(
            <div className="carousel-item" data-bs-interval="2000" key={post[i].clothes_img}>
              <img src={post[i].clothes_img} className="d-block w-100" alt="..." width="50%" height="auto" />
            </div>
      )
    }
  return output;
}

  // return (
  // <div className="container-fluid" style={{background:'rgb(245, 245, 245)'}}>
    
  //   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  //   <div className="carousel-indicators" margin-top="100px">
  //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  //     {clothesGalleryButtons()}
  //     </div>
  //     <div className="carousel-inner">
  //         {clothesGalleryFirst()}
  //         {clothesGallery()}
  //     </div>
  //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  //       <span className="visually-hidden">Previous</span>
  //     </button>
  //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
  //       <span className="visually-hidden">Next</span>
  //     </button>
  //   </div>
  //   <figure>
  //     <img src="https://cms.cdn.91app.com/images/original/40984/63de816c-f437-4121-a54b-989ecef01d82-1670996644-u27xtj7h96_d_1200x75_800x50_400x25.jpg" display="block" width="100%"/>
  //   </figure>
  //   <div className="row">
  //     {clothesData()}
  //   </div>
  //   </div>
    
  // );
  return (   
    <>
      <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:'#f5f5f5'}} id="test01">
      <div className="container">
        <img src="https://cms.cdn.91app.com/images/original/40984/5b3063fc-4b59-42ae-a7f7-05bd98c65021-1672215451-fskh4d94va_d.png"/><a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                獨家企劃
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><Link to="/About" style={{textDecoration: 'none',color:'var(--bs-dropdown-link-color)'}} className="dropdown-item">Sù-Si舒仕裝系列</Link></li>
                <li><Link to="/About" style={{textDecoration: 'none',color:'var(--bs-dropdown-link-color)'}} className="dropdown-item">運動機能系列</Link></li>
                <li><Link to="/ContactUS" style={{textDecoration: 'none',color:'var(--bs-dropdown-link-color)'}} className="dropdown-item">高爾夫系列</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                男裝
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a className="dropdown-item" href="#">外套</a></li>
                <li><a className="dropdown-item" href="#">上著</a></li>
                <li><a className="dropdown-item" href="#">下著</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                女裝
              </a>
              <ul className="dropdown-menu " aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a className="dropdown-item" href="#">外套</a></li>
                <li><a className="dropdown-item" href="#">上著</a></li>
                <li><a className="dropdown-item" href="#">下著</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" aria-expanded="false">
                穿搭合輯
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" aria-expanded="false">
                團服客製
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                關於SIMURGH
              </a>
              <ul className="dropdown-menu " aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a className="dropdown-item" href="#">BLOG</a></li>
                <li><a className="dropdown-item" href="#">媒體曝光</a></li>
                <li><a className="dropdown-item" href="#">下載APP教學</a></li>
                <li><a className="dropdown-item" href="#">創意手編｜布料再生奇蹟</a></li>
                <li><a className="dropdown-item" href="#">實體門市</a></li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
      </nav>

        <div className="container-fluid" style={{background:'rgb(245, 245, 245)'}}>
      
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators" margin-top="100px">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          {clothesGalleryButtons()}
          </div>
          <div className="carousel-inner">
              {clothesGalleryFirst()}
              {clothesGallery()}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <figure>
          <img src="https://cms.cdn.91app.com/images/original/40984/63de816c-f437-4121-a54b-989ecef01d82-1670996644-u27xtj7h96_d_1200x75_800x50_400x25.jpg" display="block" width="100%"/>
        </figure>
        <div className="row">
          {clothesData()}
        </div>
        </div>
      </>
  );
}
export default App;

      // <h1>Hello</h1>
      //       <Routes>
      //           <Route path='/' element={<Home />}>
      //               <Route index element={<Home />} />
      //               <Route path='about' element={<About />} />
      //               <Route path='dashboard' element={<About />} />
      //               <Route path='*' element={<ContactUs />} />
      //           </Route>
      //       </Routes> 