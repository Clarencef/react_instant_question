import React, { Component } from 'react';
import { Search } from './index';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.warn(this.props);
    return (
      <div>
        welcome home
        <Search/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    routing: state.routing
  } 
}

export default connect(mapStateToProps)(Home);
// export default Home;
