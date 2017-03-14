import { PUT_CURRENT_BLOG_POST } from './';

export function putCurrentBlogPost (post) {
  return {
    type: PUT_CURRENT_BLOG_POST,
    value: post
  };
}