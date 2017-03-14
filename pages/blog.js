import React from 'react';
import withRedux from 'next-redux-wrapper';

import initStore from '../store';
import { putPageTitle } from '../actions/page-title';
import { putAllBlogs } from '../actions/all-blogs';
import { putCurrentBlogPost } from '../actions/blog-post';
import { getBlogPost, getAllBlogPosts } from '../data/blogs';
import Layout from '../components/layout';
import BlogList from '../connected-components/blog-list';
import BlogView from '../connected-components/blog-view';

class Blog extends React.Component {

  static async getInitialProps ({ store, query: { id } }) {
    if (id) {
      let post = await getBlogPost(id);
      if (post) store.dispatch(putCurrentBlogPost(post));
    } else {
      let allPosts = await getAllBlogPosts();
      store.dispatch(putAllBlogs(allPosts));
    }
    
    store.dispatch(putPageTitle('Blog Page'));

    return { id };
  }

  render () {
    return <div>
      <Layout title={this.props.pageTitle}>
        {this.props.id && this.props.currentBlogPost ? (<BlogView />) : (<BlogList />)}
      </Layout>

      <style jsx>{`
        p {
          color: pink;
        }
      `}</style>
    </div>
  }
}  

const mapStateToProps = state => ({
  pageTitle: state.pageTitle,
  currentBlogPost: state.currentBlogPost
});

export default withRedux(initStore, mapStateToProps)(Blog);