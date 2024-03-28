import { createContext, useContext, useReducer } from "react";

export const ProductContext = createContext("");

const initialState = {
  items: [],
  total: 0,
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedItems = [...state?.items, action.payload.item];
      const updatedTotal = state?.total + action.payload.item?.price;

      return {
        items: updatedItems,
        total: updatedTotal,
      };

    case "REMOVE":
      const { items, total } = state;
      const removeItem = items.filter((item) => item.id !== action.payload.id);

      const item = state.items.find((item) => item.id === action.payload.id);
      const money = total - item.price;

      return {
        items: [...removeItem],
        total: money,
      };

    default:
      return state;
  }
};

export const MyProductCut = () => {
  return useContext(ProductContext);
};

const MyProductContextWrap = ({ children }) => {
  const [cartState, dispatch] = useReducer(productReducer, initialState);

  const addItem = (item) => {
    dispatch({
      type: "ADD",
      payload: { item },
    });
    alert(`Product added to cart`);
  };

  const removeItem = (id, price) => {
    dispatch({ type: "REMOVE", payload: { id, price } });
  };

  return (
    <ProductContext.Provider
      value={{
        addItem,
        cartState,
        removeItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default MyProductContextWrap;
