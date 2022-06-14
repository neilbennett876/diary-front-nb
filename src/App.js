import "./App.css";
import CreateProfile from "./components/CreateProfile";
import HomeDash from "./components/HomeDash";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { FormInputContextProvider } from "./components/context/Context";
import SignUp from "./components/CreateProfile";

function App() {
  return (
    <FormInputContextProvider>
      <Layout>
        <Content>
          <Routes>
            <Route path="/" element={<HomeDash />} />
            <Route path="/create" element={<CreateProfile />} />
          </Routes>
          <Footer className="footer">Cardeets! ©2022</Footer>
        </Content>
      </Layout>
    </FormInputContextProvider>
  );
}

export default App;
