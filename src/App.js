import axios from "axios";
import React from "react";

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

// const baseURL = "http://localhost:8000/v1/products/items_img/?skip=0&limit=100";
const baseURL = "http://127.0.0.1:8000/v1/products/clothes_img/?clothes_no=C50021"
//上線API網址
// const baseURL = "https://simurgh01-qds5m4plcq-de.a.run.app/v1/products/items/?skip=0&limit=10";

function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      // console.log(response.data);
    });
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
            <div class="col-sm" margin-bottom="100px">
                <div class="card" style={{width: '18rem'}} >  {/* mt-5 為bootstrap提供card的上下左右間隔*/}
                  <img class="card-img-top" src={post[i].clothes_img} alt="Card image cap" object-fit= "cover" width="500px"  height="500px" />
                  <div class="card-body">
                    <h5 class="card-title">{post[i].clothes_no}</h5>
                    <p class="card-text">{post[i].clothes_name}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>

        //
        // <div class="card" style={{width: '18rem'}}>
        //   <img class="card-img-top" src={post[i].clothes_img} alt="Card image cap" />
        //   <div class="card-body">
        //     <h5 class="card-title">{post[i].clothes_no}</h5>
        //     <p class="card-text"></p>
        //     <a href="#" class="btn btn-primary">Go somewhere</a>
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
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} aria-label={{"Slide ":i+1}}></button>
      )
    } //data-bs-slide-to 按照索引新增
  return output;
}

const clothesGalleryFirst=()=>{ //第一張圖
  var output=[];
  output.push(
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={post[0].clothes_img}  class="d-block w-100" alt="..." width="50%" height="auto" />
    </div>
  )
  return output;
}


const clothesGallery=()=>{
  var output=[];
  for(let i=1;i<post.length;i++){
      output.push(
            <div class="carousel-item" data-bs-interval="2000">
              <img src={post[i].clothes_img} class="d-block w-100" alt="..." width="50%" height="auto" />
            </div>
      )
    }
  return output;
}

  return (
  <div class="container-fluid" style={{background:'rgb(245, 245, 245)'}}>
    
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators" margin-top="100px">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      {clothesGalleryButtons()}
      </div>
      <div class="carousel-inner">
          {clothesGalleryFirst()}
          {clothesGallery()}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <figure>
      <img src="https://cms.cdn.91app.com/images/original/40984/63de816c-f437-4121-a54b-989ecef01d82-1670996644-u27xtj7h96_d_1200x75_800x50_400x25.jpg" display="block" width="100%"/>
    </figure>
    <div class="row">
      {clothesData()}
    </div>
    </div>
    
  );
  
}
export default App;