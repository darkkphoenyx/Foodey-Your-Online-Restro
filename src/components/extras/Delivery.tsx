export const Delivery = () => {
  return (
    <section className="bg-[url(/assets/brush2.webp)] bg-no-repeat bg-cover bg-center py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12  items-center">
        {/* Left Section - Text */}
        <div className="md:col-span-4 text-black text-center lg:text-start">
          <h1 className="text-4xl md:text-6xl font-extrabold italic leading-tight">
            Choose your <br /> favourite food
          </h1>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            sunt nostrum laudantium dolorem reprehenderit delectus?
          </p>
        </div>

        {/* Image Section */}
        <div className="md:col-span-4 flex justify-center">
          <img
            className="h-64 md:h-80 lg:h-96 object-contain"
            src="/assets/delivery-guy.png"
            alt="delivery man"
          />
        </div>

        {/* Right Section - Text */}
              <div className="md:col-span-4 text-black text-center
         lg:text-end">
          <h1 className="text-4xl md:text-6xl font-extrabold italic leading-tight">
            Order Online <br /> and Get Fast <br /> Delivery
          </h1>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            sunt nostrum laudantium dolorem reprehenderit?
          </p>
        </div>
      </div>
    </section>
  );
};
