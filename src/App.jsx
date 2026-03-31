import { Suspense, useState } from "react";
import Badge from "./components/Badge";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tools from "./components/Tools";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Explore from "./components/Explore";

const getProducts = async () => {
  const res = await fetch("/products.json")
  return res.json();
}


function App() {
  const productsPromise = getProducts()
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero />
      <Badge />
      <Suspense fallback={<h3>Loading</h3>}>
        <Tools productsPromise={productsPromise} setCartCount={setCartCount} />
      </Suspense>
      <Steps />
      <Pricing/>
      <Explore/>
    </>
  );
}

export default App
