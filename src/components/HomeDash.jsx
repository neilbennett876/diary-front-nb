import { FormItemInputContext } from "antd/lib/form/context";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";

function HomeDash() {
  const [record, setRecord] = useState();
  const { mpg, mileage } = useContext(FormItemInputContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://cardeets-backend-nb.web.app/diary")
      .then((response) => response.json())
      .then((data) => {
        setRecord(data);
      })
      .catch(console.error);
  }, [mpg, mileage, record]);

  return (
    <div>
      <Layout className="layout">
        <Content>
          <section>
            <h2>
              Your car's name:
              {record?.map((record) => {
                return <p key={record._id}>{record.alias}</p>;
              })}
            </h2>
            <h2>
              Your previous mileage:
              {record?.map((record) => {
                return <p key={record._id}>{record.mileage}</p>;
              })}
            </h2>
          </section>
          <FormInput record={record} setRecord={setRecord} />
        </Content>
      </Layout>
    </div>
  );
}

export default HomeDash;
