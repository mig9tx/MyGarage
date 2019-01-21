import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBoostrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

export default class extends Component {
    render() {
        return (
            <Fragment>
              <Row>
                <Colxx xxs="12">
                  <BreadcrumbContainer
                    heading={<InstlMessages id="menu.start" />}
                    match={this.props.match}
                  />
                <Separator className="mb-5" />
                </Colxx>
              </Row>
              {
                  /* Enjoy!*/
              }
            </Fragment>
        );
    }
}