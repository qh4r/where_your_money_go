/* eslint-disable no-undef */
import { hidePopup, showPopup } from './popup.actions';
import { HIDE_POPUP, SHOW_POPUP } from './popup.constants';

describe('Popup actions:', () => {
  describe('hidePopup: ', () => {
    it('should return action of type HIDE_POPUP', () => {
      const actionResult = hidePopup();
      expect(actionResult.type).toBe(HIDE_POPUP);
    });
  });

  describe('showPopup: ', () => {
    it('should return passed index', () => {
      const actionResult = showPopup(1);
      expect(actionResult.index).toBe(1);
    });

    it('should return action of type SHOW_POPUP', () => {
      const actionResult = showPopup(2);
      expect(actionResult.type).toBe(SHOW_POPUP);
    });
  });
});
