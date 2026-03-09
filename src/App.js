import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import useFetch from "./hooks/useFetch";
import { urlApiProducts } from "./utils/constants";
import { STORAGE_PRODUCTS_CART } from "./utils/constants";

function App() {
  const products = useFetch(urlApiProducts, null);
  const [productsCart, setProductsCart] = React.useState([]);
  console.log(products);

  useEffect(() => {
    getProductsCart();
  }, []);

  const getProductsCart = () => {
    const storedProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);

    if (!storedProducts) {
      setProductsCart([]);
      return;
    }

    try {
      const idsProducts = JSON.parse(storedProducts);
      setProductsCart(Array.isArray(idsProducts) ? idsProducts : []);
    } catch {
      const recoveredProducts = storedProducts
        .split(",")
        .map((item) => Number(item.trim()))
        .filter((item) => !Number.isNaN(item));

      localStorage.setItem(
        STORAGE_PRODUCTS_CART,
        JSON.stringify(recoveredProducts),
      );
      setProductsCart(recoveredProducts);
    }
  };

  const addProductCart = (id, name) => {
    const idsProducts = [...productsCart, id];
    setProductsCart(idsProducts);

    console.log(`Producto ${name} añadido al carrito`);

    localStorage.setItem(STORAGE_PRODUCTS_CART, JSON.stringify(idsProducts));

    console.log("Productos en el carrito:", idsProducts);
    getProductsCart();
    toast.success(`Producto ${name} añadido al carrito`);
  };

  return (
    <div>
      <TopMenu
        productsCart={productsCart}
        getProductsCart={getProductsCart}
        products={products}
      />
      <Products products={products} addProductCart={addProductCart} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
