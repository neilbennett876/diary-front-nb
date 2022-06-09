// import React, { useState } from "react";

// function Add() {
//   const [diffMileage, setDiffMileage] = useState();
//   const [gallons, setGallons] = useState(0);
//   const [mpg, setMPG] = useState();

//   const handleSubmit = () => {
//     const update = { mileage, gallons };
//     fetch("http://localhost:3000/diary", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(update),
//     })
//       .then((res) => res.json())
//       .then((user) => console.log(user))
//       .catch(console.error);
//   };

//   return (
//     <form>
//       <br />
//       <input
//         placeholder="current mileage"
//         onChange={(e) => setDiffMileage(e.target.value)}
//       ></input>
//       <input
//         placeholder="gallons added"
//         onChange={(e) => setGallons(e.target.value)}
//       ></input>
//       <br />
//       <button
//         type="submit"
//         onClick={() => setMPG((diffMileage - record[0].mileage) / gallons)}
//       >
//         Calculate
//       </button>
//       <button>Add record!</button>
//     </form>
//   );
// }

// export default Add;
