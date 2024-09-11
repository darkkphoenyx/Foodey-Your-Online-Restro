import Marquee from "react-fast-marquee";

export const FoodGallary = () => {
  const items = [
    { src: "/assets/gallary-burger.webp", name: "Burger" },
    { src: "/assets/gallary-chowmein.webp", name: "Chowmein" },
    { src: "/assets/gallary-pizza.webp", name: "Pizza" },
    { src: "/assets/gallary-meal.webp", name: "Meal" },
    { src: "/assets/gallary-chicken-briyani.webp", name: "Chicken Briyani" },
    { src: "/assets/gallary-ratatouille.webp", name: "Ratatouille" },
  ];
  return (
    <>
      <div className="text-center py-20">
        <div className="mx-auto flex justify-center mb-12">
          <h2 className="text-6xl font-extrabold italic">
            Food <span className="text-[--primary-text-color]">Gallery</span>
          </h2>
        </div>
        <Marquee
          className="h-max overflow-hidden "
          speed={50}
          pauseOnHover={true}
          gradient={false} // Disables gradient for a continuous slider effect
        >
          {items.map((item, index) => (
            <div key={index} className="mx-2 text-center">
              <img
                src={item.src}
                alt={item.name}
                className="h-56 object-contain hover:scale-105"
              />
              <p className="text-xl text-black font-bold mt-2">{item.name}</p>{" "}
              {/* Item name below the image */}
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};
