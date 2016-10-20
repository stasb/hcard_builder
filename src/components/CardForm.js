import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

let CardForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="givenName">First Name</label>
        <Field name="givenName" component="input" type="text"/>
      </div>

      <div>
        <label htmlFor="surname">Last Name</label>
        <Field name="surname" component="input" type="text"/>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email"/>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

CardForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

CardForm = reduxForm({
  form: 'card_form'
})(CardForm);

const selector = formValueSelector('CardForm');

CardForm = connect(
  state => {
    const givenName = selector(state, 'givenName');
    const surname = selector(state, 'surname');
    const email = selector(state, 'email');

    return {
      givenName,
      surname,
      email
    };
  }
)(CardForm);

export default CardForm;
