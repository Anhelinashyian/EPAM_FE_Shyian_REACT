import {connect} from "react-redux";
import {
    setMovies,
    setSelected,
    sortByLikes,
    sortByRating,
    incrementLikes,
    decrementLikes,
    setRating,
    setSearchValue
} from "../../store/actions";

import AppContainer from "./AppContainer";

const mapStateToProps = (state) => {
    return ({
        movies: state.homepageReducer.movies,
        selected: state.homepageReducer.selected,
        sortedByLikes: state.homepageReducer.sortedByLikes,
        searchValue: state.homepageReducer.searchValue,
    });
};

const mapDispatchToProps = {
    setMovies: setMovies,
    setSelected: setSelected,
    sortByRating: sortByRating,
    sortByLikes: sortByLikes,
    incrementLikes: incrementLikes,
    decrementLikes: decrementLikes,
    setRating: setRating,
    setSearchValue: setSearchValue,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(AppContainer);
