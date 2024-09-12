// import BottomBanner from "../banner/BottomBanner";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "react-router-dom";
export const Footer = () => {
  const listStyle = "cursor-pointer hover:text-[#ff0000]";
  return (
    <>
      <div className="pt-40 bg-white bg-[url(/assets/brush4.webp)] bg-no-repeat bg-cover bg-center">
        <div className="upper-section container mx-auto px-10 flex flex-wrap items-center justify-between mb-10">
          <div className="logo">
            <Link
              to={"/"}
              className="font-extrabold text-4xl text-[--primary-text-color] italic"
            >
              Foodey
            </Link>
          </div>
          <div className="subsciption details">
            <h3 className="text-3xl font-bold ">Subscription News</h3>
            <p className="">Subscribe to the weekly newslatter.</p>
          </div>
          <div className="email-section flex gap-4 flex-wrap">
            <input
              className="px-6 py-3 outline-none w-[500px] rounded-full text-[16px]"
              type="email"
              placeholder="Enter Email Address"
            />
            <button className="text-[--third-text-color] bg-black px-4 py-2  rounded-3xl text-lg font-semibold hover:text-black hover:bg-transparent border border-black transition-all active:translate-y-0.5">
              Subscribe
            </button>
          </div>
        </div>
        <hr />
        <div className="flex justify-center gap-16 flex-wrap mt-12 container mx-auto px-10 pb-12">
          <div className=" w-[250px]">
            <p className="mb-4 text-[#3c3c3c]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus corrupti libero velit?
            </p>
            <h3 className="text-[18px] font-bold">Book A Table</h3>
            <p className="mb-3 text-[#ff0000] font-bold cursor-pointer">
              +1-555-157-5651
            </p>
            <h3 className="text-[18px] font-bold">Opening Hours</h3>
            <p className="text-[#ff0000] font-bold">08:00 AM - 12:00 PM</p>
          </div>
          <div className=" w-[250px]">
            <h3 className="mb-3 font-bold text-[18px]">Quick Links</h3>
            <ul className="flex flex-col gap-1 text-[#3c3c3c]">
              <li className={listStyle}>About Us</li>
              <li className={listStyle}>Menu</li>
              <li className={listStyle}>Testimonial</li>
              <li className={listStyle}>Blog</li>
              <li className={listStyle}>Contact Us</li>
            </ul>
          </div>
          <div className=" w-[250px]">
            <h3 className="mb-3 font-bold text-[18px]">Our Menu</h3>
            <ul className="flex flex-col gap-1 text-[#3c3c3c]">
              <li className={listStyle}>Burgers</li>
              <li className={listStyle}>Desserts</li>
              <li className={listStyle}>Pizza</li>
              <li className={listStyle}>Pasta</li>
              <li className={listStyle}>Cold Drinks</li>
            </ul>
          </div>
          <div className=" w-[250px]">
            <h3 className="mb-3 font-bold text-[18px]">Get In Touch</h3>
            <ul className="flex flex-col gap-3 text-[#3c3c3c]">
              <li className="cursor-pointer gap-3 flex hover:text-[#ff0000]">
                <LocationOnOutlinedIcon
                  style={{
                    borderRadius: "50%",
                    color: "white",
                    padding: "3px",
                    background: "#ff0000",
                  }}
                />
                Durga Mandir, Kapan-12, Kathmandu
              </li>
              <li className="cursor-pointer gap-3 flex hover:text-[#ff0000] mb-2">
                <CallOutlinedIcon
                  style={{
                    borderRadius: "50%",
                    color: "white",
                    padding: "3px",
                    background: "#ff0000",
                  }}
                />
                +1-555-157-5651
              </li>
              <li className="cursor-pointer gap-3 flex hover:text-[#ff0000]">
                <EmailOutlinedIcon
                  style={{
                    borderRadius: "50%",
                    color: "white",
                    padding: "3px",
                    background: "#ff0000",
                  }}
                />
                foodienepal@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
