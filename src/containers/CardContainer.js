import React, {
  Component,
  PropTypes
} from 'react';

import { connect } from 'react-redux';

import CardForm from '../components/CardForm';
import CardPreview from '../components/CardPreview';

class CardContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { dispatch } = this.props;

    return (
      <p></p>
    );
  }
}

const mapStateToProps = state => ({
  user_profile: state.user_profile
})

export default connect(
  mapStateToProps
)(CardContainer)
