import "./App.css";
import CreateProfile from "./components/CreateProfile";
import HomeDash from "./components/HomeDash";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { FormInputContextProvider } from "./components/context/Context";
import Diary from "./components/Diary.jsx";

function App() {
  return (
    <>
      <FormInputContextProvider>
        <Layout>
          <Header className="header">Header testing!</Header>
          <Content>
            <Routes>
              <Route path="/" element={<HomeDash />} />
              <Route path="/create" element={<CreateProfile />} />
              <Route path="/diary" element={<Diary />} />
            </Routes>
          </Content>
          <Footer className="footer">Cardeets! ©2022</Footer>
        </Layout>
      </FormInputContextProvider>
    </>
  );
}

export default App;
