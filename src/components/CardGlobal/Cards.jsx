import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import data from '../../utils/constants/indonesia'
import Card from './Card'
import ENDPOINT from '../../ENDPOINT';
import axios from 'axios';
const Carda = styled.div`
display:flex;
flex-direction: column;
align-items:center ;
margin: auto;
margin-top:40px;
margin-bottom:100px;


h1{
    text-align:center;
    color:#06d6a0;
}
h2{
    color:#118ab2;
    font-size:1.5rem;
    font-weight: 100;
}
.cards{
    display:flex;
    
    
}
@media(max-width:768px){
    .cards{
        margin:auto;
        flex-direction:column;
        width:100%;
        height:auto;
        
    }
    h1{
       font-size:1.2rem;
    }
    h2{
        font-size:1rem;
    }
}

`
const Kartu = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
`
const Cards = () => {
    const url = ENDPOINT.global;
    const [datas,setDatas] = useState([])
    useEffect(()=>{
        getDatas();
    })


    async function getDatas(){
        const response = await axios.get(url);
        setDatas(response.data.global);
    }
  return (
    <Carda>
    <div className="text">
        <h1>Global Situation</h1>
        <h2>Data Covid Berdasarkan Global</h2>
    </div>
    <div className='cards'>
    {
        datas.map((data)=>{
            return(
                <Card data={data}/>
            )

        })


    }

    </div>

    </Carda>
  )
}

export default Cards