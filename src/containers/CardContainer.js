import React, {
  Component,
  PropTypes
} from 'react';

import { connect } from 'react-redux';

import CardForm from '../components/CardForm';
import CardPreview from '../components/CardPreview';

class CardContainer extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <div>
        <CardForm />
      </div>
    );
  }
}

CardContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userProfile: state.userProfile
});

export default connect(
  mapStateToProps
)(CardContainer);
