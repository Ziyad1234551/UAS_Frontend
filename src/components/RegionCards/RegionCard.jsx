import React from 'react'
import { styled } from 'styled-components'
const Card = styled.div `
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(2, 0, 0, 0.25);
border-radius: 20px;
width: 304px;
height: 250px;
gap:10px ;
margin:2rem 2rem;

.data{
    margin-left:25px;
}
.datw{
    color: #a9a9a9;
}
.data1{
    color:#06d6a0
}
.data2{
    color:#116ab2
}
.data3{
    color:#ef476f;
}
p{
    margin: 7px 1px;
    font-weight:light;
}

h3{
    text-align:center;
}
@media(max-width:768px){
    margin:auto;
    margin-top:10px;
}

`
const RegionCard = ({data}) => {
  return (
    <Card>
    <div className="text">
    <h3>{data.name}</h3>


    

    </div>
    <div className="data">
    <p className='datw'>Confirmed</p>
    <p className="data1">{data.numbers.confirmed}</p>

    </div>
    <div className="data">
    <p className='datw'>Recovered</p>
    <p className="data2">{data.numbers.confirmed}</p>

    </div> <div className="data">
    <p className="datw">death</p>
    <p className="data3">{data.numbers.death}</p>

    </div>
   


    


    
    </Card>
  )
}

export default RegionCard