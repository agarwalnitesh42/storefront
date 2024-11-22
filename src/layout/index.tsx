import { Outlet, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import SideBar from "../components/SideBar";

const AppLayout = () => {

  const navigate  = useNavigate();

  const handleMenuItemClick = (item: string) => {
    navigate(item);
  };

  return (
    <>
      <Header />
      <div className="layoutContainer">
        <SideBar onMenuClick={handleMenuItemClick} />
        <div className="p-4 w-100">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AppLayout;