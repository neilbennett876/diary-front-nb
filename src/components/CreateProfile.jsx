import { Card, Button, Checkbox, Form, Input } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormInputContext } from "./context/Context";

function CreateProfile() {
  const [alias, setAlias] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState(0);
  // const [userID, setUserID] = useState("")

  const { user } = useContext(FormInputContext);
  console.log(user);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    const newUser = {
      alias,
      year,
      make,
      model,
      mileage,
      // userID
    };
    fetch("https://cardeets-backend-nb.web.app/diary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);
    navigate("/");
  };

  return (
    <>
      <section id="cardContainer">
        <div id="section-container">
          <Content id="cardContainer">
            <Card id="card">
              <strong>Tell us about your car!</strong>
              <br />
              <br />
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
              >
                {/* <h3>Car Alias</h3> */}
                <Form.Item
                  label="Alias"
                  name="alias"
                  rules={[
                    {
                      required: true,
                      message: "Please input your alias!",
                    },
                  ]}
                >
                  <Input
                    placeholder="alias"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Year"
                  name="year"
                  rules={[
                    {
                      required: true,
                      message: "Please input the year!",
                    },
                  ]}
                >
                  <Input
                    placeholder="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Make"
                  name="make"
                  rules={[
                    {
                      required: true,
                      message: "Please input the make!",
                    },
                  ]}
                >
                  <Input
                    placeholder="make"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Model"
                  name="model"
                  rules={[
                    {
                      required: true,
                      message: "Please input the model!",
                    },
                  ]}
                >
                  <Input
                    placeholder="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Mileage"
                  name="mileage"
                  rules={[
                    {
                      required: true,
                      message: "Please input the mileage!",
                    },
                  ]}
                >
                  <Input
                    placeholder="mileage"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                  />
                </Form.Item>
                {/* <br />
          <h3>Year</h3>
          <input
            placeholder="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <br />
          <h3>Make</h3>
          <input
            placeholder="make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
          <br />
          <h3>Model</h3>
          <input
            placeholder="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <br />
          <h3>Mileage</h3>
          <input
            type="number"
            placeholder="mileage"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
          />
          <br />
          <br /> */}
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Content>
        </div>
      </section>
      <br />
    </>
  );
}

export default CreateProfile;
