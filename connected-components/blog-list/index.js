import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import { putCurrentBlogPost } from '../../actions/blog-post';
import { getBlogPost } from '../../data/blogs';

class BlogList extends React.Component {

  render () {
    return <div>
        {
          !(this.props.allBlogs && this.props.allBlogs.map) ? 
          <h3>Sorry, there are currently no blog posts.</h3> :
          this.props.allBlogs.map((blog) => {
            return (<Link href={`/blog?id=${blog.id}`} as={`/blog/${blog.id}`}>
              <a onClick={(e) => this.props.onBlogClick(e, blog.id)}>Title: {blog.title}</a>
            </Link>)
          })
        }

      <style jsx>{`
        a {
          display: block;
        }
      `}</style>
    </div>
  }
}  

function setCurrentBlogPost (e, id, dispatch) {
  e.preventDefault();
  getBlogPost.then((blog) => dispatch(putCurrentBlogPost(blog)));
}

const mapStateToProps = state => ({
  allBlogs: state.allBlogs
});

const mapDispatchToProps = dispatch => ({
  onBlogClick: (e, id) => setCurrentBlogPost(e, id, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);