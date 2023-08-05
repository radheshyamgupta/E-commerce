import React, { useContext, useEffect } from 'react'
import { myContex } from "./Component/ContexApi/Contex"
import "./Header.css"
import { NavLink } from 'react-router-dom'
import Modal from './Component/Modal/Modal'
export default function Header() {


  const { display, setDisplay, cartDataItem, setCartItemData, datas } = useContext(myContex)
  useEffect(() => {
    if (datas.length <= 0) {
      setCartItemData(0)
    }

  }, [])

  const displayfun = () => {
    setDisplay(true)
  }

  const closeHandler = () => {
    setDisplay(false)
  }

  return (
    <>

      <nav>
        <ul className="menue">

          <li><NavLink to={"/home"} style={{color:"white" ,textDecoration:"none"}}>HOME</NavLink></li>
          <li><NavLink to={"/store"} style={{color:"white", textDecoration:"none"}}>STORE</NavLink></li>
          <li><NavLink to={"/about"} style={{color:"white" ,textDecoration:"none"}}>ABOUT</NavLink></li>

        </ul>
        <div>
          <button onClick={displayfun} className="car_right_button">cart
          </button>
          {cartDataItem > 0 && <span className="badge">{cartDataItem}</span>}
        </div>



      </nav>
      {display ? <Modal closehandlerbutton={closeHandler} /> : ""}
    </>

  )
}
