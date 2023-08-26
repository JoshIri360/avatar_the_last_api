import React from "react";

function Footer() {
  return (
    <div className="bg-gray-900 py-10 flex text-center justify-center items-center">
      <div className="text-gray-500 uppercase font-bold flex flex-col text-center justify-center items-center gap-2">
        <div className="flex gap-7">
          <p>Characters: 800</p>
        </div>
        <div className="flex gap-7 text-sm">
          <p>Air: 800</p>
          <p>Water: 800</p>
          <p>Fire: 800</p>
          <p>Earth: 800</p>
        </div>
        <div className="font-normal text-sm">❮❯ by Aideloje Joshua and Shodunke Joseph</div>
      </div>
    </div>
  );
}

export default Footer;
