import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Cards } from "./components/Cards";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProductsData = async () => {
    await fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Cards productsData={products} />
      <Footer />
    </div>
  );
}

export default App;
