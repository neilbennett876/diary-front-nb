import "./App.css";
import CreateProfile from "./components/CreateProfile";
import HomeDash from "./components/HomeDash";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import { FormInputContextProvider } from "./components/context/Context";

function App() {
  return (
    <FormInputContextProvider>
      <Layout>
        <Content style={{ padding: "0 50px", textAlign: "center" }}>
          <Routes>
            <Route path="/" element={<HomeDash />} />
            <Route path="/create" element={<CreateProfile />} />
          </Routes>
          <Footer style={{ textAlign: "center" }}>Cardeets! ©2022</Footer>
        </Content>
      </Layout>
    </FormInputContextProvider>
  );
}

export default App;
