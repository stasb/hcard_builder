import React, { Component, PropTypes } from 'react';
import profileImagePlaceholder from 'assets/images/picture-placeholder.png';

class CardPreview extends Component {
  render() {
    const { profile } = this.props;

    let stateWithComma;
    let activePostcode;
    let activeImagePreviewSrc;

    if (profile.state) {
      stateWithComma = <span>, {profile.state}</span>;
    }

    if (profile.postcode) {
      activePostcode = profile.postcode;
    } else {
      activePostcode = <span>&nbsp;</span>;
    }

    if (profile.imagePreviewUrl) {
      activeImagePreviewSrc = profile.imagePreviewUrl;
    } else {
      activeImagePreviewSrc = profileImagePlaceholder;
    }

    return (
      <div className="d-hc-preview-container-outer">
        <div className="d-hc-preview-container-inner">
          <div className="d-hc-preview-top-strip">
            <span>
              hcard preview
            </span>

            <p>
              {profile.givenName} {profile.surname}
            </p>

            <img alt="profile preview" src={activeImagePreviewSrc} />
          </div>

          <div className="d-hc-preview-info-panel">
            <div className="d-hc-preview-info-row">
              <div className="d-hc-preview-col-3">
                <p className="d-hc-preview-info-label">
                  email
                </p>
              </div>

              <div className="d-hc-preview-col-9">
                <p className="d-hc-preview-info-content">
                  {profile.email}
                </p>
              </div>
            </div>
            <div className="d-hc-preview-info-row">
              <div className="d-hc-preview-col-3">
                <p className="d-hc-preview-info-label">
                  phone
                </p>
              </div>

              <div className="d-hc-preview-col-9">
                <p className="d-hc-preview-info-content">
                  {profile.phone}
                </p>
              </div>
            </div>
            <div className="d-hc-preview-info-row">
              <div className="d-hc-preview-col-3">
                <p className="d-hc-preview-info-label">
                  address
                </p>
              </div>

              <div className="d-hc-preview-col-9">
                <p className="d-hc-preview-info-content">
                  {profile.houseName} {profile.street}
                </p>
              </div>
            </div>
            <div className="d-hc-preview-info-row">
              <div className="d-hc-preview-col-3">
                &nbsp;
              </div>

              <div className="d-hc-preview-col-9">
                <p className="d-hc-preview-info-content">
                  {profile.suburb}{stateWithComma}
                </p>
              </div>
            </div>
            <div className="d-hc-preview-info-row">
              <div className="d-hc-preview-col-3">
                <span className="d-hc-preview-info-label">
                  postcode
                </span>
              </div>

              <div className="d-hc-preview-col-3">
                <p className="d-hc-preview-info-content">
                  {activePostcode}
                </p>
              </div>

              <div className="d-hc-preview-col-2">
                <p className="d-hc-preview-info-label">
                  country
                </p>
              </div>

              <div className="d-hc-preview-col-4">
                <p className="d-hc-preview-info-content">
                  {profile.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CardPreview.propTypes = {
  profile: PropTypes.object.isRequired
};

export default CardPreview;
