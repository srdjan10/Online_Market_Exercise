import React, { useState } from "react";
import Card from "./Card";
import { MyProductCut } from "./context";
import { motion as m } from "framer-motion";

let categoryList = [
  { id: 1, name: "electronics" },
  { id: 2, name: "jewelery" },
  { id: 3, name: "men's clothing" },
  { id: 4, name: "women's clothing" },
];

const Category = ({ newData }) => {
  const { addItem } = MyProductCut();
  const [newCategory, setnewCategory] = useState(categoryList);
  const [selectOptions, setSelectOptions] = useState([]);

  //console.log(newData);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectOptions((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((option) => option !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  const filteredData = newData.filter((item) => {
    if (selectOptions.length === 0) {
      return true;
    } else {
      return selectOptions.includes(item.category);
    }
  });

  //console.log(filteredData);

  return (
    <div>
      <div class="flex flex-wrap ml-auto mr-auto justify-center">
        {newCategory.map((item) => (
          <label
            class="flex items-center w-60 h-10 font-scada text-xl ml-3"
            key={item.id}
          >
            <input
              value={item.name}
              onChange={handleCheckboxChange}
              type="checkbox"
              class="appearance-none rounded-full h-6 w-6 cursor-pointer bg-indigo-300 border-indigo-500  focus:ring-red-600 focus:ring-2 checked:bg-blue-800"
            />
            <ul class="pl-3 cursor-pointer" key={item.id}>
              {item.name}
            </ul>
          </label>
        ))}
      </div>
      {filteredData.length === 0 ? (
        <p class="text-center p-20 font-extralight italic text-3xl text-indigo-600">
          There is no requested product
        </p>
      ) : (
        filteredData.map((item) => (
          <Card>
            <ul key={item.id}>
              <img
                src={item.image}
                alt={item.description}
                class="h-40 w-auto ml-auto mr-auto"
              ></img>
              <h1 class="font-scadaItalic text-center">{item.title}</h1>
              <h4 class="text-xs">{item.description}</h4>
              <p class=" font-extralight italic text-center">{item.category}</p>
              <h5 class="text-right p-2 font-bold underline ">${item.price}</h5>
              <m.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => addItem(item)}
                class="font-extralight font-scadaItalic border border-indigo-600 rounded-md p-2 hover:bg-indigo-400 w-14"
              >
                Add
              </m.button>
            </ul>
          </Card>
        ))
      )}
    </div>
  );
};
export default Category;
