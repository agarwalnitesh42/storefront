import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import SideBar from "../components/SideBar";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="layoutContainer">
        <SideBar />
        <div className="p-4 w-100">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AppLayout;