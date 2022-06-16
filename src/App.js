import "./App.css";
import CreateProfile from "./components/CreateProfile";
import Header from "./components/Header";
import HomeDash from "./components/HomeDash";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { Content, Footer } from "antd/lib/layout/layout";
import { FormInputContextProvider } from "./components/context/Context";
import Diary from "./components/Diary.jsx";

function App() {
  return (
    <FormInputContextProvider>
      <Layout>
        <Content>
          <Routes>
            <Route path="/" element={<HomeDash />} />
            <Route path="/create" element={<CreateProfile />} />
            <Route path="/diary" element={<Diary />} />
          </Routes>
          <Footer className="footer">Cardeets! ©2022</Footer>
        </Content>
      </Layout>
    </FormInputContextProvider>
  );
}

export default App;
