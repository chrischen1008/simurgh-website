import axios from "axios";
import React from "react";

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const baseURL = "http://127.0.0.1:8000/v1/products/items/?skip=0&limit=10";

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
        <tr>
          <th scope="row">{i+1}</th>
          <td>{post[i].clothes_no}</td>
          <td>{post[i].clothes_name}</td>
        </tr>
        )
      }
    return output;
}
  return (
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">款號</th>
      <th scope="col">款名</th>
    </tr>
  </thead>
  <tbody>
    {clothesData()}
  </tbody>
</table>
    
  );
  
}
export default App;