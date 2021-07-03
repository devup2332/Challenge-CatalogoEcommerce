import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetData from "../../components/products/UseGetData";
import ItemList from "../../components/products/ItemList";

function CategoryView() {
  const { categoryId } = useParams();
  const { products } = useGetData(
    "https://mocki.io/v1/8e03f7fa-59ee-45ea-bae6-f18801902b7b"
  );

  const [productosAFiltrar, setProductosAFiltrar] = useState([]);
  //Convert category to number and added product as dependecy of use effect with category id
  useEffect(() => {
    if (products.length > 0) {
      const data = products?.filter((product) => {
        return product?.category?.id === parseInt(categoryId);
      });
      setProductosAFiltrar(data);
    }
    return;
  }, [categoryId, products]);

  return (
    <div>
      <ItemList products={productosAFiltrar} />
    </div>
  );
}

export default CategoryView;
