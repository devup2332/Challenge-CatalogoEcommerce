import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const CartWidget = () => {
   return(
      <div className="nav-bar-shopIcon">   
            <a href="/"><ShoppingCartIcon fontSize="large"/></a>
         </div>
   )
}

export default CartWidget;