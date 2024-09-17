const reviews = [
  {
    id: 1,
    name: "Ram Charan",
    type: "VIP",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium quisquam nobis, repellendus reprehenderit iste eaque. Accusantium pariatur adipisci beatae.",
    ratingStars: 5,
    food: "/assets/pasta.webp",
  },
  {
    id: 2,
    name: "Allu Arjun",
    type: "VIP",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium quisquam nobis, repellendus reprehenderit iste eaque. Accusantium pariatur adipisci beatae.",
    ratingStars: 5,
    food: "/assets/pizza.webp",
  },
];

export default function Testimonials() {
  return (
    <div className="py-40 bg-white bg-[url(/assets/brush2.webp)] bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto text-center">
        <div className="w-full mx-auto flex flex-col justify-center">
          <h2 className="text-5xl lg:text-6xl font-extrabold italic">
            Our Customer{" "}
            <span className="text-[--primary-text-color]">Feedbacks</span>
          </h2>
          <p className="mt-4 text-lg w-full sm:w-4/5 mx-auto pb-8 px-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
            maxime adipisci? Aut quos quibusdam saepe iste. Molestiae eos
            dolorem velit.
          </p>
        </div>
      </div>
      <ul className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
        {reviews.map((item) => (
          <li
            key={item.id}
            className="flex justify-center w-full sm:w-auto hover:-skew-y-3 hover:skew-x-3 transition-all cursor-pointer"
          >
            <div className="review border rounded-2xl border-gray-200 p-4 shadow-lg bg-white px-6 sm:px-10 w-full sm:w-[500px] mx-4">
              <div className="rating flex items-center text-gray-500 mb-4">
                {Array.from({ length: item.ratingStars }, (_, index) => (
                  <img
                    key={index}
                    className="h-5 sm:h-6"
                    src="/assets/star.webp"
                    alt="rating"
                  />
                ))}
              </div>
              <div className="note mb-5">
                <p className="text-sm sm:text-base font-medium">
                  {item.message}
                </p>
              </div>
              <div className="identity flex items-center">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold">{item.name}</h1>
                  <p className="text-gray-500">{item.type}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
