/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Page, PaginationComponent, parsePages } from './pagination.component';


describe('Pagination: ', () => {
  it('should render without errors', () => {
    const pagination = mount(<PaginationComponent availablePages={5} activePage={0} />);
    expect(pagination.exists()).toBe(true);
    expect(pagination.hasClass('pagination-container')).toBe(true);
  });

  it('should render right amount of page links', () => {
    const pagination = mount(<PaginationComponent availablePages={5} activePage={0} />);
    expect(pagination.find('.page-number').length).toBe(5);
    pagination.setProps({ availablePages: 1 });
    expect(pagination.find('.page-number').length).toBe(1);
    pagination.setProps({ availablePages: 3 });
    expect(pagination.find('.page-number').length).toBe(3);
    pagination.setProps({ availablePages: 0 });
    expect(pagination.find('.page-number').length).toBe(0);
  });

  it('should render left arrow if active page > 0', () => {
    const pagination = mount(<PaginationComponent availablePages={5} activePage={4} />);
    expect(pagination.find('.left-arrow').exists()).toBe(true);
    pagination.setProps({ activePage: 0 });
    expect(pagination.find('.left-arrow').exists()).toBe(false);
    pagination.setProps({ activePage: 2 });
    expect(pagination.find('.left-arrow').exists()).toBe(true);
  });

  it('should render right arrow when when active page < (available Pages - 1)', () => {
    const pagination = mount(<PaginationComponent availablePages={5} activePage={4} />);
    expect(pagination.find('.right-arrow').exists()).toBe(false);
    pagination.setProps({ activePage: 3 });
    expect(pagination.find('.right-arrow').exists()).toBe(true);
    pagination.setProps({ activePage: 0 });
    expect(pagination.find('.right-arrow').exists()).toBe(true);
  });

  it('parsePages should return right amount of elements', () => {
    let result = parsePages(0, 0);
    expect(result.length).toBe(0);
    result = parsePages(-1, -2);
    expect(result.length).toBe(0);
    result = parsePages(4, 1);
    expect(result.length).toBe(4);
  });

  it('Page should render with number increased by one', () => {
    const page = mount(<Page pageNumber={3} active={false} />);
    expect(page.find('i').text()).toBe('4');
    page.setProps({ pageNumber: 5 });
    expect(page.find('i').text()).toBe('6');
  });

  it('Page should have class active if given right prop', () => {
    const page = mount(<Page pageNumber={3} active={false} />);
    expect(page.hasClass('active')).toBe(false);
    page.setProps({ active: true });
    expect(page.hasClass('active')).toBe(true);
  });
});
