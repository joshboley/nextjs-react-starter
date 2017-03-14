import React from 'react';
import withRedux from 'next-redux-wrapper';

import initStore from '../store';
import { putPageTitle } from '../actions/page-title';
import Layout from '../components/layout';

class Home extends React.Component {

  static async getInitialProps ({ store, query }) {
    store.dispatch(putPageTitle('Default Title'));
    return {};
  }

  render () {
    return <div>
      <Layout title={this.props.pageTitle}>
        <p>This is the Home Page content! And it is red.</p>
      </Layout>

      <style jsx>{`
        p {
          color: red;
        }
      `}</style>
    </div>
  };
}

const mapStateToProps = state => ({
  pageTitle: state.pageTitle
});

export default withRedux(initStore, mapStateToProps)(Home);