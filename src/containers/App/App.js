import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import "./styles.css";

import selectGlobal from './selectors';

class App extends Component {
  render() {
    return (
      <div>App</div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = selectGlobal();

export default connect(mapStateToProps, {})(App);
