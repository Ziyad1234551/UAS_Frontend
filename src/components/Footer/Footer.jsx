import React from 'react'
import styled from "styled-components";

const Footers = styled.footer`
margin-top:50px;
display:flex;
justify-content:space-between;
width:100%;
height:auto;
bottom:0;
background-color:#06d6a0 ;
color: white;
ul{
  display:flex;
  text-decoration:none;
  list-style-type:none;
  padding:18px 20px;
}
li{
  padding:18px 20px;
  font-size:18px;
  text-decoration: none;
}
@media(max-width:768px){
  display:flex;
  flex-direction:column;
  ul{display:flex;
  flex-direction:column;

}

}

`
const Footer = () => {
  return (
    <Footers>
      <div>
        <h1>Covid ID</h1>
        <h3>Developed By Ziyad</h3>
      </div>
      <div>
        <ul>
          <li>Global</li>
          <li>Indonesia</li> 
          <li>Provinsi</li> 
          <li>About</li>
        </ul>
      </div>
    </Footers>
  )
}

export default Footer