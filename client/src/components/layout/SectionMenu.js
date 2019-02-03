import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { Container } from "reactstrap";
import "./style.css";

export default class LandingPageMenu extends Component {
    openMobileMenu(event) {
        event.preventDefault();
        this.props.onMobileMenuToggle();
    }
    render() {
        return (
            <Container>
                <Nav className="navbar navbar-expand-md navbar-light bg-light nav-white fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                        </a>
                        <NavItem className={window.location.pathname === '/' ? 'active' : ''}>
                            <NavLink to ="/">
                            </NavLink>
                        </NavItem>
                        <NavItem className={window.location.pathname === '/about' ? 'active' : ''}>
                            <NavLink to ="/about">
                            </NavLink>
                        </NavItem>
                    </div>
                </Nav>
            </Container> 
        );
    }
}

