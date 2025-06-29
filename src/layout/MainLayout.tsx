import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const MainLayout = () => {
  return (
    <div>
      <h1>MainLayout</h1>
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
