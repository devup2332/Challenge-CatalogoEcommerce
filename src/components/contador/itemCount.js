import React, {useState, useRef} from 'react'
import "./itemCount.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ButtonContador from './ButtonContador';
import ButtonAddCart from './ButtonAddCart';


const ItemCount = ({maxStock}) => {
   
   const [number, setNumber] = useState(0);
   const [btnAllow, setBtnAllow] = useState(false);
   const [btnDecrementAllow, setBtnDecrementAllow] = useState(false);
   const buttonRef = useRef(null)

   const handleIncrement = () =>{
      if(number < maxStock){
         setBtnDecrementAllow(false);
         return setNumber(number + 1)
      }
      setBtnAllow(true); 
   }

   const handleDecrement = () =>{

      if( number > 0 ) {
         setBtnAllow(false)
         return setNumber(number - 1)
      }
      setBtnDecrementAllow(true);
   }

   return (
      <div className="container">
         <div className="item-contador-container">
               <div className="item-contador">
                  <ButtonContador handler={handleIncrement} icon={<AddIcon/>} buttonRef={buttonRef} btnAllow={btnAllow}/>
                  <p>{number}</p>
                  <ButtonContador handler={handleDecrement} icon={<RemoveIcon/>} buttonRef={buttonRef} btnAllow={btnDecrementAllow}/>
               </div>   
            </div>   
               <ButtonAddCart/>         
         </div>
      
   )
}

export default ItemCount;