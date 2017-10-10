import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Navbar from '../../components/Navbar/Navbar';

import selectUser from './selectors';
import {
  getUser,
} from './actions';


class User extends Component {
  componentDidMount() {
    this.props.handleGetUser();
  }

  render() {
    const { name, path } = this.props;

    return (
      <div>
        <div>widget user: {name}</div>
        <Navbar path={path} />
      </div>
    );
  }
}

User.propTypes = {
  handleGetUser: PropTypes.func
};

const mapStateToProps = selectUser();

function mapDispatchToProps(dispatch) {
  return {
    handleGetUser: (data) => dispatch(getUser(data)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);

