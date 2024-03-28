import React, { useEffect, useState } from "react";
import logo from "../pages/images/VTL_Development--.png";
import Card from "../Card";
import { motion as m } from "framer-motion";

const urlNewProduct = "https://api.escuelajs.co/api/v1/products";

const NewProduct = () => {
  const myDate = new Date().getFullYear();
  const [newProduct, setNewProduct] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");

  const newFetchData = async () => {
    const resposne = await fetch(urlNewProduct);
    const dataNew = await resposne.json();
    setNewProduct(dataNew);
    console.log(dataNew);
  };

  useEffect(() => {
    newFetchData();
  }, []);

  useEffect(() => {
    setSearch(
      newProduct.filter((item) => item.title.toLowerCase().includes(query))
    );
  }, [newProduct, query]);

  const handleSearchNew = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <header class="p-2 text-center text-3xl italic font-extralight bg-gradient-to-l from-[#242b35] text-slate-800 h-auto rounded-sm">
        New Product in our online market...
      </header>
      <label>
        <input
          type="text"
          class="mb-4 flex-wrap items-stretch font-scadaItalic mt-3 ml-auto mr-auto block w-7/12 p-2 ps-8 text-sm from-[#242b35] border rounded-lg bg-gray-50 dark:placeholder-indigo-500 focus:border-red-500"
          placeholder="Search..."
          required
          value={query}
          onChange={handleSearchNew}
        ></input>
      </label>
      {search.map((item) => (
        <Card>
          <m.ul
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            key={item.id}
          >
            <h1 class="text-center font-extralight italic">{item.title}</h1>
            <img
              class="h-40 w-auto ml-auto mr-auto rounded-md"
              src={item.images}
              alt="New product"
            ></img>
            <h4 class="text-center text-xl italic font-bold">
              Price: {item.price} $
            </h4>
            <h4 class="text-justify line-clamp-3 hover:line-clamp-6">
              {item.description}
            </h4>
            <h1 class="text-center font-extralight italic">
              {item.category.name}
            </h1>
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              class="font-extralight font-scadaItalic border border-indigo-600 rounded-md p-2 hover:bg-indigo-400 w-14"
            >
              ADD
            </m.button>
          </m.ul>
        </Card>
      ))}
      <footer class="text-right text-sm italic font-extralight bg-gradient-to-l from-[#242b35] text-gray-200 h-12 rounded-sm">
        © Copyright {myDate} VTL DEVELOPMENT
        <img
          class="h-14 w-16 ml-auto mr-auto -mt-6"
          src={logo}
          alt="logo"
        ></img>
      </footer>
    </div>
  );
};
export default NewProduct;
