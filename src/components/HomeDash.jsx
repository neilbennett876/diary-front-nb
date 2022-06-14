import { Card } from "antd";
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
    fetch("https://cardeets-back-firestore.web.app/diary")
      .then((response) => response.json())
      .then((data) => {
        setRecord(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <Layout className="layout">
        <Content>
          <Card className="card">
            <section>
              <h2>
                Your car's name:
                {record?.map((record) => {
                  return <p key={record.id}>{record.alias}</p>;
                })}
              </h2>
              <h2>
                Your previous mileage:
                {record?.map((record) => {
                  return <p key={record.id}>{record.mileage}</p>;
                })}
              </h2>
            </section>
            <FormInput record={record} setRecord={setRecord} />
          </Card>
        </Content>
      </Layout>
    </div>
  );
}

export default HomeDash;
