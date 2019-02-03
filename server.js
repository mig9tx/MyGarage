const express = require("express");

// const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
//const users = require("./routes/api/users");


const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/vinCars",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
//app.use("/api/users", users);

//const Users = require('./routes/api')

//app.use('/users', Users)
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
