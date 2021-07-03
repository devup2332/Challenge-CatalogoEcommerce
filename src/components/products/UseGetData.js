import {useState, useEffect} from 'react';

let timer ; 

function useGetData(url) {
   const [products, setProducts] = useState([]);

   const getData = async (url) => {
      const res = await fetch(url,{
         method: "GET"
      })

      const {productos} = await res.json();
      setProducts(productos)
      return productos
   }

   useEffect(()=>{
      timer = setTimeout(()=> {
         getData(url);
      },2000)

      return () => {
         clearTimeout(timer);
      }
   },[])

   return{products, getData}
}

export default useGetData
