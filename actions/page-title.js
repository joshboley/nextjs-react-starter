import { PUT_PAGE_TITLE } from './';

export function putPageTitle (pageTitle) {
  return {
    type: PUT_PAGE_TITLE,
    value: pageTitle
  };
}