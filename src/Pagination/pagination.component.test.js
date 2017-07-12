/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Page, PaginationComponent } from './pagination.component';


describe('Pagination: ', () => {
  it('should render without errors', () => {
    const pagination = mount(
      <PaginationComponent
        selectPage={() => {
        }}
        activePage={0}
        pageNumbers={[1, 2, 3]}
        left
        leftEnd
        right
        rightEnd
      />);
    expect(pagination.exists()).toBe(true);
    expect(pagination.hasClass('pagination-container')).toBe(true);
  });

  it('should render right amount of page links', () => {
    const pagination = mount(
      <PaginationComponent
        selectPage={() => {
        }}
        activePage={0}
        pageNumbers={[1, 2, 3, 4, 5]}
        left
        leftEnd
        right
        rightEnd
      />);
    expect(pagination.find('.page-number').length).toBe(5);
    pagination.setProps({ pageNumbers: [5, 6, 7] });
    expect(pagination.find('.page-number').length).toBe(3);
    pagination.setProps({ pageNumbers: [1] });
    expect(pagination.find('.page-number').length).toBe(1);
    pagination.setProps({ pageNumbers: [] });
    expect(pagination.find('.page-number').length).toBe(0);
  });

  it('should render left arrow when left is set', () => {
    const pagination = mount(
      <PaginationComponent
        selectPage={() => {
        }}
        activePage={0}
        pageNumbers={[1, 2, 3, 4, 5]}
        left={false}
        leftEnd
        right
        rightEnd
      />);
    expect(pagination.find('#angle-left').hasClass('hidden')).toBe(true);
    pagination.setProps({ left: true });
    expect(pagination.find('#angle-left').hasClass('hidden')).toBe(false);
  });

  it('should render leftEnd arrow when leftEnd is set', () => {
    const pagination = mount(
      <PaginationComponent
        selectPage={() => {
        }}
        activePage={0}
        pageNumbers={[1, 2, 3, 4, 5]}
        leftEnd={false}
        left
        right
        rightEnd
      />);
    expect(pagination.find('#angle-double-left').hasClass('hidden')).toBe(true);
    pagination.setProps({ leftEnd: true });
    expect(pagination.find('#angle-double-left').hasClass('hidden')).toBe(false);
  });

  it('should render right arrow when right is set', () => {
    const pagination = mount(
      <PaginationComponent
        selectPage={() => {
        }}
        activePage={0}
        pageNumbers={[1, 2, 3, 4, 5]}
        left={false}
        right={false}
        leftEnd
        rightEnd
      />);
    expect(pagination.find('#angle-right').hasClass('hidden')).toBe(true);
    pagination.setProps({ right: true });
    expect(pagination.find('#angle-right').hasClass('hidden')).toBe(false);
  });

  it('should render rightEnd arrow when rightEnd is set', () => {
    const pagination = mount(
      <PaginationComponent
        selectPage={() => {
        }}
        activePage={0}
        pageNumbers={[1, 2, 3, 4, 5]}
        left
        rightEnd={false}
        leftEnd
        right
      />);
    expect(pagination.find('#angle-double-right').hasClass('hidden')).toBe(true);
    pagination.setProps({ rightEnd: true });
    expect(pagination.find('#angle-double-right').hasClass('hidden')).toBe(false);
  });

  it('should increase number of pages on right arrow callback', () => {
    const onSelect = jest.fn();
    const pagination = mount(
      <PaginationComponent
        selectPage={onSelect}
        activePage={2}
        pageNumbers={[1, 2, 3, 4, 5]}
        left
        leftEnd
        right
        rightEnd
      />);
    pagination.find('#angle-right').simulate('click');
    expect(onSelect).toBeCalledWith(3);
  });

  it('should go to last page on rightEnd arrow callback', () => {
    const onSelect = jest.fn();
    const pagination = mount(
      <PaginationComponent
        selectPage={onSelect}
        activePage={2}
        pageNumbers={[0, 1, 2, 3, 4, 5]}
        left
        leftEnd
        right
        rightEnd
      />);
    pagination.find('#angle-double-right').simulate('click');
    expect(onSelect).toBeCalledWith(5);
  });

  it('should decrease number of pages on left arrow callback', () => {
    const onSelect = jest.fn();
    const pagination = mount(
      <PaginationComponent
        selectPage={onSelect}
        activePage={3}
        pageNumbers={[0, 1, 2, 3, 4, 5]}
        left
        leftEnd
        right
        rightEnd
      />);
    pagination.find('#angle-left').simulate('click');
    expect(onSelect).toBeCalledWith(2);
  });

  it('should go to start on leftEnd arrow callback', () => {
    const onSelect = jest.fn();
    const pagination = mount(
      <PaginationComponent
        selectPage={onSelect}
        activePage={3}
        pageNumbers={[0, 1, 2, 3, 4, 5]}
        left
        leftEnd
        right
        rightEnd
      />);
    pagination.find('#angle-double-left').simulate('click');
    expect(onSelect).toBeCalledWith(0);
  });

  it('should call selected with clicked page number', () => {
    const onSelect = jest.fn();
    const pagination = mount(
      <PaginationComponent
        selectPage={onSelect}
        activePage={0}
        pageNumbers={[0, 1, 2, 3, 4, 5]}
        left
        leftEnd
        right
        rightEnd
      />);
    pagination.find('.page-number').at(2).simulate('click');
    expect(onSelect).toBeCalledWith(2);
  });

  describe('Page: ', () => {
    it('Page should render with number increased by one', () => {
      const page = mount(
        <Page
          selectPage={() => {
          }}
          pageNumber={3}
          active={false}
        />);
      expect(page.find('button').text()).toBe('4');
      page.setProps({ pageNumber: 5 });
      expect(page.find('button').text()).toBe('6');
    });

    it('Page should have class active if given right prop', () => {
      const page = mount(
        <Page
          selectPage={() => {
          }}
          pageNumber={3}
          active={false}
        />);
      expect(page.hasClass('active')).toBe(false);
      page.setProps({ active: true });
      expect(page.hasClass('active')).toBe(true);
    });

    it('Page should call select when click', () => {
      const onSelect = jest.fn();
      const page = mount(<Page pageNumber={2} selectPage={onSelect} />);
      page.simulate('click');
      expect(onSelect).toBeCalledWith(2);
    });
  });
});
