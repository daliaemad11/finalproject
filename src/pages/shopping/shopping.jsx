import {createContext, useState } from "react";

export const CartContext = createContext();


export const CartProvider=({children})=>{
   const [cart,setcart] = useState({
    item:[],
    itemcount:0,
    carttotal:0,
   })

const calculatCarttotal=(items)=>{
const itemsCount=items.reduce((prev,curr)=> prev+curr.qun,0);
const cartTotal=items.reduce((prev,curr)=> prev+curr.qun * curr.price,0 );
return {itemsCount,cartTotal};
}

   const addtoCart = productc =>{
const { items=[] } = cart;
const productindex = items.findIndex(item=>item.id===productc.id);
if(productindex === -1){
    items.push({
        ...productc,
        qun:1,
    });
   }else{
    items[productindex].qun++;
   }

   const total=calculatCarttotal(items)
setcart({
    items,
    ...total,
    itemcount:total.itemsCount,
    // carttotal:total.cartTotal,

    
})
   console.log(total);

}






const reducefromCart = productc =>{
   const { items=[] } = cart;
   const productindex = items.findIndex(item=>item.id===productc.id);
   if(productindex === -1){
       items.push({
           ...productc,
           qun:1,
       });
      }else if(items[productindex].qun>0) {
            items[productindex].qun--;  
      }
   
      const total=calculatCarttotal(items)
   setcart({
       items,
       ...total,
       itemcount:total.itemsCount,
       // carttotal:total.cartTotal,
   
       
   })
   
   }









const removefromCart = productc =>{
const {items = [] }= cart;
const productindex = items.findIndex(item=>item.id===productc.id);
if (productindex!=-1) {
   items.splice(productindex,1)
} 
const total=calculatCarttotal(items)
setcart({
    items,
    ...total,
    itemcount:total.itemsCount,
    // carttotal:total.cartTotal,

    
})
}
   return( <CartContext.Provider value={{cart,addtoCart,removefromCart,reducefromCart}}>
        {children}
        </CartContext.Provider>
        );
};
