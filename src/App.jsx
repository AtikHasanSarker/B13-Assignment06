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

  return (
    <>
      <Navbar />
      <Hero />
      <Badge />
      <Tools productsPromise={productsPromise} />
    </>
  );
}

export default App
