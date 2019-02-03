import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
// import Form from "../components/Form";
// import Car from "../components/Car";
// import Footer from "../components/Footer";
import API from "../utils/API";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


const now = moment();
console.log(now.format('MMM Do, YYYY'));


export default class Maintenance extends Component {
    constructor(props){
        super(props);
    this.state = {
        cars: {},
        description: props.expense ? props.expense.description : "",
        amount: props.expense ? (props.expense.amount / 100).toString() : "",
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        focused: false,
        error: ''
    }
    }
    componentWillMount() {
        console.log('hello maintenance');
        this.getCar();
    }
    
    getCar = () => {
        console.log(this.props.location.state.key);
        
        API.getCar(this.props.location.state.key)
          .then(res =>{
            console.log(res.data.maintenance)
            this.setState({
              cars: res.data,
              maintenance: res.data.maintenance
            })
          }
          )
          .catch(err => console.log(err));
      };
    onDescriptionChange = (event) => {
        const description = event.target.value;
        this.setState(() => ({ description }));
    };
    onAmountChange = (event) => {
        const amount = event.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=> ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    handleAddMaintenance = (event) => {
        event.preventDefault();
        const amount = this.state.amount;
        const description = this.state.description;
        const createdAt = this.state.createdAt;
        let maintenance = {
            description: this.state.description,
            amount: this.state.amount,
            createdAt: this.state.createdAt
        };  
        
        const cars = Object.assign({}, this.state.cars);
        cars.maintenance = [...cars.maintenance, maintenance];
        console.log(maintenance);
        this.setState({cars: cars}, this.handleUpdateMaintenance);
        event.target.elements.description.value = '';
    }

    handleUpdateMaintenance = () => {
        const id = this.state.cars._id;
        console.log(id);
        let carData = this.state.cars;
        API.updateCar(id, carData).then(() => this.getCar()); 
        
        console.log(this.state.maintenance);

        // const option = event.target.elements.option.value.trim();
        // const error = this.props.handleAddOption(option);
        
        // this.setState(() => ({ error }));

        // if(!error) {
        //     event.target.elements.option.value = "";
        // }
    };

    handleDeleteMaintenance = () => {
        console.log('button clicked');
        const car = this.state.cars;
        console.log(car._id);
        console.log(car.maintenance);
        
    }


      render() {
          return(
              <div>
              
              <h1>{this.state.cars.year} {this.state.cars.make} {this.state.cars.model}</h1>
              <h2>Add Maintenance</h2>
              <form onSubmit={this.handleAddMaintenance}>
              <input 
              type="text"
              placeholder="Description"
              name="description"
              autoFocus
              value={this.state.description}
              onChange={this.onDescriptionChange}              
              />
              <input 
              type="text"
              placeholder="Amount"
              name="amount" 
              value={this.state.amount}
              onChange={this.onAmountChange}             
              />
              <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              />
              <button>Add Maintenance</button>
              </form>
              {(this.state.cars.maintenance && this.state.cars.maintenance.length) ? (
               <div>
                <h2>
                  Maintenance History
                </h2>
               {this.state.cars.maintenance.map((maintenance, i) => (
                   <div key={i}>
                      <p>Description: {maintenance.description}</p>
                      <p>Date: {moment(maintenance.createdAt).format('YYYY-MM-DD')}</p>
                      <p>Amount: {maintenance.amount}</p>
                      <button
                      onClick={() => this.handleDeleteMaintenance()}
                          className="btn btn-primary ml-2"
                      >Delete Maintenance</button>
                    </div>
               ))}
               </div>
              ) : (
                  <h2> Your car has no maintenace history. Add some maintenace.</h2>
              )
              }

              
              </div>
          )
      }

}