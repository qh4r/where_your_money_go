/* eslint-disable no-undef */
import { PAGE_LIMIT_UPDATE, PAGE_SELECTION } from './pagination.constants';
import { selectPage, updateAvailablePages } from './pagination.actions';

describe('Pagination actions:', () => {
  it('selectPage should return action of type PAGE_SELECTION', () => {
    const result = selectPage(5);
    expect(result.type).toBe(PAGE_SELECTION);
  });

  it('selectPage should return passed activePage number', () => {
    const result = selectPage(5);
    expect(result.activePage).toBe(5);
  });

  it('updatePageLimit should return action of type PAGE_LIMIT_UPDATE', () => {
    const result = updateAvailablePages(3);
    expect(result.type).toBe(PAGE_LIMIT_UPDATE);
  });

  it('updatePageLimit should return passed pageLimit number', () => {
    const result = updateAvailablePages(3);
    expect(result.availablePages).toBe(3);
  });
});
