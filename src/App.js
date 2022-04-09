import './App.css';
import Header from "./components/Header";
import {useEffect, useState} from "react";
import axios from "axios";
import Main from "./components/Main";
import PunkList from "./components/PunkList";

function App() {
    const [punkListData, setPunkListData] = useState([]);
    const [selectedPunk, setSelectedPunk] = useState(0);
    useEffect(() => {
        const getMyNfts = async () => {
            const openSeadata = await axios.get('https://testnets-api.opensea.io/assets?format=json&asset_contract_address=0x5AE17A3ff84b10c047Fe1685502Ce92911ff13b3&order_direction=asc')
            let collections = openSeadata.data.assets
            setPunkListData(collections);
            console.log(openSeadata.data.assets)
        }
        getMyNfts();
    }, []);


    return (
        <div className="app">

            <Header/>
            {
                punkListData.length > 0 && (
                    <><Main punkListData={punkListData} selected={selectedPunk}/> <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/></>)
            }


        </div>
    );
}

export default App;
