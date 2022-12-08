import React, { useContext, useEffect } from "react";
import IntroPage from "./Components/IntroPage/IntroPage";
import Hamburger from "./Components/Hamburger/Hamburger";
import WatchList from "./Components/WatchList/WatchList";
import MostViewed from "./Components/MostViewed/MostViewed";
import News from "./Components/News/News";
import About from "./Components/About/About";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./helper/AuthContext";

function App() {

  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/user/check", {
      headers: {
        accesstoken: localStorage.getItem("accesstoken")
      }
    }).then((response) => {
      if (response.data.error) {
        localStorage.removeItem("accesstoken");
        setUser({ isLoggedIn: false, email: "", FName: "", LName: "" });
      } else {
        const { email, FName, LName } = response.data;
        setUser({
          isLoggedIn: true, email: email, FName: FName, LName: LName
        });
      }
    })
  }, []);

  return (
    <div className="App">
      <Hamburger />
      <IntroPage />
      <WatchList />
      <MostViewed />
      <News />
      <About />
    </div>
  );
}

export default App;
