import React from 'react';
import { connect } from 'react-redux';

class BlogView extends React.Component {

  render () {
    return <div>
        {
          !(this.props.currentBlogPost) ? 
          (<h3>Sorry, we were unable to get the post you requested.</h3>) :
          (<div>
            <h2>Blog Id: {this.props.currentBlogPost.id}</h2>
            <h2>Blog Title: {this.props.currentBlogPost.title}</h2>
            <p>{this.props.currentBlogPost.post}</p>
           </div>)
        }

      <style jsx>{`
        p {
          color: orange;
        }
      `}</style>
    </div>
  }
}  

const mapStateToProps = state => ({
  currentBlogPost: state.currentBlogPost
});

export default connect(mapStateToProps)(BlogView);