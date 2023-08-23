import React, { useEffect, useState } from "react";
import airData from "../data/characters/air.json";
import fireData from "../data/characters/fire.json";
import waterData from "../data/characters/water.json";
import aangIntro from "../data/images/korra.png";

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
    if (lowercasedFightingStyle.includes("airbending")) emoji += "🌪️ ";
    if (lowercasedFightingStyle.includes("waterbending")) emoji += "🌊 ";
    if (lowercasedFightingStyle.includes("earthbending")) emoji += "🌍 ";
    if (lowercasedFightingStyle.includes("lavabending")) emoji += "🌋 ";

    return emoji;
  };

  return (
    <div className="bg-[#F2C46F] flex items justify-center flex-col p-6 py-16 lg:p-24 lg:py-24">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
              <div className="card bg-white rounded-md translate-x-2 -translate-y-2 border-2 border-black transition-all">
                <img src={aangIntro} className="w-full"/>
                <div className="p-10">
                  <h2 className="text-2xl lg:text-3xl font-bold p-1">
                    {capitalizeEveryWord(item.Name)}{" "}
                    {getEmoji(item["Fighting styles"])}
                  </h2>
                  <p className="text-md lg:text-base p-1">
                    Status: {item.Died ? "Dead" : "Alive"}
                  </p>
                  <p className="text-md lg:text-base p-1">
                    Gender: {item.Gender}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
}

export default Characters;
