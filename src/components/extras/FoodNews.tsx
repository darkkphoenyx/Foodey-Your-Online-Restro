const cards = [
  {
    id: 1,
    title: "Spicy Burger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ducimus.",
    image: "/assets/gallary-burger.webp",
  },
  {
    id: 2,
    title: "Chowmein",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ducimus.",
    image: "/assets/gallary-chowmein.webp",
  },
  {
    id: 3,
    title: "Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ducimus.",
    image: "/assets/gallary-pizza.webp",
  },
];

export const FoodNews = () => {
  return (
    <>
      <div className="container mx-auto text-center py-12">
        <div className="mx-auto flex justify-center">
          <h2 className="text-6xl font-extrabold italic">
            Our Latest Food{" "}
            <span className="text-[--primary-text-color]">News</span>
          </h2>
        </div>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          consequuntur repudiandae quasi vero odit incidunt?
        </p>
      </div>
      <div className="card-renderer">
        <ul
          role="list"
          className="container w-full mx-auto py-4 flex flex-wrap gap-6 items-center justify-center"
        >
          {cards.map((item) => (
            <li
              key={item.id}
              className="w-[385px] rounded-2xl pb-4  shadow-lg border border-gray-300 hover:-translate-y-3 transition-all"
            >
              <img className="rounded-t-2xl" src={item.image} alt="photo" />
              <div className="details mt-4 pl-4">
                <h1 className="text-2xl  font-extrabold italic">
                  {item.title}
                </h1>
                <p className="font-medium mt-2 mb-4 ">{item.description}</p>
              </div>
              <a
                href="#"
                className="pl-4 underline text-gray-400 hover:text-[--primary-text-color] font-bold"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
