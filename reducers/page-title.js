import { PUT_PAGE_TITLE } from '../actions';

export default function (state = 'Default Title', action) {
  const { type, value } = action;

  switch (type) {
    case PUT_PAGE_TITLE: 
      return value;
    default:
      return state;
  }
}