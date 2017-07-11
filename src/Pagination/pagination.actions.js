import { PAGE_LIMIT_UPDATE, PAGE_SELECTION } from './pagination.constants';

export function selectPage(activePage) {
  return {
    type: PAGE_SELECTION,
    activePage,
  };
}

export function updateAvailablePages(availablePages) {
  return {
    type: PAGE_LIMIT_UPDATE,
    availablePages,
  };
}
