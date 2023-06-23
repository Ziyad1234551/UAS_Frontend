import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import {useSelector} from "react-redux";
const Tabelsa =  styled.div`
display: flex;
flex-direction: column;
margin:auto;
margin-top: 4rem;
align-items:center;
h1{
    text-align:center;
    color:#06d6a0;
}
h2{
    color:#118ab2;
    text-align: center;
    font-size:1.5rem;
    font-weight: 100;
}
table{
    width:100%;
    border-collapse:collapse;
}
table td,table,th{
    padding:15px 25px;
    border:1px solid #06d6a0;
    text-align:center;
    
}
table th{
    color:#06d6a0;
}
table tbody tr:nth-child(even){
    background-color: #F5F5F5;
}
@media(max-width:768px){
    table thead{
        display:none;
    }
    table table tbody,table tr,table tbody{
        display:block;
        align-items:center;
        margin:auto;
        width:100%;
    }
    table tr{
        margin-bottom:15px;
    }
    table td {
        text-align:right;
        padding-left:50%;
        position:relative;
    }

}
`

const Tabel = () => {
    const provinces = useSelector((state)=>state.provinces.provinces);
    const[datas,setDatas] = useState(provinces.provinces);


    
    useEffect(()=>{
       

        console.log(provinces)
    })

  return (
    <Tabelsa>
        <div className="text">
            <h1>Provinsi</h1>
            <h2>Data Covid Berdasarkan Provinsi</h2>
        </div>
        <div className='tables'>
        <table>
            <thead>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
            </thead>
            <tbody>
{
    datas.map((data,index)=>{
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{data.kota}</td>
                <td>{data.kasus}</td>
                <td>{data.sembuh}</td>
                <td>{data.dirawat}</td>
                <td>{data.meninggal}</td>

            </tr>
        )
    })
    
}
            
           
            
            </tbody>
        </table>

            
        </div>
    </Tabelsa>
  )
}

export default Tabel