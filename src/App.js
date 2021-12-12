import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import "./App.css";
import CollectionCard from "./components/CollectionCard";
import axios from 'axios';
import Punklist from "./components/Punklist";


function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
     const getMyNfts = async () => {
       const openseaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xFD48646F157B732c0cbD8730a76e40442442e2eB&order_direction=asc')
       console.log(openseaData.data.assets)
        setPunkListData(openseaData.data.assets)
     }
     return getMyNfts()
  }, [])

  return (
    <div className="app">
      <Header />
      
      <Punklist punkListData={punkListData}/>

    </div>
  );
}

export default App;
