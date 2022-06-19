import React, { useState, useEffect } from "react";
import { Divider, List, Typography } from "antd";

function Diary() {
  const [records, setRecords] = useState();

  // const navigate = useNavigate();
  useEffect(() => {
    fetch("https://cardeets-backend-nb.web.app/diary")
      .then((response) => response.json())
      .then((data) => {
        setRecords(data);
      })
      .catch(console.error);
  }, []);

  const mpgData = records?.map((record) => {
    return (
      <ul>
        {record.mpg.map((collection) => {
          return <li>{collection} mpg</li>;
        })}
      </ul>
    );
  });

  return (
    <>
      <div>
        <Divider orientation="left">Previous MPG's</Divider>
        <List
          size="large"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={mpgData}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        {/* <section id="diary">
          <ul id="diary-child">
            {records?.map((record) => {
              return (
                <li key={record._id}>
                  {record.mpg.map((mpg) => {
                    return (
                      <ul>
                        <li>{mpg}</li>
                      </ul>
                    );
                  })}
                </li>
              );
            })}
          </ul>
        </section> */}
      </div>
    </>
  );
}

export default Diary;
