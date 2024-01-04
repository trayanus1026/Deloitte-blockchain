import { Button,Row,Col } from 'antd';
import {useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import axios from 'axios';
import '../../utils/translate.js';
import Nav from "../component/Nav"
import PairCardButton from "../component/PairCardButton";
import Main from "../views/Main";
import MarketTrend from "../views/MarketTrend";
import TouchCard from"../views/TouchCard";
import Mark from "../views/Mark";
import Footer from "../component/Footer";
import Advertisment from "../views/Advertisment";
import Step from "../views/Step";
import Roadmap from "../views/Roadmap";
import {SERVER_URL} from "../../constants/env";
const pair=[
    {name:"BTC",percent:3.19763724,price:57832.47921786725},
    {name:"BTC",percent:3.19763724,price:57832.47921786725},
    {name:"BTC",percent:3.19763724,price:57832.47921786725},
    {name:"BTC",percent:3.19763724,price:57832.47921786725},
    {name:"BTC",percent:3.19763724,price:57832.47921786725},
    {name:"BTC",percent:3.19763724,price:57832.47921786725},
    
  ]
function Home() {

  const {t,i18n} = useTranslation();
  const [coinData,setCoinData] = useState(pair);
  
  const stepData = [
    {picUrl:"/assets/img/step1.png",step:t("Step1"),subtitle:t("Get Started")},
    {picUrl:"/assets/img/step2.png",step:t("Step2"),subtitle:t("Confirmation")},
    {picUrl:"/assets/img/step3.png",step:t("Step3"),subtitle:t("Identify Verification")},
    {picUrl:"/assets/img/step4.png",step:t("Step4"),subtitle:t("Buy Cryptocurrency")},
    {picUrl:"/assets/img/step5.png",step:t("Step5"),subtitle:t("Sell Cryptocurrency")},
    {picUrl:"/assets/img/step6.png",step:t("Step6"),subtitle:t("Send and Receive")},
  ]
  const fetchData = async ()=>{
     try {
            axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true')
              .then((response)=>{
                if(response.data.ethereum){
                  let data = response.data.ethereum;
                  console.log(data);
                  let initCoinData = [];
                  for(var i=0;i<6;i++)
                    initCoinData.push({
                      name:"ETH",
                      price:data.usd,
                      percent:data.usd_24h_change
                    });

                  setCoinData(initCoinData);
                }
                else{

                }
            })
        } catch (error) {
            console.log(error);
        }
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (

    <div>
      <Main coinData={coinData}/>
      <Mark />
      <Advertisment />
      <Step />
      <Roadmap />
      <Footer />
      
    </div>
  );
}

export default Home;
