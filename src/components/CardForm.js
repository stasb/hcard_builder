import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-redux-form';

class CardForm extends Component {
  handleSubmit() {
    const { dispatch } = this.props;
  }

  render() {
    const { profile } = this.props;

    return (
      <div>
        <Form model="profile" onSubmit={() => this.handleSubmit()}>
          <Field model="profile.givenName">
            <label>Given name:</label>
            <input type="text" />
          </Field>

          <Field model="profile.surname">
            <label>Surname:</label>
            <input type="text" />
          </Field>

          <Field model="profile.email">
            <label>Email:</label>
            <input type="text" />
          </Field>

          <button type="submit">
            Create hCard
          </button>
        </Form>
      </div>
    );
  }
}

CardForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  profile: PropTypes.object
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps
)(CardForm);
