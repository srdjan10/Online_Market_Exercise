import React from "react";
import * as ReactDOM from "react-dom";
import { MyProductCut } from "./context";

export default function ModalPortal({ item, isOpen, onClose, children }) {
  const { cartState } = MyProductCut();
  const OVERLAY_STYLE = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: isOpen ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .5)",
    overflowY: "auto",
    zIndex: "1000",
  };
  const MODAL_STYLES = {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
    zIndex: "1000",
    height: "100%",
    width: "100%",
  };

  return ReactDOM.createPortal(
    <div style={OVERLAY_STYLE} class="font-scada">
      <div class="mt-6 inline-flex flex-row mr-auto ml-auto max-w-md max-h-screen bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div style={MODAL_STYLES}>
          <p class="text-center text-xl">Products</p>
          <hr class=" w-3/4 h-1 mx-auto bg-red-300 "></hr>
          {children}
          <hr class=" w-3/4 h-1 mx-auto bg-red-300 " />
          <h4>Summary:</h4>
          <strong class="text-3xl text-red-500 p-2">
            {Math.floor(cartState?.total, 1)} $
          </strong>
          <hr class=" w-3/4 h-1 mx-auto bg-red-300 " />

          <button
            class="mr-3 p-3 rounded-md bg-indigo-300 hover:bg-red-600 font-bold text-white"
            onClick={onClose}
          >
            BUY PRODUCT
          </button>
          <button
            class="p-3 rounded-md bg-indigo-300 hover:bg-indigo-600 text-white font-extralight"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
