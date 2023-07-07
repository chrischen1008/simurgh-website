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
                <div class="card mt-5" style={{width: '18rem'}} >  {/* mt-5 為bootstrap提供card的上下左右間隔*/}
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
  return (
    <div class="container">
    <div class="row">
      {clothesData()}
    </div>


<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2016/02/23/17/42/orange-1218158_1280.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://e7.pngegg.com/pngimages/944/390/png-clipart-grape-fruit-kyoho-white-wine-cardinal-grape-grape-natural-foods-frutti-di-bosco-thumbnail.png" class="d-block w-100" alt="..." />
    </div>
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
    </div>
    
  );
  
}
export default App;