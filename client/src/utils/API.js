import axios from "axios";

export default {
  // Gets cars from the Google API
  getCars: function (q) {
    console.log(q);
    return axios.get("/api/google", { params: {vin: q }});
  },
  // Gets all saved cars
  getSavedCars: function() {
    return axios.get("/api/cars");
  },
  // Gets the car with the given id
  getCar: function(id) {
    return axios.get("/api/cars/" + id);
  },
  // Deletes the saved car with the given id
  deleteCar: function(id) {
    return axios.delete("/api/cars/" + id);
  },
  // Saves a car to the database
  saveCar: function(carData) {
    return axios.post("/api/cars", carData);
  },
  updateCar: function(id, carData) {
    return axios.put("/api/cars/" + id, carData);
  }
};
