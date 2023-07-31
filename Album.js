import React,{useContext} from 'react';
import "./Album.css";
import { myContex } from './ContexApi/Contex';

export default function Album(props) {
   const {datas,dataHandler,cartDataItemHandler,setDisplay}=useContext(myContex)
   const seethecart=()=>{
    setDisplay(true)
   }

  const addToCartHandler = (item) => {
   
    
   
    const isItemInCart = datas.some((data) => data.title === item.title);
    
    if (isItemInCart) {
      alert("You have already added this product to the cart.");
    } else {
      dataHandler([...datas, item]);
      cartDataItemHandler(1);
      alert("you have succefully added this product")

    }
  };

  
  

  return (
    <div className='album-img'>
      <ul>
          {props.item.map((img, index) => (
            
            <li key={index}>
            <h2 style={{position:"relative",top:"0" , left:"95px" ,fontFamily:"cursiv"}}> {img.title}</h2>
           <div className="hover"> <img src={img.imageUrl} alt={img.title} /> </div> 
            <h4>  {img.price}</h4>
           <button style={{position:"relative",top:"-15px" , left:"200px" ,width:"100px"}}  onClick={()=>addToCartHandler(img)} >ADD TO CART </button>
           </li>
          ))}
      
      </ul>
      <button className='lastbutton' onClick={seethecart}>See the cart</button>
    </div>
  );
}
