import { useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { getProducts } from "../common/requests";
import Spinner from "../common/components/Spinner";
import useApi from "../common/hooks/useApi";

function Products() {
  const { data: products, isLoading, call } = useApi();

  useEffect(() => {
    call(getProducts);
  }, []); //eslint-disable-line

  if (isLoading || !products) {
    return <Spinner text="Fetching products" />;
  }

  return (
    <ul className="flex flex-wrap">
      {products.map((x) => (
        <ProductCard key={x.id} id={x.id} title={x.title} image={x.image} price={x.price} />
      ))}
    </ul>
  );
}

export default Products;
