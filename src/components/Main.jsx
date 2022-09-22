import React, { useState } from 'react'
import { EditPage } from './EditPage';
import axios from 'axios'
const Main = () => {
    const [openEditPage, setOpenEditPage] = useState(false)
    const handleOpenEditPage=()=>{
        // axios.get('http://localhost:8080/api/offers/checkOpenOffer/631a01164ecb1274d81134d7')

      
        axios.get('https://comesa.peaqock.com/api/offers/checkOpenOffer/631a01164ecb1274d81134d7')
        .then(resp=>{
          console.log(resp.data)
          if(resp.data==='OPEN'){
            setOpenEditPage(true)
          }else{
            alert(resp.data)
          }
        })
        .catch(err=>{
          console.log(err)
        })
    }

   const handleHide=()=>{
      setOpenEditPage(false)
    }

    return (
      <div className="App">
        <h1>Testing Web-socket</h1>
        <br />
        <button onClick={handleOpenEditPage}>Open-Edit Page</button>
        <br />
        <br />
        <button onClick={handleHide}>Hide Edit page</button>
       {openEditPage && <EditPage />}
      </div>
    );
}

export default Main