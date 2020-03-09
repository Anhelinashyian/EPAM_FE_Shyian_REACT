import React from 'react';
import {connect} from 'react-redux';
import en from '../internalize/en';
import ua from '../internalize/ua';

export const withTranslation = (WrappedComponent) => {
  const mapStateToProps = (state) => {
    const language = state.switchLanguageReducer.active;

    if (language === 'EN') {
      return {labels: en};
    }

    if (language === 'UA') {
      return {labels: ua};
    }
  };

  const withConnect = connect(mapStateToProps);
  return withConnect(WrappedComponent);
};

export default withTranslation;