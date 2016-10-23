import React, { Component, PropTypes } from 'react';
import { Form, Field } from 'react-redux-form';

class CardForm extends Component {
  handleSubmit() {
  }

  render() {
    return (
      <div className="d-hc-form-container">
        <h1>
          hCard Builder
        </h1>

        <Form className="d-hc-form" model="profile" onSubmit={() => this.handleSubmit()}>
          <p className="d-hc-form-section-title">
            personal details
          </p>

          <div className="d-hc-form-field-row">
            <Field model="profile.givenName">
              <label>Given name</label>
              <input type="text" />
            </Field>

            <Field model="profile.surname">
              <label>Surname</label>
              <input type="text" />
            </Field>
          </div>

          <div className="d-hc-form-field-row">
            <Field model="profile.email">
              <label>Email</label>
              <input type="text" />
            </Field>

            <Field model="profile.phone">
              <label>Phone</label>
              <input type="text" />
            </Field>
          </div>

          <p className="d-hc-form-section-title">
            address
          </p>

          <div className="d-hc-form-field-row">
            <Field model="profile.houseName">
              <label>house name or #</label>
              <input type="text" />
            </Field>

            <Field model="profile.street">
              <label>street</label>
              <input type="text" />
            </Field>
          </div>

          <div className="d-hc-form-field-row">
            <Field model="profile.suburb">
              <label>suburb</label>
              <input type="text" />
            </Field>

            <Field model="profile.state">
              <label>state</label>
              <input type="text" />
            </Field>
          </div>

          <div className="d-hc-form-field-row">
            <Field model="profile.postcode">
              <label>postcode</label>
              <input type="text" />
            </Field>

            <Field model="profile.country">
              <label>country</label>
              <input type="text" />
            </Field>
          </div>

          <div className="d-hc-form-action-row">
            <button>
              Upload Avatar
            </button>

            <button type="submit">
              Create hCard
            </button>
          </div>
        </Form>
      </div>
    );
  }
}

CardForm.propTypes = {
  profile: PropTypes.object.isRequired
};

export default CardForm;
