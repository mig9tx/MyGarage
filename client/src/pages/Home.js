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
    cars: { year: null, make: null, model: null, trim: null, body_type: null, engine: null },
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
    const car = this.state.cars.find(car => car.id === id);
    console.log(car);
    API.saveCar({
      id: car.id,
      year: car.year,
      make: car.title,
      model: car.subtitle,
      trim: car.trim,
      body_type: car.body_type,
      engine: car.engine,
      synopsis: car.synopsis,
      date: car.date
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
            <Card title="Car Search" icon="far fa-book">
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
                      // year={this.state.cars.year}
                      // make={this.state.cars.make}
                      // model={this.state.cars.model}
                      // trim={this.state.cars.trim}
                      // body_type={this.state.cars.body_type}
                      // engine={cars.engine}
                      car={this.state.cars}
                      Button={() => (
                        <button
                          // onClick={() => this.handleCarSave(cars.id)}
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
