import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import {
  setWidget,
} from './actions';

function WidgetWrapper(WrappedComponent, name) {
  class Widget extends Component {
    componentDidMount() {
      const { dataAttrs } = this.props;

      if (name) {
        this.props.handleSetWidget(name, dataAttrs);
      }
    }

    render() {
      const { dataAttrs } = this.props;

      return <WrappedComponent dataAttrs={dataAttrs} />;
    }
  }

  Widget.propTypes = {
    handleSetWidget: PropTypes.func,
    dataAttrs: PropTypes.object
  };

  function mapDispatchToProps(dispatch) {
    return {
      handleSetWidget: (widgetName, data) => dispatch(setWidget(widgetName, data)),
      dispatch,
    };
  }

  return connect(null, mapDispatchToProps)(Widget);
}

export default WidgetWrapper;


