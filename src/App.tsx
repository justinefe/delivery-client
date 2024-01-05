import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import axiosInstance from "./helpers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setUser } from "./store/userAction";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/Homepage";
import "./styles/index.scss";
import Layout from "./Layout";
import Edit from "./pages/Edit";

function App() {
  let token = Cookies.get("accessToken");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      makeCall();
    }
  }, []);
  const makeCall = async () => {
    const result = await axiosInstance({
      url: `${import.meta.env.VITE_APP_BASE_URL}/user`,
      method: "GET",
    });
    if (result?.data?.status == 200) {
      dispatch(setUser(result?.data?.user));
    }
  };
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/" Component={HomePage} />
          <Route path="/edit" Component={Edit} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
