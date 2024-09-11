import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { HomePage } from "../pages/HomePage";

export default function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Using requestAnimationFrame to ensure smooth scrolling
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    };

    // Call handleScroll immediately
    handleScroll();

    // Optional: Add a small delay if needed
    const timer = setTimeout(handleScroll, 100);

    return () => clearTimeout(timer);
  }, [location]);

  // List of paths where you want to hide Navbar and Footer
  const noNavbarFooterRoutes = ["/login", "/register"];

  // Check if the current path is in the list
  const hideNavbarFooter = noNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}
