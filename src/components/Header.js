/* import "./input.css"; */
import { FaHeadphones } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import ModalPortal from "./ModalPortal";
import { MyProductCut } from "./context";
import { MdDelete } from "react-icons/md";

const Header = ({}) => {
  const { cartState, removeItem } = MyProductCut();
  const [ModalOpen, setModalOpen] = useState(null);
  const [itemDetal, setItemDetal] = useState("");

  const handleOpenModal = (item) => {
    setModalOpen(true);
    setItemDetal(item);
  };

  const handleClose = () => {
    setModalOpen(null);
  };
  //console.log(cartState);

  return (
    <div>
      <header class="flex flex-wrap justify-between bg-gradient-to-r from-indigo-500 font-scada">
        <div class="max-w-7xl lg:px-4 text-white p-4">
          <FaHeadphones />
          <p class="text-xs ml-auto items-center">call centar: 0800-122-221</p>
          <h1 class="text-inherit text-3xl text-center mr-auto">
            ONLINE MARKET...
          </h1>
        </div>
        <span class="flex flex-wrap text-4xl mt-2 ml-auto text-blue-500 item-center">
          <button type="button" onClick={() => handleOpenModal()}>
            <FaCartShopping />
          </button>
          <ModalPortal isOpen={ModalOpen} onClose={handleClose}>
            <ul>
              {cartState?.items?.map((item) => (
                <ul class="flex-wrap p-2 items-center " key={item.id}>
                  <p class="text-xl p-1">{item?.title}</p>
                  <br />
                  <img
                    src={item.image}
                    alt="product"
                    width={50}
                    class="ml-auto mr-auto"
                  ></img>
                  <p class="text-xl p-2">{item?.price} $</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    type="button"
                    class="p-1 rounded-md bg-red-300 hover:bg-red-600"
                  >
                    <MdDelete />
                  </button>
                  <hr class=" w-3/4 h-1 mx-auto bg-gray-300 " />
                </ul>
              ))}
            </ul>
          </ModalPortal>
        </span>
        <span class="text-base items-center flex flex-wrap text-blue-500 px-4">
          <MdEmail />
          <a href="mailto:testproba@gmail.com" target="_blank" rel="noreferrer">
            Write to us...
          </a>
        </span>
      </header>
    </div>
  );
};

export default Header;
