import React from 'react'
import useGetData from '../../components/products/UseGetData';
import ItemList from '../../components/products/ItemList';


function HomeView() {
   
   const {products} = useGetData('https://mocki.io/v1/8e03f7fa-59ee-45ea-bae6-f18801902b7b')
   
   return (
      <div>
         <ItemList products={products}/>||
      </div>
   )
}

export default HomeView

