import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Car from "../components/Car";
import Footer from "../components/Footer";
import API from "../utils/API";

export default class Maintenance extends Component {
    state = {
        cars: {},
    }

    componentWillMount() {
        console.log('hello maintenance');
        this.getCar();
    }

    getCar = () => {
        console.log(this.props.location.state.key);
        API.getCar(this.props.location.state.key)
          .then(res =>{
            console.log(res.data)
            this.setState({
              cars: res.data
            })
          }
          )
          .catch(err => console.log(err));
      };


      render() {
          return(
              <div>
              <h1>Your Vehicle Page</h1>
              <Car
              car={this.state.cars}
              Button={() => (
                <button
                  onClick={() => this.handleMaintenanceAdd()}
                  className="btn btn-primary ml-2"
                >
                  Add Maintenance
                </button>
              )}
            />
              </div>
          )
      }

}