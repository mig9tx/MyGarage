import React, { Component } from "react";
import { Col } from 'reactstrap';
// Columns
const Colxx = (props) => (
    <Col {...props} widths={['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']} />
);
// Separator
const Separator = (props) => (
    <div className={`separator ${props.className}`}></div>
);
export { Colxx,Separator }