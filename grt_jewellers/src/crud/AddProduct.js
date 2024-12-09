import React, { useState } from "react";

const AddProduct = ({ addProduct }) => {
  const [product, setProduct] = useState({ name: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ ...product, id: Date.now() });
    setProduct({ name: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
