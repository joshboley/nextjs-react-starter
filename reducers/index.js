import { combineReducers } from 'redux';

import pageTitle from './page-title';
import currentBlogPost from './blog-post';
import allBlogs from './all-blogs';

export default combineReducers({
  pageTitle,
  currentBlogPost,
  allBlogs
});