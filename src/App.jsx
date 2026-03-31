import { useState } from "react";
import Badge from "./components/Badge";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tools from "./components/Tools";

const getProducts = async () => {
  const res = await fetch("/products.json")
  return res.json();
}
const productsPromise = getProducts()


function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero />
      <Badge />
      <Tools
        productsPromise={productsPromise}
        setCartCount={setCartCount}
      />
    </>
  );
}

export default App
