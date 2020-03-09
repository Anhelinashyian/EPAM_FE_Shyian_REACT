import {connect} from 'react-redux';
import LanguageSwitcher from './LanguageSwitcher';
import {setActiveLanguage} from '../../store/actions';

const mapStateToProps = (state) => ({
  active: state.switchLanguageReducer.active,
});

const mapDispatchToProps = {
  setActiveLanguage,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(LanguageSwitcher);