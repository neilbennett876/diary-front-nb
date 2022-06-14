import "./App.css";
import CreateProfile from "./components/CreateProfile";
import HomeDash from "./components/HomeDash";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { FormInputContextProvider } from "./components/context/Context";

function App() {
  return (
    <FormInputContextProvider>
      <Layout>
        <Content
        // className="content"
        // style={{
        //   textAlign: "center",
        //   backgroundColor: "wheat",
        //   height: "640px",
        // }}
        >
          <Routes>
            <Route path="/" element={<HomeDash />} />
            <Route path="/create" element={<CreateProfile />} />
          </Routes>
          <Footer
            className="footer"
            // style={{
            //   position: "absolute",
            //   bottom: 0,
            //   width: "100%",
            //   height: "26px",
            // }}
          >
            Cardeets! ©2022
          </Footer>
        </Content>
      </Layout>
    </FormInputContextProvider>
  );
}

export default App;
