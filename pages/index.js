import Head from "next/head";
import BestSeller from "../components/BestSeller";
import BlogSection from "../components/BlogSection";
import Catagory from "../components/Catagory";
import DealComponent from "../components/DealComponent";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import HappyClientSection from "../components/HappyClientSection";
import HeroSection from "../components/HeroSection";
import LogoSection from "../components/LogoSection";
import NavBar from "../components/NavBar";
import NewArrivals from "../components/NewArrivals";
import OfferSection from "../components/OfferSection";
import SubscribeComponent from "../components/SubscribeComponent";
import WeOffer from "../components/WeOffer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ento.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HeroSection />
      <Catagory />
      <NewArrivals />
      <WeOffer />
      <OfferSection />
      <BestSeller />
      <LogoSection />
      <DealComponent />
      <HappyClientSection />
      <BlogSection />
      <SubscribeComponent/>
      <FooterBanner/>
      <Footer/>
    </div>
  );
}
