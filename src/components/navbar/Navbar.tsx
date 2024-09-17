import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useState } from "react";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section className="bg-white/85 sticky top-0 z-50">
        <div className="banner border-b border-gray-400">
          <div className="container mx-auto banner flex items-center justify-center md:justify-between py-1 px-4 md:px-10">
            <div className="left-section flex gap-1">
              <QueryBuilderIcon fontSize="small" />
              <p className="flex items-center gap-1 lg:text-base text-sm">
                Mon-Fri: 8am - 11pm, Sat-Sun: 8am - 12pm
              </p>
            </div>
            <div className="right-section hidden md:block">
              <ul className="flex justify-between gap-2 font-medium">
                <li className="hover:text-[--primary-text-color]">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-[--primary-text-color]" : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="border-x border-black px-2 hover:text-[--primary-text-color]">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-[--primary-text-color]" : ""
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="hover:text-[--primary-text-color]">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "text-[--primary-text-color]" : ""
                    }
                  >
                    Login/Register
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav container mx-auto py-3 flex justify-between items-center px-4 md:px-10">
          <div className="logo">
            <NavLink
              to="/"
              className="font-extrabold text-3xl lg:text-4xl text-[--primary-text-color] italic"
            >
              Foodey
            </NavLink>
          </div>

          <div className="nav-elements hidden md:block">
            <ul className="flex gap-20 font-medium justify-between text-lg">
              <li className="hover:text-[--primary-text-color]">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[--primary-text-color]" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-[--primary-text-color]">
                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    isActive ? "text-[--primary-text-color]" : ""
                  }
                >
                  Menu
                </NavLink>
              </li>
              <li className="hover:text-[--primary-text-color]">
                <NavLink
                  to="/order-foods"
                  className={({ isActive }) =>
                    isActive ? "text-[--primary-text-color]" : ""
                  }
                >
                  Order Foods
                </NavLink>
              </li>
              <li className="hover:text-[--primary-text-color]">
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "text-[--primary-text-color]" : ""
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <div className="contact flex gap-8">
              <div className="call flex items-center">
                <img
                  className="h-8 pr-1"
                  src="/assets/phone.svg"
                  alt="call icon"
                />
                <div className="flex flex-col items-center justify-center">
                  <p className="text-sm">Call us for Order</p>
                  <p className="font-bold text-[--accent-color] text-xl">
                    01-4590670
                  </p>
                </div>
              </div>
              <button className="border hover:border-[--primary-color] border-black px-3 rounded-full hover:text-[--primary-color] transition-all active:translate-y-0.5">
                <span>
                  <LocalMallIcon fontSize="small" />
                </span>
              </button>
              <button className="text-[--third-text-color] bg-[--primary-color] px-4 py-2 rounded-3xl text-lg font-semibold hover:text-[--primary-text-color] hover:bg-white border border-[--primary-color] transition-all active:translate-y-0.5">
                Order Online
              </button>
            </div>
          </div>
          <div className="block md:hidden" onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </div>

          {isSidebarOpen && (
            <div className="md:hidden block absolute bg-white/70 top-20 text-black right-0 h-[100vh] w-48 z-50 text-right backdrop-blur-sm transition-all">
              <ul className="flex flex-col gap-4 p-4 text-xl font-medium">
                <li>
                  <NavLink
                    to="/"
                    onClick={toggleSidebar}
                    className={({ isActive }) =>
                      isActive ? "text-[--primary-text-color] font-bold" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    onClick={toggleSidebar}
                    className={({ isActive }) =>
                      isActive ? "text-[--primary-text-color] font-bold" : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu"
                    onClick={toggleSidebar}
                    className={({ isActive }) =>
                      isActive ? "text-[--primary-text-color] font-bold" : ""
                    }
                  >
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/order-foods"
                    onClick={toggleSidebar}
                    className={({ isActive }) =>
                      isActive ? "text-[--primary-text-color] font-bold" : ""
                    }
                  >
                    Order Foods
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    onClick={toggleSidebar}
                    className={({ isActive }) =>
                      isActive ? "text-[--primary-text-color] font-bold" : ""
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    onClick={toggleSidebar}
                    className={({ isActive }) =>
                      isActive ? "text-[--primary-text-color] font-bold" : ""
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    onClick={toggleSidebar}
                    className={({ isActive }) =>
                      isActive ? "text-[--primary-text-color] font-bold" : ""
                    }
                  >
                    Login/Register
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
