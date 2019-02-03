import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Container, Form, Button, Label, Input, Col, Row } from "reactstrap";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <Container>
        <Row style={{ marginTop: "4rem" }}>
          <Col md="8">
            <Link to="/" className="btn-flat waves-effect">
              <i className="fa-long-arrow-left"></i> Back to
              home
            </Link>
            <Row md="12" style={{ paddingLeft: "11.250px" }}>
              <h4 className="mt-3">
                <b>Login</b> below
              </h4>
              <p className="mt-3">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </Row>
            <Form noValidate onSubmit={this.onSubmit}>
              <Col md="12" className="input-field mt-3">
                <Input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <Label htmlFor="email" className="mt-3">Email</Label>
                <span className="text-danger">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </Col>
              <Col md="12" className="input-field mt-3">
                <Input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <Label htmlFor="password" className="mt-3">Password</Label>
                <span className="text-danger">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </Col>
              <Col md="12" style={{ paddingLeft: "11.250px" }}>
                <Button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn"
                >
                  Login
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
