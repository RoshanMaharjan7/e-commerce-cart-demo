import Header from "@/components/component/Header";
import Features from "@/pages/home/Features";
import Banner from "@/pages/home/Banner";
import FeaturedProducts from "@/pages/home/FeaturedProducts";
import SecondBanner from "@/pages/home/SecondBanner";
import TopRating from "@/pages/home/TopRating";
import Newsletter from "@/pages/home/Newsletter";
import Footer from "@/components/component/Footer";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Highlights */}
      <Features />

      {/* Hero Item */}
      <Banner />

      {/* Two Items */}
      <FeaturedProducts />

      <SecondBanner/>

      <TopRating/>

      <Newsletter/>

      <Footer/>
    </>
  );
}
