import { PUT_ALL_BLOGS } from '../actions';

export default function (state = [], action) {
  const { type, value } = action;

  switch (type) {
    case PUT_ALL_BLOGS: 
      return value;
    default:
      return state;
  }
}