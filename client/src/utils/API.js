import axios from "axios";

export default {
  // Gets cars from the Google API
  getCars: function (q) {
    console.log(q);
    return axios.get("/api/google", { params: {vin: q }})
  },
  // Gets all saved books
  getSavedCars: function() {
    return axios.get("/api/cars");
  },
  // Deletes the saved book with the given id
  deleteCar: function(id) {
    return axios.delete("/api/cars/" + id);
  },
  // Saves an book to the database
  saveCar: function(carData) {
    return axios.post("/api/cars", carData);
  }
};
