import React from 'react';
import styles from './MovieEdit.module.scss';
import {withRouter} from 'react-router';
import * as client from '../../utils/model/model';
import PropTypes from 'prop-types';
import withTranslation from '../../hocs/withTranslation';

class MovieEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
    };
  }

  onTitleChange = (event) => {
    const changedSelected = {...this.state.selected, title: event.target.value};
    this.setState({
      selected: changedSelected,
    });
  };

  onPosterUrlChange = (event) => {
    const changedSelected = {...this.state.selected, posterUrl: event.target.value};
    this.setState({
      selected: changedSelected,
    });
  };

  onDirectorChange = (event) => {
    const changedSelected = {...this.state.selected, director: event.target.value};
    this.setState({
      selected: changedSelected,
    });
  };

  ondGenresChange = (event) => {
    const genres = [];

    const options = event.target.options;
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        genres.push(options[i].value);
      }
    }

    this.setState({
      selected: {...this.state.selected, genres},
    });
  };

  onDescriptionChange = (event) => {
    const changedSelected = {...this.state.selected, description: event.target.value};
    this.setState({
      selected: changedSelected,
    });
  };

  onSubmitClick = (event) => {
    event.preventDefault();
    client.editMovie(this.state.selected)
      .then(() => this.props.history.push(`/movie/${this.state.selected.id}`))
  };

  onGoBackClick = () => {
    this.props.history.push(`/movie/${this.state.selected.id}`);
  };

  render() {
    const {labels} = this.props;
    const selected = this.state.selected;
    return <form className={styles.form}>
      <div className={styles.control}>
        <label htmlFor='title'>{labels['movie-edit-title']}</label>
        <input className={styles.field} id='title' type='text' required='required' value={selected.title}
               onChange={this.onTitleChange}/>
      </div>
      <div className={styles.control}>
        <label htmlFor='img'>{labels['movie-edit-imgUrl']}</label>
        <input className={styles.field} id='img' type='text' required='required' value={selected.posterUrl}
               onChange={this.onPosterUrlChange}/>
      </div>
      <div className={styles.control}>
        <label htmlFor='director'>{labels['movie-edit-director']}</label>
        <input className={styles.field} id='director' type='text' required='required' value={selected.director}
               onChange={this.onDirectorChange}/>
      </div>
      <div className={styles.control}>
        <label htmlFor='genres'>{labels['movie-edit-genres']}</label>
        <select className={styles.field} id='genres' multiple='multiple' required='required'
                onChange={this.ondGenresChange}>
          <option>Drama</option>
          <option>Crime</option>
          <option>Action</option>
          <option>Adventure</option>
          <option>Fantasy</option>
        </select>
      </div>
      <div className={styles.control}>
        <label htmlFor='description'>{labels['movie-edit-description']}</label>
        <textarea onChange={this.onDescriptionChange} className={styles.field} id='description'
                  value={selected.description}/>
      </div>
      <div className={styles.buttons}>
        <button onClick={this.onSubmitClick} className={`${styles.btn} ${styles['btn-primary']}`}>
          {labels['movie-edit-submit']}
        </button>
        <button onClick={this.onGoBackClick} className={`${styles.btn} ${styles['btn-primary']}`}>
          {labels['movie-edit-return']}
        </button>
      </div>
    </form>;
  }
}

MovieEdit.propTypes = {
  selected: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    posterUrl: PropTypes.string,
    stars: PropTypes.number,
    likes: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    actorsIds: PropTypes.arrayOf(PropTypes.number),
    director: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default withTranslation(withRouter(MovieEdit));