import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [buka,setBuka] = useState(false);
  const Nav = styled.div `
padding:0 1rem;
justify-content:space-between;
display:flex;
align-items:center;
flex-wrap:wrap;
background-color:#06d6a0;
color:white;
position:fixed;
width:100%;
top:0;
margin-bottom:200px;
Link{
  text-decoration:none;
}
.logo{
  padding:1rem 0;
font-size:1.7rem;
text-decoration:none;
font-weight: 800;
.menu{
  display:flex;
justify-content:space-between;
align-items:center ;
position:relative;
color:white;
}
.menu-link{
  color:white;
  text-decoration: none;
  padding:10px 18px;
}

@media(max-width:768px){
  overflow:hidden;
  flex-direction:column;
}
}
`


const MenuLink = styled.a`
color:white;
text-decoration: none;
padding:10px 18px;
`
const Hamburger = styled.div `
display:none;
flex-direction: column;
cursor:pointer;

span{
  height:2px;
  width:25px;
  background-color:white;
  margin-bottom:4px;
  border-radius:5px;
}
@media (max-width:768px){
  display:flex;
}

`
const Menu=styled.div`
display:flex;
justify-content:space-between;
align-items:center ;
position:relative;
color:white;
@media(max-width:768px){
  overflow:hidden;
  flex-direction:column;
  width:100%;
  max-height:${({buka})=>(buka?"300px": "0")}
} 
`

  return (
    <Nav>
    <a className="logo">Covid</a>

    <Hamburger onClick={()=>setBuka(!buka)}>
      <span/>
      <span/>
      <span/>

    </Hamburger>
    <Menu buka={buka}>
      <Link to="/" style={{textDecoration:'none'}}>

      <MenuLink href="">Global </MenuLink>
      </Link>
      <Link to="/indonesia" style={{textDecoration:'none'}}>
      <MenuLink className='menu-link' href="">Indonesia </MenuLink>
      </Link>
<Link to="/province" style={{textDecoration:'none'}}>

      <MenuLink className='menu-link' href="">Provinsi </MenuLink>
</Link>
<Link to="/about" style={{textDecoration:'none'}}>

      <MenuLink className='menu-link' href="">About </MenuLink>
</Link>

    </Menu>
    

    </Nav>
  )
}



export default Navbar