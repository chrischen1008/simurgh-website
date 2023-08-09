import axios from "axios";
import React,{ useEffect,useRef } from "react";

//! 模組化元件 
import Footer01 from "../Footer.js"
import Navbar01 from "../Navbar.js"
import RightToolBox from "../RightToolBox.js"
//!----------------

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// const baseURL = "http://localhost:8000/v1/products/items_img/?skip=0&limit=10";
// const baseURL = "http://127.0.0.1:8000/v1/products/clothes_img/?clothes_no=C50021"
//上線API網址
// const baseURL = "https://simurgh01-qds5m4plcq-de.a.run.app/v1/products/items/?skip=0&limit=10";
// "products/items_img/?skip=0&limit=4"
const baseURL = process.env.REACT_APP_BASE_URL;

function About() {
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


  return (
    <>
      {Navbar01}
      <div className="container-fluid" style={{ background: 'rgb(245, 245, 245)' }}>
      </div>
      <div className="container" style={{ background: 'rgb(245, 245, 245)' }}>
        {Footer01}
        {RightToolBox}
      </div>
    </>
  );
}
export default About;