
import React,{useContext, useEffect, useState} from 'react';
import "./ModalContent.css";
import { myContex } from '../ContexApi/Contex';

export default function ModalContent(props) {
   const {datas,setData}=useContext(myContex)
 const [totalPrice,setTotalPrice]=useState(0)

  const closeHandler = () => {
    props.closebutton1(); 
  };
  useEffect(()=>{
 let sum=0;
 for(let i=0;i<datas.length;i++){
  const pricedata=datas[i].price.replace("₹"," ")
  sum+=parseFloat(pricedata,10)
  console.log(datas[i].price)
 }
 setTotalPrice(sum)


  },[datas])
  const removebuttonHandler = (itemToRemove) => {
    setData((prevData) => prevData.filter((item) => item !== itemToRemove));
  };

  const purchasebutton=()=>{
    if(datas.length<=0)
    {
      alert("your cart is empty")
    }
    else
    {
      alert("thanky you for purchasing this product")
    }
    
  }
  return (
    <div className="modal_content_parent">
      <div className="cartbuton">
        <div>CART</div>
        <div>
          <button className="cancle" onClick={closeHandler}>x</button>
        </div>
      </div>
      <div className="itemlist">
        <h2>ITEM</h2>
        <h2>PRICE</h2>
        <h2>QUANTITY</h2>
      </div>
      <div className="mapImageData">
      <ul>

     
        {/* Correct the map function and render each data.title */}
        {datas.map((item, index) => (
          <li key={index}>
            <img src={item.imageUrl} alt={item.title} style={{position:"relative", left:"5px"}}
             />  <span className="remove" style={{margin:" 0px 5px" ,position:"relative", left:"5px"}}> {item.title}</span> <span className="remove"  style={{position:"relative", left:"25px"}} >  {item.price}</span>  <input style={{ position:"relative", left:"50px"}} ></input>
            <h5 className="remove button" style={{ display: "inline-block" ,background:" rgb(226, 21, 21)", outline:"none", width: "80px", padding: "5px", border: "none", cursor: "pointer" ,margin:"0px 20px" ,position:"relative", left:"70px" ,color:"white"}} onClick={()=>removebuttonHandler(item)}>REMOVE</h5>
            <hr></hr></li>

        ))}
     </ul>
      </div>
      <div className="total">
        <h3>Total</h3> <span style={{fontWeight:"500"}}>₹ {totalPrice}</span> 
      </div>
      <div className="purchase">
        <button className="button1" onClick={purchasebutton}>PURCHASE</button>   
      </div>
    </div>
  );
}

