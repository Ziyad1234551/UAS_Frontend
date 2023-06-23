import React from 'react'
import { styled } from 'styled-components'
import gambar from "../../assets/nature.avif";
const Abouta = styled.div`
margin-top: 100px;
margin-bottom: 100px;
justify-content:space-between;
display:flex;
margin-right: 5px;
margin-left: 5px;

h1{
    font-size:46px;
    color:#06d6a0

}
p{
    line-height:35px;
    color:#a9a9a9;
    font-size:16px;
}
button{
    padding: 14px 30px;
    color:white;
    background-color:#06d6a0;
    outline:none;
    border:none;
    border-radius:5px;
    margin-top: 5px;
}
@media (max-width:768px){
    flex-direction:column;
    margin-top: 201px;

    img{
        width:auto;
    }
}
`
const Aboutas = () => {
  return (
    <Abouta>
       
        <div className="hero">
           <h1>Tentang Saya</h1>
           <p> Nama Saya Ziyad NIM : 0110219128 Kak Aufa Saya Belum Paham Tentang Masukin Data Ke Tabel Bisa Tolong Bikinin Video Caranya Tidak Kak? Maaf email saya : ziyadamir2012@gmail.com ,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quos minus voluptates rem aliquid deleniti numquam debitis excepturi vero, placeat sunt odio?</p>

           <button>Tolong Kak</button>

        </div>
        <div className="image">
            <img src={gambar}/>
        </div>
        
                
          
        
    </Abouta>
  )
}

export default Aboutas