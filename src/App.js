import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import axios from "axios";
import Punklist from "./components/Punklist";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [seletedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xFD48646F157B732c0cbD8730a76e40442442e2eB&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} seletedPunk={seletedPunk} />
          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
