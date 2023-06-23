import React, { useState } from 'react'
import image from "../../assets/img2.png"
import { styled } from 'styled-components'
import data from '../../utils/constants/provinces'
import Alert from "../alert/Alert";
const Forms = styled.div`
display:flex;
justify-content: space-between;
margin:5rem 5rem;
@media(max-width:768px){
    margin-top:4rem;
    display:flex;
    flex-direction: column;
    margin:auto;
    img{
        width:100%;
        height:auto ;
    }
    select, input {
        width:80%;
        margin-right: 5px;
    }
    button{
        width:25px;
        font-size:3px;
    }
}
h1{
    text-align:center;
    color:#06d6a0;
}
select{
background: #FFFFFF;
width:400px;
height:40px;
border: 2px solid #06D6A0;
border-radius: 10px;
text-align:left;
color:#a9a9a9;

text-transform :capitalize;
}
select option{
    color:#010101;
    text-align:left;

}
.pilih{
    position:absolute;
    text-align:left;
}
.form{
    margin-top:20px;
}
label{
    color:#a9a9a9;
}
input{
    background: #FFFFFF;
    width:400px;
height:40px;
   
    
    border: 2px solid #06D6A0;
    border-radius: 10px
}
button{
    background-color:#06D6A0;
    width:100%;
    font-size:20px;
    color:white;
    margin-top: 20px;
    height:45px;
    border-radius:20px;
}

`
const Form = () => {
    const [datas,setDatas] = useState(data.provinces);

    const [status,setStatus] = useState("");
    const [jumlah,setJumlah] = useState("");
    const [kota,setKota] =useState("");
    const [isStatuError,setIsStatusError] = useState(false);
    const [isJumlahError,setIsJumlahError] = useState (false);
    const [isKotaError,setIsKotaError] =useState(false);
    console.log(datas)
  
    function handleKota(e) {
      setKota(e.target.value);
  
      
    }
    function handleJumlah(e){
      setJumlah(e.target.value);
    }
    function handleStatus(e){
      setStatus(e.target.value);
    }
    function handleSubmit(e){
      e.preventDefault();
  
      if(kota===""){
        setIsKotaError(true);
      }
      else if(jumlah===""){
        setIsJumlahError(true);
      }
      else if(status ===""){
        setIsStatusError(true);
      }
  
      else{
        setIsJumlahError(true);
        setIsKotaError(true);
        setIsStatusError(true);
      }
  
  
    }
  return (
    <Forms>
        <div className="gambar">
            <img src={image} alt="a"/>
        </div>
        <div>
            <h1>Form Covid</h1>
            <form onSubmit={handleSubmit}>
            <div className="form">
                <label htmlFor='provinsi'>Provinsi</label>
                <br>

                </br>
                <select id="provinsi" value={kota} onChange={handleKota}>
                    <option>pilih Provinsi</option>
                    {
                        datas.map((data)=>{
                            return(
                                <option>{data.kota}</option>
                            )
                        })
                    }
                   
                </select>
                {isStatuError && <Alert>Status Wajib diisi</Alert>}
            </div>
            <div className="form">
                <label htmlFor='status'>status</label>
                <br>

                </br>
                <select id="status" value={status} onChange={handleStatus}>
                    <option>Pilih Status</option>
                    <option>Sakit</option>
                    <option>Dirawat</option>
            ````````<option>Sembuh</option>
                    
                   
                </select>
                {isStatuError && <Alert>Status Wajib diisi</Alert>}
            </div>
            <div className='form'>
                <label htmlFor='jumlah'>jumlah</label>
                <br>

                </br>
                <input type="text" value={jumlah} onChange={handleJumlah}/>
                {isJumlahError && <Alert>Jumlah Wajib diisi</Alert>}

            </div>
            <button>Submit</button>

            </form>
        </div>
    </Forms>
  )
}

export default Form