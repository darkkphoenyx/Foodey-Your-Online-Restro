import Marquee from "react-fast-marquee";

export default function ImageSlider() {
  const items = [
    { src: "/assets/burger2.webp", name: "Burger" },
    { src: "/assets/fries.webp", name: "Fries" },
    { src: "/assets/chowmein.webp", name: "Chowmein" },
    { src: "/assets/sandwich.webp", name: "Sandwich" },
    { src: "/assets/butterChicken.webp", name: "Butter Chicken" },
    { src: "/assets/colddrink.webp", name: "Cold Drink" },
    { src: "/assets/pasta.webp", name: "Pasta" },
    { src: "/assets/combo.webp", name: "Combo" },
    { src: "/assets/pizza.webp", name: "Pizza" },
    { src: "/assets/noodles.webp", name: "Noodles" },
  ];

  return (
    <section className="bg-[url(/assets/brush2.webp)] bg-no-repeat bg-cover bg-center text-white py-8">
      <Marquee
        className="h-max overflow-hidden gap-4"
        speed={50}
        pauseOnHover={true}
        gradient={false} // Disables gradient for a continuous slider effect
      >
        {items.map((item, index) => (
          <div key={index} className="mx-8 text-center">
            <img
              src={item.src}
              alt={item.name}
              className="h-32 w-auto object-contain hover:scale-110 transition-all"
            />
            <p className="text-xl text-black font-bold mt-2">{item.name}</p>{" "}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
