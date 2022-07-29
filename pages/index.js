import Head from "next/head";
import Catagory from "../components/Catagory";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import NewArrivals from "../components/NewArrivals";
import WeOffer from "../components/WeOffer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ento.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <NavBar/>
     <HeroSection/>
     <Catagory/>
     <NewArrivals/>
     <WeOffer/>
    </div>
  );
}
