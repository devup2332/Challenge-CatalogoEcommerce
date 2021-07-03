import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import useGetData from '../../components/products/UseGetData';
import ItemList from '../../components/products/ItemList';


function CategoryView() {
   
   const {categoryId} = useParams();
   const {products, getData} = useGetData('https://mocki.io/v1/8e03f7fa-59ee-45ea-bae6-f18801902b7b');
   
   const [productosAFiltrar, setProductosAFiltrar] = useState([]);

   const filterProducts = async() => {
      let data = await getData('https://mocki.io/v1/8e03f7fa-59ee-45ea-bae6-f18801902b7b')

      
      data = data.filter( (product) => {
         return product?.category?.id === categoryId
      }) 
      setProductosAFiltrar(data)
      console.log(categoryId)
      console.log(data)

   }

   useEffect(() => {
      return(filterProducts())
   }, [categoryId])

   return (
      <div>
         <ItemList products={productosAFiltrar}/>
      </div>
   )
}

export default CategoryView