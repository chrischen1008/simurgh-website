import axios from "axios";
import React,{ useEffect,useRef } from "react";

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
// "products/items_img/?skip=0&limit=4"
const baseURL = process.env.REACT_APP_BASE_URL;

function App() {
  const [post, setPost] = React.useState(null);
  const [banner, setBanner] = React.useState(null);

  React.useEffect(() => {
    // axios.get(baseURL+'products/items_img/?skip=0&limit=4').then((response) => {
    //   setPost(response.data);
    //   // console.log(response.data);
    // }).catch(err => {
    //   // Handle error
    //   console.log(err);
    // });
    // axios.get(baseURL+'products/banners').then((response) => {
    //   setBanner(response.data);
    //   // console.log(response.data);
    // }).catch(err => {
    //   // Handle error
    //   console.log(err);
    // });

    const request1 = axios.get(baseURL + 'products/items_img/?skip=0&limit=4');
    const request2 = axios.get(baseURL + 'products/banners');

    axios.all([request1, request2]) //! 多個api呼叫: axios.all([list]) -> .then(axios.spread) ->依照list中的api順序，取得api資料
      .then(axios.spread((...responses) => { //! (...responses) 是spread operator -> 代表整個list，也可以改寫成 (response1, response2,...以此類推)
        const response1 = responses[0];
        const response2 = responses[1];

        setPost(response1.data);
        setBanner(response2.data);
        // You can perform further processing if needed.
      }))
      .catch(errors => {
        // Handle errors for both requests here
        console.log(errors);
      });

  }, []);
  const buttonRef = useRef();
  useEffect(() => {
    if (banner && buttonRef.current) {
      const interval = setInterval(() => {
        buttonRef.current.click();
      }, 3000); // 在這裡設定延遲時間，例如1000毫秒(1秒)

      return () => clearInterval(interval); // 在unmount時清除interval
    }
  }, [banner]);

  if (!post) return null;
  if (!banner) return null;
  // console.log(post[0].clothes_no);
  const ClothesData = () => {
    var output = [];
    for (let i = 0; i < post.length; i++) {
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
        <div className="col-sm-3 d-flex justify-content-center" key={post[i].clothes_img}>
          <div className="card mt-2" style={{ width: '18rem' }} >  {/* mt-5 為bootstrap提供card的上下左右間隔*/}
            <img className="card-img-top" src={post[i].clothes_img} alt="Card cap" object-fit="cover" width="500px" height="500px" />
            <div className="card-body">
              <h5 className="card-title">{post[i].clothes_no}</h5>
              <p className="card-text">{post[i].clothes_name}</p>
              {/* <a href="/#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>

        //
        // <div className="card" style={{width: '18rem'}}>
        //   <img className="card-img-top" src={post[i].clothes_img} alt="Card image cap" />
        //   <div className="card-body">
        //     <h5 className="card-title">{post[i].clothes_no}</h5>
        //     <p className="card-text"></p>
        //     <a href="/#" className="btn btn-primary">Go somewhere</a>
        //   </div>
        // </div>
      )
    }
    return output;
  }
  const ClothesGalleryButtons = () => { //下方滑動按鈕
    var output = [];
    for (let i = 1; i < banner.length; i++) {
      output.push(
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} aria-label={{ "Slide ": i + 1 }} key={i}></button>
      )
    } //data-bs-slide-to 按照索引新增
    return output;
  }

  const ClothesGalleryFirst = () => { //第一張圖
    var output = [];
    output.push(
      <div className="carousel-item active" data-bs-interval="3000" key={banner[0].src}>
        <img src={banner[0].src} className="d-block w-100" alt="..." width="50%" height="auto" />
      </div>
    )
    return output;
  }


  const ClothesGallery = () => {
    var output = [];
    for (let i = 1; i < banner.length; i++) {
      output.push(
        <div className="carousel-item" data-bs-interval="3000" key={banner[i].src}>
          <img src={banner[i].src} className="d-block w-100" alt="..." width="50%" height="auto" />
        </div>
      )
    }
    return output;
  }

  const RightToolBox = () => {
    return (
      <div className="toolbox__container toolbox--bounce-in">
        <div className="toolbox__item">
          <div data-for="of5mvbrsvb" data-tip="tooltip" currentitem="false"><a rel="noreferrer"
            className="toolbox__button false" href="https://www.instagram.com/simurgh.cc/" target="_blank"
            style={{ fontSize: '44.4444px', width: ' 0.9em', height: '0.9em', borderRadius: '100%' }}><i
              className="toolbox__icon icon icon-editor-icon_quick_ig_solid_round"></i>
            <img src="https://storage.googleapis.com/asia.artifacts.abstract-arbor-392000.appspot.com/static/instagram.png" alt="" className="img-responsive img-rounded" /></a></div>

          {/* <div
      className="__react_component_tooltip place-left type-dark tooltip--custom tooltip--custom--clickable toolbox__tooltip"
      id="of5mvbrsvb" data-id="tooltip" style={{left: '1058px', top: '642px'}}><span>Instagram</span></div> */}
        </div>
        <div className="toolbox__item">
          <div data-for="ts3cve9uyv" data-tip="tooltip" currentitem="false"><a rel="noreferrer"
            className="toolbox__button false" href="https://m.me/SimurghTaiwan" target="_blank"
            style={{ fontSize: '44.4444px', width: ' 0.9em', height: '0.9em', borderRadius: '100%' }}><i
              className="toolbox__icon icon icon-editor-icon_messenger"></i><img src="https://storage.googleapis.com/asia.artifacts.abstract-arbor-392000.appspot.com/static/messenger01.png" alt="" className="img-responsive img-rounded"
            /></a></div>

          {/* <div
      className="__react_component_tooltip place-left type-dark tooltip--custom tooltip--custom--clickable toolbox__tooltip"
      id="ts3cve9uyv" data-id="tooltip" style={{left: '1058px', top: '692px'}}><span>FB Messenger</span></div> */}
        </div>
        <div className="toolbox__item">
          <div data-for="vib121ci11" data-tip="tooltip" currentitem="false"><a rel="noreferrer"
            className="toolbox__button false" href="https://line.naver.jp/ti/p/@simurgh" target="_blank"
            style={{ fontSize: '44.4444px', width: '0.9em', height: '0.9em', borderRadius: '100%' }}><i
              className="toolbox__icon icon icon-editor-icon_line_round"></i>
            <img src="https://storage.googleapis.com/asia.artifacts.abstract-arbor-392000.appspot.com/static/line.png" alt="" className="img-responsive img-rounded" /></a></div>

          {/* <div
      className="__react_component_tooltip place-left type-dark tooltip--custom tooltip--custom--clickable toolbox__tooltip"
      id="vib121ci11" data-id="tooltip" style={{left: '1114px', top: '742px'}}><span>LINE</span></div> */}
        </div>
        <div className="toolbox__item">
          <div data-for="6wr0jzctpi" data-tip="tooltip" currentitem="false"><a rel="noreferrer"
            className="toolbox__button false"
            href="https://www.youtube.com/channel/UCnSgp99LeQl1C1CFiQD01eA" target="_blank" style={{ fontSize: '40px', width: '0.9em', height: '0.9em', borderRadius: '100%' }}><i
              className="toolbox__icon icon icon-editor-icon_line_round"></i>
            <img
              loading="lazy" className="img-responsive img-rounded"
              src="https://storage.googleapis.com/asia.artifacts.abstract-arbor-392000.appspot.com/static/youtube.png"
              alt="Youtube" />
          </a>
          </div>

          {/* <div
      className="__react_component_tooltip place-left type-dark tooltip--custom tooltip--custom--clickable toolbox__tooltip"
      id="6wr0jzctpi" data-id="tooltip" style={{left: '1095px', top: '792px'}}><span>Youtube</span></div> */}
        </div>
        <div className="toolbox__item">
          <div>
            <a rel="noreferrer" className="toolbox__button toolbox__button--shadow"
              style={{ fontSize: '40px' }} href="/#">
              <i className="toolbox__icon icon icon-top"></i>
              <img
                className="img-responsive img-rounded"
                src="https://storage.googleapis.com/asia.artifacts.abstract-arbor-392000.appspot.com/static/move-up.png"
                alt="move-to-top" />
            </a>
          </div>
        </div>
      </div>);
  }
  const Footer01 = () => {
    return (<div className="container-fluid" >
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top  justify-content-between">
        <div className="col-4 mb-4 w-auto">
          <iframe name="f2bcf5254be2e18" width="342px" height="150px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameBorder="0" allowtransparency="true" allowFullScreen scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.10/plugins/page.php?app_id=511060513256789&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2e8500d08f21cc%26domain%3Dwww.simurgh.cc%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.simurgh.cc%252Ff21490b3d2ef2b%26relation%3Dparent.parent&amp;container_width=378&amp;height=130&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FSimurghTaiwan&amp;locale=zh_TW&amp;sdk=joey&amp;show_facepile=false&amp;show_posts=false&amp;width=342" data-gtm-yt-inspected-15="true" className=""></iframe>
          {/* style="border: none; visibility: visible; width: 342px; height: 130px;" */}
          <p className="text-muted">&copy; 2023</p>
        </div>

        <div className="col mb-3">
          <h5>關於我們</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">品牌故事</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">商店簡介</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">隱私權及網站使用條款</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">客服資訊</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">購物說明</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">客服留言</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">會員權益聲明</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">聯絡我們</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>官方APP</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-3">

              {/* <i className="fas fa-laptop fa-fw me-4"><img src="https://storage.googleapis.com/asia.artifacts.abstract-arbor-392000.appspot.com/static/Google_Play_Store_badge_EN.svg.png" alt="Avatar" className="image"/></i> */}
              <a href="https://apps.apple.com/tw/app/id1590292630" className="app-download" >
                <img src="https://storage.googleapis.com/asia.artifacts.abstract-arbor-392000.appspot.com/static/app-store.png" alt="" width="30%" height="30%" />
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.nineyi.shop.s040984" className="app-download mx-2">
                <img src="https://storage.googleapis.com/asia.artifacts.abstract-arbor-392000.appspot.com/static/playstore.png" alt="" width="30%" height="30%" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>)
  }
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

  const GalleryClickNext = () => {
  
    const handleClick = () => {
      console.log('Button clicked.');
    }
  
    return (
      <div>
        {/* <button ref={buttonRef} onClick={handleClick}>Click Me</button> */}
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" id="mybutton" ref={buttonRef} onClick={handleClick()}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>
      
    );
  };

  // return (
  // <div className="container-fluid" style={{background:'rgb(245, 245, 245)'}}>

  //   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  //   <div className="carousel-indicators" margin-top="100px">
  //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  //     {ClothesGalleryButtons()}
  //     </div>
  //     <div className="carousel-inner">
  //         {ClothesGalleryFirst()}
  //         {ClothesGallery()}
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
  //     {ClothesData()}
  //   </div>
  //   </div>

  // );
  return (
    <>
      {Navbar01()}
      <div className="container-fluid" style={{ background: 'rgb(245, 245, 245)' }}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators" margin-top="100px">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            {ClothesGalleryButtons()}
          </div>
          <div className="carousel-inner">
            {ClothesGalleryFirst()}
            {ClothesGallery()}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          {/* <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" id="mybutton">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
          {GalleryClickNext()}
        </div>
      </div>
      <div className="container" style={{ background: 'rgb(245, 245, 245)' }}>
        <figure className="text-center">
          <img src="https://storage.googleapis.com/asia.artifacts.abstract-arbor-392000.appspot.com/static/image-banner01.jpg" className="img-fluid" alt="Responsive" style={{ width: '100%', marginTop: '5%' }} />
        </figure>
        <figure>
          <img src="https://storage.googleapis.com/asia.artifacts.abstract-arbor-392000.appspot.com/static/%E6%96%B0%E5%93%81%E4%B8%8A%E5%B8%82.jpg" alt="新品上市" display="block" width="100%" />
        </figure>
        <div className="d-flex align-content-stretch flex-wrap">
          {ClothesData()}
        </div>
        <figure style={{ margin: '5%' }}>
          <img src="https://storage.googleapis.com/asia.artifacts.abstract-arbor-392000.appspot.com/static/%E7%B5%90%E5%B8%B3%E6%BB%BF%E9%A1%8D.jpg" alt="結帳滿額" display="block" width="100%" />
        </figure>
        <div className="youtube01">
          {/* <!-- 16:9 aspect ratio --> */}
          <div className="embed-responsive embed-responsive-16by9" style={{ height: '100%' }}>
            {/* <iframe className="embed-responsive-item" src="..."></iframe> */}
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Hg-yiimsd6g" title="【 SIMURGH | 石墨烯機能西裝 】溫度調節 x 機洗不皺 x 彈性舒適 ! 擺脫傳統正裝的束縛，休閒、運動、在外上班一件搞定！" frameBorder="0" width="50%" height="100%" postition="relative"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            {/* width="660" height="371"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  */}
          </div>
        </div>
        {Footer01()}
        {RightToolBox()}
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