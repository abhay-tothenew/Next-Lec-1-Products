"use client";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

export default function Products() {
  const [productsApi, setProductsApi] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch("https://dummyjson.com/products");
      const data = await result.json();
      setProductsApi(data.products.slice(0, 10));
    };

    fetchProducts();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Product List</h1>
      {productsApi.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price ($)</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {productsApi.map((product) => (
              <tr key={product.id} style={styles.row}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  table: {
    width: "80%",
    margin: "auto",
    borderCollapse: "collapse",
    textAlign: "center",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
  },
  row: {
    borderBottom: "1px solid #ddd",
  },
};
