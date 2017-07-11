/* eslint-disable no-undef */
import { SUBMIT_SEARCH_FORM } from './search_bar.constants';
import { submitSearchForm } from './search_bar.actions';

describe('Search bar actions:', () => {
  it('submitSearchForm should return action of type SUBMIT_SEARCH_FORM', () => {
    const result = submitSearchForm({ supplier: 'asd', rating: 2 });
    expect(result.type).toBe(SUBMIT_SEARCH_FORM);
  });

  it('submitSearchForm should return passed params', () => {
    const result = submitSearchForm({ supplier: 'asd', rating: 3 });
    expect(result.supplier).toBe('asd');
    expect(result.rating).toBe(3);
  });
});
