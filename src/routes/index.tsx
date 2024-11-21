import { Route, Routes } from "react-router-dom"

import AppLayout from "../layout"
import AppHome from "../pages/home"

import BrokerProfile from "../pages/broker/profile"

const AppNavigator = () => {

  return <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<AppHome />} />
      {/* <Route index element={<BrokerProfile />} /> */}
    </Route>
  </Routes>;
}

export default AppNavigator