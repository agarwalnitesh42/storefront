import { Route, Routes } from "react-router-dom"

import AppLayout from "../layout";
import AppHome from "../pages/home";
import Search from "../pages/search";
import Report from "../pages/report";
import Map from "../pages/map";
import BrokerProfile from "../pages/broker/profile"

const AppNavigator = () => {

  return <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<AppHome />} />
      <Route path="brokerProfile" element={<BrokerProfile />} />
      <Route path="search" element={<Search />} />
      <Route path="map" element={<Map />} />
      <Route path="report" element={<Report />} />
    </Route>
  </Routes>;
}

export default AppNavigator