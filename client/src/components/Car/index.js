import React from "react";
import "./style.css";

const Car = ({ car, Button }) => (
  <div>
    <h1>{car.year} {car.make} {car.model}</h1>
    <p>Drivetrain: {car.drivetrain}</p>
    <p>Trim: {car.trim}</p>
    <p>Engine: {car.engine}</p>
    <p>Fuel Economy: </p>
    <p>City: {car.city_miles}</p>
    <p>Highway: {car.highway_miles}</p>
    <Button />
  </div>
)

export default Car;