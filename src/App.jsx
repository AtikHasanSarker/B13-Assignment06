import { Suspense, useState } from "react";
import Badge from "./components/Badge";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tools from "./components/Tools";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

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
      <Steps />
      <Pricing />
      <Explore />
      <Footer />
    </>
  );
}

export default App
