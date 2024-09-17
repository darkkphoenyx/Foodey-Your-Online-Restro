import React from "react";
import { useLocation } from "react-router-dom";
import { RenderStar } from "./RenderStar";
import { Counter } from "../extras/Counter";

const ItemDetails: React.FC = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <div className="container h-auto lg:h-[75vh] mx-auto lg:mt-4 grid grid-cols-1 md:grid-cols-2 py-12 px-4 lg:px-10 gap-4">
      <div className="photo border border-gray-300 rounded-lg shadow-2xl w-full flex items-center justify-center">
        <img
          className="h-56 lg:h-80 object-cover"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="details w-full pt-2 md:pt-0 flex flex-col gap-4 justify-center">
        <h2 className="text-2xl lg:text-4xl font-bold italic">{item.title}</h2>
        <p className="text-gray-600 text-sm lg:text-base">{item.details}</p>
        <div className="flex">{RenderStar(item.rating)}</div>
        <p className="text-base lg:text-lg bg-red-500 rounded-sm py-1 drop-shadow-xl">
          {item.offer}
        </p>
        <p className="text-2xl lg:text-3xl text-[--primary-text-color] font-extrabold py-4 border-t border-b border-gray-200">
          {item.rate}
        </p>
        <div className="quantity flex gap-8 items-center">
          <p className="text-gray-600">Quantity:</p>
          <Counter />
        </div>
        <div className="buttons flex justify-between mt-8 md:mt-0 lg:flex-nowrap flex-wrap gap-y-4 gap-x-2">
          <button className="w-full text-[--black] bg-[--accent-color] px-4 py-2 rounded-3xl text-lg font-semibold hover:text-[--accent-color] hover:bg-white border border-[--accent-color] transition-all active:translate-y-0.5">
            Buy Now
          </button>
          <button className="w-full text-[--black] bg-[--white] px-4 py-2 rounded-3xl text-lg font-semibold hover:text-white hover:bg-black border border-[--black] transition-all active:translate-y-0.5">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
