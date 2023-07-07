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
            <div class="col-sm">
                <div class="card" style={{width: '18rem'}}>
                  <img class="card-img-top" src={post[i].clothes_img} alt="Card image cap" />
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
    </div></div>
  );
  
}
export default App;