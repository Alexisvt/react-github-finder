import PropTypes from 'prop-types';
import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert &&
    alert.msg && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>
    )
  );
};

Alert.propTypes = {
  alert: PropTypes.object,
};

export default Alert;
