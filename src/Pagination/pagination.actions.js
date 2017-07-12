import { PAGE_SELECTION } from './pagination.constants';

export function selectPage(activePage) {
  return {
    type: PAGE_SELECTION,
    activePage,
  };
}
