import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { RenderStar } from "../dynamic renderer/RenderStar";

interface Card {
  id: number;
  title: string;
  offer: string;
  image: string;
  rate: string;
  rating: number;
  restroName: string;
  restroLocation: string;
  details: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Spicy Burger",
    offer: "Get a 20% discount on First Order",
    image: "/assets/burger.webp",
    rate: "Rs. 149",
    rating: 5,
    restroName: "The Great Nepal Restro",
    restroLocation: "Maharajgunj, Kathmandu",
    details:
      "A flavorful burger with a spicy kick, featuring zesty seasonings and hot toppings.",
  },
  {
    id: 2,
    title: "Fries",
    offer: "Get a 20% discount on First Order",
    image: "/assets/fries.webp",
    rate: "Rs. 49",
    rating: 4,
    restroName: "The Great Nepal Restro",
    restroLocation: "Maharajgunj, Kathmandu",
    details:
      "Crispy, golden-brown potato strips, seasoned with salt, perfect as a side dish.",
  },
  {
    id: 3,
    title: "Combo 1",
    offer: "Get a 25% discount on First Order",
    image: "/assets/combo.webp",
    rate: "Rs. 149",
    rating: 4,
    restroName: "The Great Nepal Restro",
    restroLocation: "Maharajgunj, Kathmandu",
    details:
      "Includes a juicy burger, crispy fries, and a refreshing cold drink for a complete meal.",
  },
  {
    id: 4,
    title: "Combo 2",
    offer: "Get a 50% discount on First Order",
    image: "/assets/combo2.webp",
    rate: "Rs. 299",
    rating: 5,
    restroName: "The Great Nepal Restro",
    restroLocation: "Maharajgunj, Kathmandu",
    details:
      "Features a chicken burger, crispy fries, a cold drink, and ketchup for a satisfying meal.",
  },
];
export const FoodCard: React.FC = () => {
  const navigate = useNavigate();

  const handleItemClick = (item: Card) => {
    navigate(`/item-details`, { state: { item } }); // Navigate to the item details page, passing the item data
  };

  return (
    <>
      <div className="container mx-auto text-center py-12 lg:py-12 px-4 lg:px-10">
        <div className="w-4/5 mx-auto flex justify-center">
          <h2
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-5xl lg:text-6xl font-extrabold italic"
          >
            Our Popular Tasty{" "}
            <span className="text-[--primary-text-color]">Foods</span>
          </h2>
        </div>
        <p data-aos="fade-up" data-aos-delay="50" className="mt-4 text-lg">
          Have a glance at our best sellers and popular collection of this
          season
        </p>
      </div>
      <div className="card-renderer">
        <ul
          data-aos="fade-up"
          data-aos-delay="50"
          role="list"
          className="container mx-auto pb-10 flex flex-wrap gap-6 items-center justify-center"
        >
          {cards.map((item) => (
            <li
              key={item.id}
              className="w-full  lg:mx-0 mx-4 sm:w-[280px] p-5 rounded-2xl bg-white shadow-lg border border-gray-300 hover:-translate-y-3 transition-all"
              onClick={() => handleItemClick(item)} // Navigate to item details on click
            >
              <div className="flex justify-center items-center mb-4">
                {item.image ? (
                  <img className="h-36" src={item.image} alt={item.title} />
                ) : (
                  <div className="w-8 sm:w-10 rounded-md bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center">
                {RenderStar(item.rating)}
              </div>
              <div className="details text-center mt-4">
                <h1 className="text-3xl font-extrabold italic">{item.title}</h1>
                <p className="mt-2 text-lg">{item.offer}</p>
                <p className="mt-2 text-2xl font-extrabold text-[--primary-text-color]">
                  {item.rate}
                </p>
              </div>
              <a rel="noopener noreferrer">
                <button className="bg-black text-white mt-4 font-medium text-sm sm:text-base py-2 sm:py-3 w-full rounded-3xl active:translate-y-1 transition-all hover:bg-white hover:text-black border border-black flex justify-center gap-2">
                  <LocalMallIcon fontSize="small"></LocalMallIcon> Add to Cart
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        className="flex items-center justify-center container mx-auto mb-2"
      >
        <Link to={"/menu"}>
          <button className="text-[--third-text-color] bg-[--primary-color] px-4 py-2 rounded-3xl text-lg font-semibold hover:text-[--primary-text-color] hover:bg-white border border-[--primary-color] transition-all active:translate-y-0.5">
            View all Products
          </button>
        </Link>
      </div>
    </>
  );
};
