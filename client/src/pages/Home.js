import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Car from "../components/Car";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";

class Home extends Component {
  state = {
    cars: {},
    q: "",
    message: "Search For A Car To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getCars = () => {
    API.getCars(this.state.q)
      
      .then(res => {
        console.log(res.data);
        this.setState({
          cars: res.data
        })
      }
      )
  
      .catch(() =>
        this.setState({
          cars: [],
          message: "No New Car Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getCars();
  };

  handleCarSave = id => {
    const car = this.state.cars;
    console.log(car);
    API.saveCar({
      id: car.id,
      year: car.year,
      make: car.make,
      model: car.model,
      trim: car.trim,
      body_type: car.body_type,
      drivetrain: car.drivetrain,
      engine: car.engine,
      highway_miles: car.highway_miles,
      city_miles: car.city_miles
    }).then(() => this.getCars());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Car VIN Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Cars of Interest.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Car Search" icon="far fa-car">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.cars ? (
                    <Car
                      car={this.state.cars}
                      Button={() => (
                        <button
                          onClick={() => this.handleCarSave()}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  
                
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
