export const Hero = () => {
  return (
    <section className="hero-section h-[84vh] overflow-hidden relative">
      <div className="corrainder-and-chilly-leafs">
        <img
          className="h-24 absolute -left-20"
          src="/assets/leaf.webp"
          alt="leaf photo"
        />
      </div>
      <div>
        <img
          className="h-56 absolute -left-8 top-72"
          src="/assets/chilly.webp"
          alt="chilly photo"
        />
      </div>
      <div>
        <img
          className="h-56 absolute -right-16 top-64"
          src="/assets/chilly2.webp"
          alt="chilly photo"
        />
      </div>
      <div className="container mx-auto grid grid-cols-12 items-center overflow-hidden relative px-10 py-8">
        <div className="col-span-12 md:col-span-6 w-full z-10">
          <h1 className="text-7xl font-extrabold italic">
            Welcome to <br />
            <span className="text-[--primary-text-color]">Foodie</span>
          </h1>
          <img
            className="absolute h-6 top-44 -z-10"
            src="/assets/brush3.webp"
            alt="brush stroke"
          />
          <p className="text-lg mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            deleniti earum incidunt obcaecati, libero dolorum tenetur quod
            cupiditate soluta numquam.
          </p>
          <button className="mt-8 text-[--black] bg-[--accent-color] px-4 py-2 rounded-3xl text-lg font-bold hover:text-[--accent-color] hover:bg-white border border-[--accent-color] transition-all active:translate-y-0.5 mr-4">
            Order Now
          </button>
          <button className="text-[--black] bg-[--white] px-4 py-2 rounded-3xl text-lg font-bold hover:text-white hover:bg-black border border-[--black] transition-all active:translate-y-0.5">
            Book a Title
          </button>
        </div>
        <div className="col-span-12 md:col-span-6 items-center flex justify-center relative">
          <img className="z-10" src="/assets/burger.webp" alt="hero picture" />
          <img
            className="absolute overflow-hidden"
            src="/assets/brush.webp"
            alt="hero background"
          />
        </div>
      </div>
    </section>
  );
};
