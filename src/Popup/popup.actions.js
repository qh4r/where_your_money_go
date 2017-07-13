import { HIDE_POPUP, SHOW_POPUP } from './popup.constants';

export function hidePopup() {
  return {
    type: HIDE_POPUP,
  };
}

export function showPopup(index) {
  return {
    type: SHOW_POPUP,
    index,
  };
}
