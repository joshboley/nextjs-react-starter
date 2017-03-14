import { PUT_CURRENT_BLOG_POST } from '../actions';

export default function (state = null, action) {
  const { type, value } = action;

  switch (type) {
    case PUT_CURRENT_BLOG_POST: 
      return value;
    default:
      return state;
  }
}