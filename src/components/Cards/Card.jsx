import styles from "./Card.module.css";
import React from 'react'
import { styled } from 'styled-components'
const Kartu = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
width: 304px;
height: 150px;
gap:10px ;
margin:2rem 2rem;

h3{
    text-align:center;
    font-size:1.5rem;
}
h4{
    text-align:center;
    font-size:1.4rem;
}
@media(max-width:768px){
    margin:auto;
    margin-top:10px;
}
`
const Card = ({data}) => {
  return (
    <Kartu>
    <h3>{data.status} </h3>
    <h4 className={data.status ==='Positif'?styles.no1 : data.status ==='Sembuh'?styles.no2 :styles.no3}>{data.total}</h4>
    </Kartu>
  )
}

export default Card