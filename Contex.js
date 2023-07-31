import React, { createContext, useState } from 'react'

const myContex = createContext()


export default function Contex({ children }) {
   const [display, setDisplay] = useState(false)

   const [datas, setData] = useState([])
   const [cartDataItem, setCartItemData] = useState(0)
   const cartDataItemHandler = (dataitem) => {
      setCartItemData((prvData) => prvData + dataitem)
   }
   const dataHandler = (itemdata) => {

      setData(itemdata)
   }

   return (

      <myContex.Provider value={{ datas, dataHandler, setCartItemData,cartDataItem, cartDataItemHandler, setData ,setDisplay,display}} >
         {children}

      </myContex.Provider>
   )
}
export { myContex }
