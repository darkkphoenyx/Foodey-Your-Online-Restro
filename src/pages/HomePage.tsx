import { Delivery } from "../components/extras/Delivery";
import { FoodCard } from "../components/extras/FoodCard";
import { FoodGallary } from "../components/extras/FoodGallary";
import { FoodNews } from "../components/extras/FoodNews";
import Slider from "../components/extras/Slider";
import { Hero } from "../components/hero section/Hero";
import Testimonials from "../components/testimonials/Testimonials";
import { AboutFoods } from "./AboutFoods";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Slider />
      <AboutFoods />
      <Delivery />
      <FoodCard />
      <Testimonials />
      <FoodNews />
      <FoodGallary />
    </>
  );
};
