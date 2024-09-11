import Slider from "../components/commons/Slider";
import { Hero } from "../components/hero section/Hero";
import { AboutFoods } from "./AboutFoods";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Slider />
      <AboutFoods />
    </>
  );
};
