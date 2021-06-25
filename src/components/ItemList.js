import React, { useEffect,useState } from 'react';
import Item from './Item';
import './item-list.css';

let timer;

const ItemList = () => {

   const [products, setProducts] = useState([]);

   const getData = async () => {
      const res = await fetch("https://mocki.io/v1/65ee25ef-75b6-4847-a6fc-42734c543653",{
         method: "GET"
      })

      const {productos} = await res.json();
      setProducts(productos)
      console.log(productos);
   }

   useEffect(()=>{
      timer = setTimeout(()=> {
         getData();
      },2000)

      return () => {
         clearTimeout(timer);
      }
   },[])


   
   return (  
      <div className="item-list-container">
         {
            products.map((item)=> {
               return <Item item={item} key={item.id}/>
            })
         }
      </div>
   )
}

export default ItemList;