import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const AboutFoods = () => {
  return (
    <>
      <section>
        <div className="py-12 container mx-auto grid grid-cols-12 items-center overflow-hidden relative">
          <div className="col-span-12 md:col-span-6 items-center flex justify-center relative">
            <img className="z-10" src="/assets/combo2.png" alt="hero picture" />
            <img
              className="absolute overflow-hidden top-14"
              src="/assets/brush.png"
              alt="hero background"
            />
          </div>
          <div className="col-span-12 md:col-span-6 w-full z-10">
            <h1 className="text-7xl font-extrabold italic">
              About <span className="text-[--primary-text-color]">Foodie</span>
            </h1>
            <p className="text-lg mt-4 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem, cumque id! Accusantium perferendis laborum error
              illum? Aliquid doloribus sapiente quidem atque a aut, culpa eos
              cupiditate?
              <br />
              <br />
              Id fugiat iure mollitia? consectetur adipisicing elit. Esse
              aliquid quo autem. Impedit, quod inventore. Lorem ipsum dolor sit
              amet,
            </p>
            <ul>
              <li className="flex items-center gap-2 pb-4">
                <CheckCircleIcon style={{ color: "red" }}></CheckCircleIcon>
                Delicious & Healthy Foods
              </li>
              <li className="flex items-center gap-2 pb-4">
                <CheckCircleIcon style={{ color: "red" }}></CheckCircleIcon>
                Best Price & Offers
              </li>
              <li className="flex items-center gap-2 pb-4">
                <CheckCircleIcon style={{ color: "red" }}></CheckCircleIcon>
                Made By Fresh Ingredients
              </li>
            </ul>
            <button className="mt-4 text-[--black] bg-[--accent-color] px-4 py-2 rounded-3xl text-lg font-medium hover:text-[--accent-color] hover:bg-white border border-[--accent-color] transition-all active:translate-y-0.5 mr-4">
              Order Now
            </button>
            <button className="text-[--black] bg-[--white] px-4 py-2 rounded-3xl text-lg font-medium hover:text-white hover:bg-black border border-[--black] transition-all active:translate-y-0.5">
              Read More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
