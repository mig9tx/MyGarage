import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Car from "../components/Car";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
  state = {
    cars: []
  };

  componentDidMount() {
    this.getSavedCars();
  }

  getSavedCars = () => {
    API.getSavedCars()
      .then(res =>{
        console.log(res.data)
        this.setState({
          cars: res.data
        })
      }
      )
      .catch(err => console.log(err));
  };

  handleCarDelete = id => {
    API.deleteCar(id).then(res => this.getSavedCars());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) VIN Number Car Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Cars of your Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Cars" icon="download">
              {this.state.cars.length ? (
                <List>
                  {this.state.cars.map(car => (
                    <Car
                      key={car._id}
                      car={car}
                      Button={() => (
                        <button
                          onClick={() => this.handleCarDelete(car._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;

