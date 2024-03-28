import React from "react";

const Card = (props) => {
  return (
    <div class="ml-6 mt-6 inline-flex flex-row mr-auto max-w-sm max-h-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="text-justify p-4 ">{props.children}</div>
    </div>
  );
};
export default Card;
