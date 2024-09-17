import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { HomePage } from "../pages/HomePage";
import { Menu } from "../pages/Menu";
import ItemDetails from "../components/dynamic renderer/ItemDetails";

export default function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    };

    handleScroll();

    const timer = setTimeout(handleScroll, 100);

    return () => clearTimeout(timer);
  }, [location]);

  const noNavbarFooterRoutes = ["/login"];

  const hideNavbarFooter = noNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/item-details" element={<ItemDetails />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}
