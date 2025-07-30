import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="h-20">
        <Navbar></Navbar>
        <h1>Navbar</h1>
      </div>

      <div className="min-h-[calc(100vh-133px)]">
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
