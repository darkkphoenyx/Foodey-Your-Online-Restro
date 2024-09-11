import { Delivery } from "../components/extras/Delivery";
import { FoodCard } from "../components/extras/FoodCard";
import Slider from "../components/extras/Slider";
import { Hero } from "../components/hero section/Hero";
import { AboutFoods } from "./AboutFoods";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Slider />
      <AboutFoods />
      <Delivery />
      <FoodCard />
    </>
  );
};
