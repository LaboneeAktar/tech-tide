import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="h-20">
        <Navbar></Navbar>
        <h1>Navbar</h1>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
