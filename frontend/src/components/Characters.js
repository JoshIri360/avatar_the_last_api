import React, { useEffect, useState } from "react";
import airData from "../data/characters/air.json";
import fireData from "../data/characters/fire.json";
import waterData from "../data/characters/water.json";

function Characters() {
  const [data, setData] = useState([]);
  const [loadCount, setLoadCount] = useState(6);

  useEffect(() => {
    let combinedData = [...airData, ...fireData, ...waterData];
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
    <div className="bg-[#F2C46F] flex items justify-center flex-col p-24">
      <div className="grid gap-10 grid-cols-3">
        {data
          .filter(
            (item) =>
              item["Fighting styles"] !== "" &&
              item.Name !== "" &&
              item.Name.length < 20
          )
          .slice(0, loadCount)
          .map((item, index) => (
            <div className="rounded-md bg-black" key={index}>
              <div className="card bg-white rounded-md p-6 translate-x-2 -translate-y-2 border-2 border-black hover:-translate-y-3 hover:translate-x-2 active:translate-x-1 active:translate-y-1 transition-all">
                <h2 className="text-3xl font-bold p-2">
                  {capitalizeEveryWord(item.Name)}{" "}
                  {getEmoji(item["Fighting styles"])}
                </h2>
                <p className="p-2">Status: {item.Died ? "Dead" : "Alive"}</p>
                <p className="p-2">Gender: {item.Gender}</p>
              </div>
            </div>
          ))}
      </div>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
}

export default Characters;
