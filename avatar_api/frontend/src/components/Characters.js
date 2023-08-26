import React, { useEffect, useState } from "react";
import airData from "../data/characters/air.json";
import fireData from "../data/characters/fire.json";
import waterData from "../data/characters/water.json";
import earthData from "../data/characters/earth.json";
import aangIntro from "../data/images/aangIntro.png";
import "./Characters.css";

function Characters() {
  const [data, setData] = useState([]);
  const [loadCount, setLoadCount] = useState(6);

  useEffect(() => {
    let combinedData = [...airData, ...fireData, ...waterData, ...earthData];
    combinedData.sort(() => Math.random() - 0.5);
    setData(combinedData);
  }, []);

  const handleLoadMore = () => {
    setLoadCount(loadCount + 3);
  };

  const capitalizeEveryWord = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  const getEmoji = (fightingStyle) => {
    let emoji = "";
    const lowercasedFightingStyle = fightingStyle.toLowerCase();

    if (lowercasedFightingStyle.includes("firebending")) emoji += "🔥 ";
    if (lowercasedFightingStyle.includes("airbending")) emoji += "💨 ";
    if (lowercasedFightingStyle.includes("waterbending")) emoji += "💧 ";
    if (lowercasedFightingStyle.includes("earthbending")) emoji += "⛰ ";
    if (lowercasedFightingStyle.includes("lavabending")) emoji += "🌋 ";

    return emoji;
  };

  return (
    <div className="bg-[#F2C46F] flex items justify-center flex-col p-6 py-16 lg:p-24 lg:py-24">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 chars">
        {data
          .filter(
            (item) =>
              item["Fighting styles"] !== "" &&
              item.name !== "" &&
              item["Image-src"] !== ""
          )
          .slice(0, loadCount)
          .map((item, index) => (
            <div className="rounded-md bg-gray-800" key={index}>
              <div className="card h-full bg-white rounded-md translate-x-2 -translate-y-2 border-2 border-black transition-all">
                <img src={item["Image-src"]} className="w-full rounded-t-md h-60 object-cover" />
                <div className="p-10">
                  <h2 className="text-2xl lg:text-3xl font-bold p-1">
                    {capitalizeEveryWord(item.name)}{" "}
                    {getEmoji(item["Fighting styles"])}
                  </h2>
                  <p className="p-2">Status: {item.Died ? "Dead" : "Alive"}</p>
                  <p className="p-2">Gender: {item.Gender}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center p-2 pt-6">
        <div className="rounded-md bg-black">
          <button
            onClick={handleLoadMore}
            className="p-2 text-lg font-bold bg-white rounded-md border-2 border-black translate-x-1 -translate-y-1 hover:-translate-y-2 active:translate-y-1  duration-300">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Characters;
