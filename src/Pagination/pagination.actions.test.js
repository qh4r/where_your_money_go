/* eslint-disable no-undef */
import { PAGE_SELECTION } from './pagination.constants';
import { selectPage } from './pagination.actions';

describe('Pagination actions:', () => {
  it('selectPage should return action of type PAGE_SELECTION', () => {
    const result = selectPage(5);
    expect(result.type).toBe(PAGE_SELECTION);
  });

  it('selectPage should return passed activePage number', () => {
    const result = selectPage(5);
    expect(result.activePage).toBe(5);
  });
});
