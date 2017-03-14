import React from 'react';
import withRedux from 'next-redux-wrapper';

import initStore from '../store';
import { putPageTitle } from '../actions/page-title';
import Layout from '../components/layout';

class About extends React.Component {

  static async getInitialProps ({ store, query }) {
    store.dispatch(putPageTitle('About Page'));
    return {};
  }

  render () {
    return <div>
      <Layout title={this.props.pageTitle}>
        <p>This is the About Page content! And it is blue.</p>
      </Layout>

      <style jsx>{`
        p {
          color: blue;
        }
      `}</style>
    </div>
  }
}

const mapStateToProps = state => ({
  pageTitle: state.pageTitle
});

export default withRedux(initStore, mapStateToProps)(About);