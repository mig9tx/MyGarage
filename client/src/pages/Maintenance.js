import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Car from "../components/Car";
import Footer from "../components/Footer";
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
        cars: {
            maintenance: []
        },
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
            console.log(res.data)
            console.log(res.data.maintenance)
            this.setState({
              cars: res.data,
              
            //   maintenance: res.data.maintenance
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
        console.log(this.state.cars.maintenance);
        this.setState({maintenance: [maintenance, ...this.state.cars.maintenance]});
        event.target.elements.description.value = '';
        console.log(this.state.maintenance);
        console.log(JSON.parse(JSON.stringify(this.state.cars)));

        // const option = event.target.elements.option.value.trim();
        // const error = this.props.handleAddOption(option);
        
        // this.setState(() => ({ error }));

        // if(!error) {
        //     event.target.elements.option.value = "";
        // }
    };


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

              
              </div>
          )
      }

}