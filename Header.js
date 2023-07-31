import React, { useState ,useContext, useEffect} from 'react'
import { myContex } from "./Component/ContexApi/Contex"
import "./Header.css"
import Modal from './Component/Modal/Modal'
export default function Header() {
 
  
  const {display,setDisplay,cartDataItem,setCartItemData,cartDataItemHandler,datas}=useContext(myContex)
 useEffect(()=>{
  if(datas.length<=0){
    setCartItemData(0)
  }
 
 },[])





  const displayfun = () => {
    setDisplay(true)
  }

  const closeHandler=()=>{
    setDisplay(false)
  }

  return (
    <>

      <nav>
        <ul  className="menue">
          <li>HOME</li>
          <li>STORE</li>
          <li>ABOUT</li>

        </ul>
        <div>
        <button onClick={displayfun} className="car_right_button">cart
        </button>
        {cartDataItem> 0 && <span className="badge">{cartDataItem}</span>}
        </div>
       
      

      </nav>
      {display ? <Modal  closehandlerbutton={closeHandler}  /> : ""}
    </>

  )
}
