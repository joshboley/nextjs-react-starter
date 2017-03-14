import { PUT_ALL_BLOGS } from './';

export function putAllBlogs (blogList) {
  return {
    type: PUT_ALL_BLOGS,
    value: blogList
  };
}