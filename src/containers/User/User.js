import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import selectUser from './selectors';
import {
  getUser,
} from './actions';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
  }

  componentDidMount() {
    //const { dataAttrs } = this.props;
    // console.log('dataAttrs', dataAttrs);

    //this.props.handleSetWidget('User', dataAttrs);

    //this.props.handleGetUser(this.state.counter);
  }

  handleClick() {
    // console.log('click');
    this.setState({
      counter: this.state.counter + 1
    });
    this.props.handleGetUser(this.state.counter);
  }

  render() {
    const { name } = this.props;

    return (
      <div>
        <div onClick={() => this.handleClick()}>widget user: {name}</div>
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

