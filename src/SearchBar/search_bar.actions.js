import { SUBMIT_SEARCH_FORM } from './search_bar.constants';

export function submitSearchForm({ supplier, rating }) {
  return {
    type: SUBMIT_SEARCH_FORM,
    supplier,
    rating,
  };
}
