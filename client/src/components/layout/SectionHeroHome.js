import React from "react";
// import { NavLink } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Media } from "reactstrap";
// import { Colxx } from "components/CustomBootstrap";
import "./style.css";


export default class SectionHeroHome extends React.Component {
    render() {
        return(
            <div className="hero-home hero-2">
                    <div className="container-m">
                        <div className="app-hero">
                            <div className="intro-block">
                                <h4>MyGarage</h4>
                                <h1>Manage all your data at just one place.</h1>
                                <p>Best in class big data software and analytics services will render your huge chunks into
                                meaningful data. Login to the app now.</p>
                            </div>
                                <div className="hero-img">
                            <div className="signup-form">
                                <h1>Register for free Trial - Get 30% off for 1 year.</h1>
                            <Form action="#" method="post" className="registration-form">
                                <FormGroup>
                                    <Label className="sr-only" for="form-name">First name</Label>
                                        <Input type="text" name="form-name" placeholder="Enter Your Name..." className="form-name form-control" id="form-name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="sr-only" for="form-email">Email</Label>
                                        <Input type="text" name="form-email" placeholder="Email Address..." className="form-email form-control" id="form-email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="sr-only" for="form-phone">Password</Label>
                                        <Input type="text" name="form-phone" placeholder="Password..." className="form-phone form-control" id="form-phone" />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="sr-only" for="form-phone">Phone</Label>
                                        <Input type="text" name="form-phone" placeholder="Password..." className="form-phone form-control" id="form-phone" />
                                <Button type="submit" className="btn mt-4" size="lg">Sign me up</Button>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
    }

}