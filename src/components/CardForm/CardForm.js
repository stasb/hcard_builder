import React, { Component, PropTypes } from 'react';
import { Form, Field } from 'react-redux-form';

class CardForm extends Component {
  handleSubmit() {
  }

  render() {
    return (
      <div className="d-hc-form-container-outer">
        <div className="d-hc-form-container-inner">
          <h1>
            hCard Builder
          </h1>

          <Form className="d-hc-form" model="profile" onSubmit={() => this.handleSubmit()}>
            <p className="d-hc-form-section-title">
              personal details
            </p>

            <div className="d-hc-form-field-row">
              <div className="d-hc-field-col">
                <Field className="d-hc-field-group" model="profile.givenName">
                  <label>given name</label>
                  <input type="text" />
                </Field>
              </div>

              <div className="d-hc-field-col">
                <Field className="d-hc-field-group" model="profile.surname">
                  <label>surname</label>
                  <input type="text" />
                </Field>
              </div>
            </div>

            <div className="d-hc-form-field-row">
              <div className="d-hc-field-col">
                <Field model="profile.email">
                  <label>email</label>
                  <input type="text" />
                </Field>
              </div>

              <div className="d-hc-field-col">
                <Field model="profile.phone">
                  <label>phone</label>
                  <input type="text" />
                </Field>
              </div>
            </div>

            <p className="d-hc-form-section-title">
              address
            </p>

            <div className="d-hc-form-field-row">
              <div className="d-hc-field-col">
                <Field model="profile.houseName">
                  <label>house name or #</label>
                  <input type="text" />
                </Field>
              </div>

              <div className="d-hc-field-col">
                <Field model="profile.street">
                  <label>street</label>
                  <input type="text" />
                </Field>
              </div>
            </div>

            <div className="d-hc-form-field-row">
              <div className="d-hc-field-col">
                <Field model="profile.suburb">
                  <label>suburb</label>
                  <input type="text" />
                </Field>
              </div>

              <div className="d-hc-field-col">
                <Field model="profile.state">
                  <label>state</label>
                  <input type="text" />
                </Field>
              </div>
            </div>

            <div className="d-hc-form-field-row">
              <div className="d-hc-field-col">
                <Field model="profile.postcode">
                  <label>postcode</label>
                  <input type="text" />
                </Field>
              </div>

              <div className="d-hc-field-col">
                <Field model="profile.country">
                  <label>country</label>
                  <input type="text" />
                </Field>
              </div>
            </div>

            <div className="d-hc-form-field-row d-hc-action-row">
              <div className="d-hc-field-col">
                <button className="d-hc-button d-hc-button-base">
                  Upload Avatar
                </button>
              </div>

              <div className="d-hc-field-col">
                <button className="d-hc-button d-hc-button-primary">
                  Create hCard
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

CardForm.propTypes = {
  profile: PropTypes.object.isRequired
};

export default CardForm;
