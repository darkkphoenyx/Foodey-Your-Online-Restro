// import BottomBanner from "../banner/BottomBanner";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
export const Footer = () => {
  const listStyle = "cursor-pointer hover:text-[#ff0000]";
  return (
    <>
      <div className="pt-40 bg-white bg-[url(/assets/brush2.webp)] bg-no-repeat bg-cover bg-center">
        <div className="flex gap-8 items-center mb-10">
          <h1 className="text-[40px] font-extrabold text-[#ff0000] border-r pr-16 mr-8 cursor-pointer">
            FOODIE
          </h1>
          <div className="">
            <h3 className="text-[28px] font-bold ">Subscription News</h3>
            <p className="text-[14px]">Subscribe to the weekly newslatter.</p>
          </div>
          <input
            className="px-6 py-3 outline-none w-[500px] rounded-full text-[16px]"
            type="email"
            placeholder="Enter Email Address"
          />
          <button className="bg-black text-white rounded-full px-8 py-3">
            Subscribe
          </button>
        </div>
        <hr />
        <div className="grid grid-cols-4 gap-10 mt-10">
          <div>
            <p className="mb-3 text-[#3c3c3c]">
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
          <div>
            <h3 className="mb-3 font-bold text-[18px]">Quick Links</h3>
            <ul className="flex flex-col gap-1 text-[#3c3c3c]">
              <li className={listStyle}>About Us</li>
              <li className={listStyle}>Menu</li>
              <li className={listStyle}>Testimonial</li>
              <li className={listStyle}>Blog</li>
              <li className={listStyle}>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-[18px]">Our Menu</h3>
            <ul className="flex flex-col gap-1 text-[#3c3c3c]">
              <li className={listStyle}>Burgers</li>
              <li className={listStyle}>Desserts</li>
              <li className={listStyle}>Pizza</li>
              <li className={listStyle}>Pasta</li>
              <li className={listStyle}>Cold Drinks</li>
            </ul>
          </div>
          <div>
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
