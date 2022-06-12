import { useContext, useState } from "react";
import { FormInputContext } from "./context/Context";

function FormInput({ record }) {
  const { mileage, setMileage } = useContext(FormInputContext);
  const { gallons, setGallons } = useContext(FormInputContext);
  const { mpg, setMPG } = useContext(FormInputContext);

  function displayMileage() {
    let testfn = setMPG(((mileage - record[0].mileage) / gallons).toFixed(2));
    return testfn;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMileage = { mileage, gallons, mpg };
    const id = record[0]._id;
    fetch(`https://cardeets-backend-nb.web.app/diary/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMileage),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error);
  };

  return (
    <div>
      <h2>Your mileage calculation goes here:</h2>
      <h3>{mpg} mpg</h3>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          placeholder="current mileage"
          onChange={(e) => setMileage(Number(e.target.value))}
        ></input>
        <input
          placeholder="gallons added"
          onChange={(e) => setGallons(Number(e.target.value))}
        ></input>
        <br />
        <button type="button" onClick={displayMileage}>
          Calculate
        </button>
        <button type="button" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </div>
  );
}

export default FormInput;
