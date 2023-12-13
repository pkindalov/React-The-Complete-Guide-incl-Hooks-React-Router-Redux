import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      {PRODUCTS.map((product) => {
        return (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        );
      })}
      {/*<ul>*/}
      {/*  <li>*/}
      {/*    <Link to="products/product-1">1</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link to="products/product-2">2</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link to="products/product-3">3</Link>*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </>
  );
}

export default ProductsPage;
