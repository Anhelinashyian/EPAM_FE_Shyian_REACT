import {connect} from 'react-redux';
import ActorsInfoContainer from './ActorsInfoContainer';

const mapStateToProps = (state) => ({
  actors: state.actorsReducer.actors,
});

const withConnect = connect(mapStateToProps);

export default withConnect(ActorsInfoContainer);