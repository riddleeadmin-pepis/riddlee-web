import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import Categories from "../components/Categories";
import PromotionBanner from "../components/PromotionBanner";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Categories />
      <PromotionBanner />
      <FeaturedProducts />
      <Testimonials />
    </>
  );
}