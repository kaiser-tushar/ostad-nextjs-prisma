import React from "react";
import { useState } from "react";

type Props = {};

export default function Content({}: Props) {
  const [text, setText] = useState();
  const handleButtonClick = () => {
    setText(document.getElementById("textarea_input").value);
  };
  return (
    <div className="container mx-auto mt-4 flex-grow">
      <textarea
        id="textarea_input"
        className="w-full h-32 p-2 border border-gray-300 rounded"
        placeholder="Enter some text..."
        value={text}
      ></textarea>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded"
        onClick={handleButtonClick}
      >
        Update Text
      </button>
      {text && <p className="mt-4">Entered text: <b> {text} </b></p>}
    </div>
  );
}
