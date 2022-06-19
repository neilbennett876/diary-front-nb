import "./App.css";
import CreateProfile from "./components/CreateProfile";
import HomeDash from "./components/HomeDash";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import { Content, Footer } from "antd/lib/layout/layout";
import {
  FormInputContext,
  FormInputContextProvider,
} from "./components/context/Context";
import Diary from "./components/Diary.jsx";
import { useContext, useState } from "react";
import Login from "./components/Login";
import HeaderNavBar from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
  // const { user } = useContext(FormInputContext);

  const [user, setUser] = useState();

  return (
    <FormInputContextProvider>
      <Layout>
        {/* <header className="header">Header testing!</header> */}
        <HeaderNavBar />
        <Content>
          <Routes>
            <Route path="/" element={<HomeDash />} />
            <Route
              path="/create"
              // element={!user ? <Login /> : <CreateProfile />}
              element={<CreateProfile />}
            />
            <Route path="/diary" element={<Diary />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        </Content>
        <Footer className="footer">Cardeets! ©2022</Footer>
      </Layout>
    </FormInputContextProvider>
  );
}

export default App;
