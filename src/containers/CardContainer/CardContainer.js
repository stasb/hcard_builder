import React, {
  Component,
  PropTypes
} from 'react';

import { connect } from 'react-redux';

import CardForm from 'components/CardForm/CardForm';
import CardPreview from 'components/CardPreview/CardPreview';
import * as Actions from 'actions/ProfileActions';

import 'styles/main.scss';

class CardContainer extends Component {
  submitForm() {
    // handle dispatching of form submit here
  }

  render() {
    return (
      <div className="d-hc-card-container">
        <CardForm
          profile={this.props.profile}
          onSubmit={this.submitForm}
          updatePreviewImage={this.props.updatePreviewImage}
         />

        <CardPreview profile={this.props.profile} />
      </div>
    );
  }
}

CardContainer.propTypes = {
  updatePreviewImage: PropTypes.func.isRequired,
  profile: PropTypes.object
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

const mapDispatchToProps = (dispatch) => {
  return {
    updatePreviewImage: (url) => {
      dispatch(Actions.updatePreviewImage(url));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
