import React, { useState, useEffect } from "react";

export default function CarsDisplay() {
  const [cars, setCars] = useState([]);
  const [deletedCar, setDeletedCar] = useState([]);
  const [loading, setLoading] = useState(false);
  const [removeId, setRemoveId] = useState({ _id: "" });

  useEffect(() => {
    fetch("/show")
      .then((response) => response.json())
      .then((data) => setCars(data));

    console.log("cars", cars);
  }, []);

  const addId = (e) => {
    let index = e.target.dataset.id;
    setRemoveId({ _id: index });

    removeCar();
  };

  console.log(removeId);

  function removeCar() {
    fetch("/remove", {
      method: "DELETE",
      headers: { "Content-Type": "text/html" },
      body: JSON.stringify(removeId),
    });
    console.log(typeof removeId);
  }

  //add extra state for id - click on edit store id of object in state and populate form with existing details

  return (
    <div className="cars-wrapper">
      {/* <div className="loader-container"></div> */}
      {cars?.map((car) => (
        <div className="cars-items" key={car.id} value={car.id}>
          <h2>{car.Make}</h2>
          <span>Car's make</span>
          <h2>{car.Model}</h2>
          <span>Car's model</span>
          <h2>{car.Owner}</h2>
          <span>Car's owner</span>
          <h2>{car.RegistrationNumber}</h2>
          <span>Car's registration number</span>
          <button
            className="delete-button button"
            data-id={car._id}
            onClick={addId}
          >
            Delete car
          </button>
        </div>
      ))}
      ;
    </div>
  );
}
