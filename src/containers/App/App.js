import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import "./styles.css";

import selectUser from './selectors';
import {
  getUser,
} from './actions';

class App extends Component {
  componentDidMount() {
    this.props.handleGetUser();
  }

  render() {
    const { name } = this.props;

    return (
      <div>
        Global Page: {name}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  handleGetUser: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = selectUser();

function mapDispatchToProps(dispatch) {
  return {
    handleGetUser: (data) => dispatch(getUser(data)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
