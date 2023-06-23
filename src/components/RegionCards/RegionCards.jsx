import React, { useEffect,useState } from 'react'
import { styled } from 'styled-components'
import ENDPOINT from "../../ENDPOINT";
import axios from "axios";
import RegionCard from './RegionCard';
const Card = styled.div `
display: flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
margin: auto;
margin-top:40px;

.cards{
    display:flex;
    
    
}
`
const Text = styled.div `
h1{
    text-align:center;
    color:#06d6a0;
}
h2{
    color:#118ab2;
    font-size:1.5rem;
    font-weight: 100;
    text-align:center;
}`
const RegionCards = () => {
  const [datas,setDatas] = useState([]);
  const url = ENDPOINT.global;
  useEffect(()=>{
    getDatas();
  })
  
  async function getDatas(){

    const response = await axios.get(url)
    setDatas(response.data.regions);

  }
  return (
    <>

    <Text>

        <h1>Situations By Region</h1>
        <h2>Bacaan Pilihan Covid</h2>
    </Text>
    <Card>
        {
        datas.map((data)=>{
            return(
              <div className="cards">
                <RegionCard data={data}/>

              </div>

              
             
            )

        })


    }
    </Card>
    </>
  )
}

export default RegionCards