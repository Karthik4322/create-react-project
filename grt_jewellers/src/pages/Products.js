import React from "react";

const Products = () => {
  // Example product data
  const products = [
    {
      id: 1,
      name: "Gold Necklace",
      price: "₹20,000",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Diamond Ring",
      price: "₹50,000",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Platinum Bracelet",
      price: "₹70,000",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
