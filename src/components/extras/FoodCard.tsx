import StarIcon from "@mui/icons-material/Star";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const cards = [
  {
    id: 1,
    title: "Spicy Burger",
    offer: "Get a 20% discount on First Order",
    image: "/assets/burger.webp",
    rate: "Rs.149",
    rating: 5,
  },
  {
    id: 2,
    title: "Fries",
    offer: "Get a 20% discount on First Order",
    image: "/assets/fries.webp",
    rate: "Rs.49",
    rating: 4,
  },
  {
    id: 3,
    title: "Combo 1",
    offer: "Get a 25% discount on First Order",
    image: "/assets/combo.webp",
    rate: "Rs.149",
    rating: 4,
  },
  {
    id: 4,
    title: "Combo 2",
    offer: "Get a 50% discount on First Order",
    image: "/assets/combo2.webp",
    rate: "Rs.299",
    rating: 5,
  },
  {
    id: 5,
    title: "Grill Sandwich",
    offer: "Get a 20% discount on First Order",
    image: "/assets/sandwich.webp",
    rate: "Rs.129",
    rating: 5,
  },
  {
    id: 6,
    title: "Pasta",
    offer: "Get a 20% discount on First Order",
    image: "/assets/pasta.webp",
    rate: "Rs.119",
    rating: 4,
  },
  {
    id: 7,
    title: "Cold Drink",
    offer: "Get a 10% discount on First Order",
    image: "/assets/colddrink.webp",
    rate: "Rs.59",
    rating: 4,
  },
  {
    id: 8,
    title: "Pizza",
    offer: "Get a 10% discount on First Order",
    image: "/assets/pizza.webp",
    rate: "Rs.119",
    rating: 5,
  },
];

const renderStars = (rating: number) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < rating) {
      stars.push(<StarIcon key={i} style={{ color: "gold" }} />);
    } else {
      stars.push(<StarOutlineIcon key={i} style={{ color: "gold" }} />);
    }
  }

  return stars;
};

export const FoodCard = () => {
  return (
    <>
      <div className="container mx-auto text-center py-12 lg:py-12 px-4 lg:px-10">
        <div className="w-4/5 mx-auto flex justify-center">
          <h2 className="text-5xl lg:text-6xl font-extrabold italic">
            Our Popular Tasty{" "}
            <span className="text-[--primary-text-color]">Foods</span>
          </h2>
        </div>
        <p className="mt-4 text-lg">
          Have a glance at our best sellers and popular collection of this
          season
        </p>
      </div>
      <div className="card-renderer">
        <ul
          role="list"
          className="container mx-auto pb-10 flex flex-wrap gap-6 items-center justify-center"
        >
          {cards.map((item) => (
            <li
              key={item.id}
              className="w-full lg:mx-0 mx-4 sm:w-[280px] p-5 rounded-2xl bg-white shadow-lg border border-gray-300 hover:-translate-y-3 transition-all"
            >
              <div className="flex justify-center items-center mb-4">
                {item.image ? (
                  <img
                    className="h-36  "
                    src={item.image}
                    alt={item.title}
                  />
                ) : (
                  <div className="w-8 sm:w-10 rounded-md bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center">
                {renderStars(item.rating)}
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
      <div className="flex items-center justify-center container mx-auto mb-2">
        <button className="text-[--third-text-color] bg-[--primary-color] px-4 py-2  rounded-3xl text-lg font-semibold hover:text-[--primary-text-color] hover:bg-white border border-[--primary-color] transition-all active:translate-y-0.5">
          View all Products
        </button>
      </div>
    </>
  );
};
