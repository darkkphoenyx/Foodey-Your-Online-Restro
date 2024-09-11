// import Marquee from "react-fast-marquee";

// export default function ImageSlider() {
//   const images = [
//     "/assets/burger2.png",
//     "/assets/fries.png",
//     "/assets/sandwich.png",
//     "/assets/colddrink.png",
//     "/assets/pasta.png",
//     "/assets/combo.png",
//     "/assets/pizza.png",
//   ];

//   return (
//     <div className="bg-[url(/assets/brush2.png)] bg-no-repeat bg-cover bg-center text-white sm:py-12 py-6">
//       <Marquee
//         className="h-max overflow-hidden gap-8"
//         speed={50}
//         pauseOnHover={true}
//         gradient={false} // Disables gradient for a continuous slider effect
//       >
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`Slide ${index + 1}`}
//             className="mx-4 h-40 w-auto object-contain" // Adjust image sizes
//           />
//         ))}
//       </Marquee>
//     </div>
//   );
// }

import Marquee from "react-fast-marquee";

export default function ImageSlider() {
  const items = [
    { src: "/assets/burger2.png", name: "Burger" },
    { src: "/assets/fries.png", name: "Fries" },
    { src: "/assets/sandwich.png", name: "Sandwich" },
    { src: "/assets/colddrink.png", name: "Cold Drink" },
    { src: "/assets/pasta.png", name: "Pasta" },
    { src: "/assets/combo.png", name: "Combo" },
    { src: "/assets/pizza.png", name: "Pizza" },
  ];

  return (
    <div className="bg-[url(/assets/brush2.png)] bg-no-repeat bg-cover bg-center text-white py-8">
      {/* <img className="abso" src="/assets/brush2.png" alt="brush png" /> */}
      <Marquee
        className="h-max overflow-hidden gap-4"
        speed={50}
        pauseOnHover={true}
        gradient={false} // Disables gradient for a continuous slider effect
      >
        {items.map((item, index) => (
          <div key={index} className="mx-4 text-center">
            <img
              src={item.src}
              alt={item.name}
              className="h-40 w-auto object-contain hover:scale-110"
            />
            <p className="text-xl text-black font-bold mt-2">{item.name}</p>{" "}
            {/* Item name below the image */}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
