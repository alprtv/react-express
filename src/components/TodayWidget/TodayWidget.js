import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodayWidget extends Component {
  render() {
    return (
      <div >
        <p>
          { this.props.today.toUTCString() }
        </p>
      </div>
    );
  }
}

TodayWidget.propTypes = {
  today: PropTypes.object.isRequired
}

export default TodayWidget;
