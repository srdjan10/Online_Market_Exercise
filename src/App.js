import "./input.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NewProduct from "./components/pages/NewProduct";
import HomePage from "./components/pages/HomePage";

function App() {
  /* const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");

  let myLink = [
    { name: "About", link: "/About" },
    { name: "New product - SALE", link: "/NewProduct" },
    { name: "Contact", link: "/Contact" },
  ];

  const [linksLine, setLinksLine] = useState(myLink); */

  /* const fetchData = async () => {
    const response = await fetch(url);
    const dataD = await response.json();
    setData(dataD);
    //console.log(dataD);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilterData(
      data.filter((item) => item.title.toLowerCase().includes(query))
    );
  }, [data, query]);

  const handleChangeQuery = (e) => {
    setQuery(e.target.value);
  }; */

  return (
    <div>
      {/*       <Header newData={filterData} />
      <label>
        <input
          type="text"
          class="mb-4 flex-wrap items-stretch font-scadaItalic mt-3 ml-auto mr-auto block w-7/12 p-2 ps-8 text-sm text-indigo-600 border border-indigo-500 rounded-lg bg-gray-50 dark:placeholder-indigo-500 focus:border-red-500"
          placeholder="Search..."
          required
          value={query}
          onChange={handleChangeQuery}
        ></input>
      </label>
      <div class="flex flex-wrap justify-center font-scadaItalic items-center"></div>
      <Category newData={filterData} />
      <Footer props={linksLine} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Routes>
          <Route path="/About" element={<About />}></Route>
        </Routes>
        <Routes>
          <Route path="/NewProduct" element={<NewProduct />}></Route>
        </Routes>
        <Routes>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
