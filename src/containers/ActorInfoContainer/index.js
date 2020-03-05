import {connect} from 'react-redux';
import ActorsInfoContainer from './ActorsInfoContainer';
import {fetchSelectedActor} from '../../store/actions';

const mapStateToProps = (state) => ({
  actors: state.actorsReducer.actors,
  selectedActor: state.actorsReducer.selectedActor,
});

const mapDispatchToProps = {
  fetchSelectedActor,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(ActorsInfoContainer);