import React from 'react';
import styles from './MovieEdit.module.scss';
import withTranslation from '../../hocs/withTranslation';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';

class MovieEdit extends React.Component {
  render() {
    const {labels, handleSubmit, onCancel} = this.props;
    return <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.control}>
        <label htmlFor='title'>{labels['movie-edit-title']}</label>
        <Field className={styles.field} id='title' name="title" required='required' component="input" type="text"/>
      </div>
      <div className={styles.control}>
        <label htmlFor='posterUrl'>{labels['movie-edit-imgUrl']}</label>
        <Field className={styles.field} id='posterUrl' name="posterUrl" required='required' component="input"
               type="text"/>
      </div>
      <div className={styles.control}>
        <label htmlFor='director'>{labels['movie-edit-director']}</label>
        <Field className={styles.field} id='director' name="director" required='required' component="input"
               type="text"/>
      </div>
      <div className={styles.control}>
        <label htmlFor='genres'>{labels['movie-edit-genres']}</label>
        <Field className={styles.field} id='genres' multiple="multiple" name="genres" required='required'
               component="select" type="select-multi">
          <option>Drama</option>
          <option>Crime</option>
          <option>Action</option>
          <option>Adventure</option>
          <option>Fantasy</option>
        </Field>
      </div>
      <div className={styles.control}>
        <label htmlFor='description'>{labels['movie-edit-description']}</label>
        <Field className={styles.field} id='description' name="description" required='required' component="input"
               type="textarea"/>
      </div>
      <div className={styles.buttons}>
        <button type="submit" className={`${styles.btn} ${styles['btn-primary']}`}>
          {labels['movie-edit-submit']}
        </button>
        <button onClick={onCancel} className={`${styles.btn} ${styles['btn-primary']}`}>
          {labels['movie-edit-return']}
        </button>
      </div>
    </form>;
  }
}

MovieEdit.propTypes = {
  labels: PropTypes.object,
  onCancel: PropTypes.func,
  handleSubmit: PropTypes.func,
};

const withReduxMovieEditForm = reduxForm({
  form: 'movieEdit',
});

export default withReduxMovieEditForm(withTranslation(MovieEdit));