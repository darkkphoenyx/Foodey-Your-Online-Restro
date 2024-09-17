import Marquee from "react-fast-marquee";

export const FoodGallary = () => {
  const items = [
    { src: "/assets/gallery-burger.webp", name: "Spicy Burger" },
    { src: "/assets/gallery-chowmein.webp", name: "Chowmein" },
    { src: "/assets/gallery-drumsticks.webp", name: "Drumsticks" },
    { src: "/assets/gallery-pizza.webp", name: "Cheese Crust Pizza" },
    { src: "/assets/gallery-chickenTandoori.webp", name: "Chicken Tandoori" },
    { src: "/assets/gallery-chicken-briyani.webp", name: "Chicken Briyani" },
    { src: "/assets/gallery-ratatouille.webp", name: "Ratatouille" },
    {
      src: "/assets/gallery-chickenWings.webp",
      name: "Honey Dipped Chicken Wings",
    },
  ];
  return (
    <>
      <div className="text-center py-20">
        <div className="mx-auto flex justify-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-extrabold italic">
            Food <span className="text-[--primary-text-color]">Gallery</span>
          </h2>
        </div>
        <Marquee
          className="h-max overflow-hidden "
          speed={50}
          pauseOnHover={true}
          gradient={false}
        >
          {items.map((item, index) => (
            <div key={index} className="mx-2 text-center">
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-56 lg:w-80 h-auto object-cover hover:scale-110 transition-all"
                />
              </div>
              <p className="text-sm lg:text-xl text-black font-bold mt-2">{item.name}</p>{" "}
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};
