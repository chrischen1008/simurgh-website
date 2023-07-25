import axios from "axios";
import React,{ useEffect,useRef } from "react";

//! 模組化元件 
import Footer01 from "./components/Footer.js"
import Navbar01 from "./components/Navbar.js"
import RightToolBox from "./components/RightToolBox.js"
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

  const ClothesCardData = () => {
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

  const ClothesGallery = () => {
    var output = [];
    //第一張圖
    output.push(
      <div className="carousel-item active" data-bs-interval="3000" key={banner[0].src}>
        <img src={banner[0].src} className="d-block w-100" alt="..." width="50%" height="auto" />
      </div>
    )
    //其他圖
    for (let i = 1; i < banner.length; i++) {
      output.push(
        <div className="carousel-item" data-bs-interval="3000" key={banner[i].src}>
          <img src={banner[i].src} className="d-block w-100" alt="..." width="50%" height="auto" />
        </div>
      )
    }
    return output;
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

  return (
    <>
      {Navbar01}
      <div className="container-fluid" style={{ background: 'rgb(245, 245, 245)' }}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators" margin-top="100px">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            {ClothesGalleryButtons()}
          </div>
          <div className="carousel-inner">
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
          {ClothesCardData()}
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
        {Footer01}
        {RightToolBox}
      </div>
    </>
  );
}
export default App;