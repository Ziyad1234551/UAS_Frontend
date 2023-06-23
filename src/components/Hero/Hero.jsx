import React from 'react'
import img from "../../assets/img.png";
import styled from "styled-components";
const Heros = styled.div`
   display:flex;
   justify-content:space-between;
   margin:10rem 3rem;

   h1{
    color: #06d6a0;
    font-size:3rem;
    font-weight:100;
   }
   h2{
    color:#11BAB2;
    font-size:1.7rem;
   }
   p{
    line-height:35px;
    color:#64768b;
    width:75%;

   }
   button{
    background-color:#06d6a0;
    padding:1rem 3rem;
    color:white;
    border:none;
    border-radius:5%;
   }
   @media(max-width:768px){
    flex-direction:column;
    gap:2px;

    div{
        margin-top:20px;
        width:100%;
        margin:auto;
    }
    img{
        width:100%;
        height:auto;
    }
    h1{
        font-size:1.5rem;
    }
    h2{
        font-size:1rem;
    }
    p{
        line-height:auto;
        font-size:0.8rem;
    }
    button{
        width:auto;
        height:auto;
        padding:0.5rem 1.5rem
    }

   }
   

   
   `
  
const Hero = () => {
   
  return (
    <Heros>
    <div>

        <h1>Covid ID</h1>
        <h2>Monitoring Perkembangan covid</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam omnis, quaerat maxime sequi corporis, eius quos dolor voluptates et placeat porro velit eveniet enim laborum!</p>
        <button>Vaccine</button>
    </div>
    <div>
    <img src={img}/>
    </div>
    </Heros>
  )
}

export default Hero