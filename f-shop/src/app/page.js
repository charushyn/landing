import Image from "next/image";
import Header from "./Components/Header";
import Greeting from "./Components/Greeting";
import InfinityString from "./Components/InfiniteString";
import SecondBlock from "./Components/SecondBlock";
import BlockWithInfo from "./Components/BlocksWithInfo";
import BlockWithVideo from "./Components/BlockWithVideo";
import FAQ from "./Components/FAQ";
import StepsOrder from "./Components/StepsOfOrder";
import Footer from "./Components/Footer";
import Products from "./Components/Products";

export default function Home() {
  return (
    <div class=' bg-gray-100'>
      <Header></Header>
      <Greeting></Greeting>
      <InfinityString></InfinityString>
      <SecondBlock></SecondBlock>
      <BlockWithInfo></BlockWithInfo>
      <BlockWithVideo></BlockWithVideo>
      <FAQ></FAQ>
      <StepsOrder></StepsOrder>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}
