import { useContext, useState } from "react";
import { FormInputContext } from "./context/Context";

function FormInput({ record }) {
  const { mileage, setMileage, gallons, setGallons, mpg, setMPG } =
    useContext(FormInputContext);
  // const { mpg, setMPG } = useContext(FormInputContext);

  function displayMileage() {
    let testfn = setMPG(((mileage - record[0].mileage) / gallons).toFixed(2));
    return testfn;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMileage = { mileage, gallons, mpg };
    const id = record[0].id;
    fetch(`https://cardeets-back-firestore.web.app/diary/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMileage),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error)
      .then(() => {
        window.location.reload(false);
      });
  };

  return (
    <div>
      {!mpg ? (
        <p>Enter your mileage! </p>
      ) : (
        <h2>You got {mpg} mpg from your last tank of gas!</h2>
      )}
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
