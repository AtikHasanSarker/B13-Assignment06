import React, { use } from 'react';
import Product from './Product';

const Products = ({ productsPromise, carts, setCarts }) => {
    const products = use(productsPromise);


  return (
    <div className="max-w-300 mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Product key={product.id} product={product} carts={carts} setCarts={setCarts} />
        ))}
      </div>
    </div>
  );
};

export default Products;