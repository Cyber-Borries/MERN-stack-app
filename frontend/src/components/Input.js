import React, { useEffect, useState } from "react";

export default function Input() {
  const [newCar, setNewCar] = useState({
    Owner: "",
    Make: "",
    Model: "",
    RegistrationNumber: "",
  });
  const [model, setModel] = useState("");
  const [make, setMake] = useState("");
  const [owner, setOwner] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [address, setAddress] = useState("");
  const submitCar = (e) => {
    e.preventDefault();
    setNewCar({
      ...newCar,
      Owner: owner,
      Make: make,
      Model: model,
      RegistrationNumber: registrationNumber,
      Address: address,
    });
  };

  console.log(newCar);

  function addCar() {
    fetch("/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCar),
    });
  }

  return (
    <div className="input-wrapper">
      <div className="form-field">
        <form onSubmit={submitCar}>
          <span>Year Model</span>
          <br />

          <input
            type="number"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          ></input>
          <br />
          <span>Car Make</span>
          <br />

          <input
            type="text"
            name="make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          ></input>
          <br />
          <span>Owner</span>
          <br />

          <input
            type="text"
            name="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          ></input>
          <br />
          <span>Registration number</span>
          <br />

          <input
            type="text"
            name="registrationNumber"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          ></input>
          <br />
          <span>Address</span>
          <br />

          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
          <br />

          <button className="submit-button button" onClick={addCar}>
            Add car
          </button>
        </form>
      </div>
    </div>
  );
}
