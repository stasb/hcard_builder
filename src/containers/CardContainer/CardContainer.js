import React, {
  Component,
  PropTypes
} from 'react';

import { connect } from 'react-redux';

import CardForm from 'components/CardForm/CardForm';
import CardPreview from 'components/CardPreview/CardPreview';

import 'styles/main.scss';

class CardContainer extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <div>
        <CardForm profile={this.props.profile} />
      </div>
    );
  }
}

CardContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  profile: PropTypes.object
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps
)(CardContainer);
