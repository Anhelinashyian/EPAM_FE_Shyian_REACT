import React from 'react';
import classNames from 'classnames';
import './LanguageSwitcher.scss';
import PropTypes from 'prop-types';

export default class LanguageSwitcher extends React.Component {
  isActive = (language) => {
    return this.props.active === language;
  };

  setActive = (language) => {
    this.props.setActiveLanguage(language);
    localStorage.setItem('active', this.props.active);
  };

  render() {
    return <div className='btn-container'>
      <LanguageButton language='EN' active={this.isActive('EN')} setActive={this.setActive}/>
      <LanguageButton language='UA' active={this.isActive('UA')} setActive={this.setActive}/>
    </div>;
  }
}

class LanguageButton extends React.Component {
  onBtnClick = () => {
    this.props.setActive(this.props.language);
  };

  render() {
    const btnClass = classNames({
      btn: true,
      active: this.props.active,
    });
    return <button onClick={this.onBtnClick} className={btnClass}>{this.props.language}</button>
  }
}

LanguageSwitcher.propTypes = {
  active: PropTypes.string,
  setActive: PropTypes.func,
  setActiveLanguage: PropTypes.func,
  language: PropTypes.string,
};