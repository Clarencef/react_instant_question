import isEmpty from 'lodash/isEmpty';
import React, { Component } from 'react';
import { Search } from './index';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { staticContext, resultsState } = this.props;

    const finalResultsState =
      staticContext && staticContext.resultsState
        ? staticContext.resultsState
        : resultsState;

    return (
      <div>
        welcome home
        <Search
          resultsState={!isEmpty(finalResultsState) ? finalResultsState : null}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    routing: state.routing,
    resultsState: state.resultsState,
  };
};

export default connect(mapStateToProps)(Home);
// export default Home;
