/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './pagination.component.sass';

const Page = ({ pageNumber, active, selectPage }) => (
  <span
    onClick={() => selectPage(pageNumber)}
    className={classnames('page-number', { active })}
  >
    {pageNumber + 1}
  </span>
);

Page.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

Page.defaultProps = {
  active: false,
};

const parsePages = selectPage =>
  function parseNext(max, activePage, pages = [], current = 0) {
    return ((Math.abs(current) < max)
      ? parseNext(max, activePage, [...pages,
        <Page
          key={current + activePage}
          active={activePage === current}
          pageNumber={current}
          selectPage={selectPage}
        />,
      ], current + 1)
      : pages);
  };

const PaginationComponent = ({ availablePages, activePage, selectPage }) => {
  const pages = parsePages(selectPage)(availablePages, activePage);
  const leftArrowVisible = activePage > 0;
  const rightArrowVisible = activePage < (availablePages - 1);
  return (
    <div className="pagination-container">
      {leftArrowVisible &&
      <span
        className="left-arrow"
        onClick={() => selectPage(activePage - 1)}
      >
        <FontAwesome
          tag="i"
          name="angle-left"
        />
      </span>}
      {pages}
      {rightArrowVisible &&
      <span
        className="right-arrow"
        onClick={() => selectPage(activePage + 1)}
      >
        <FontAwesome
          tag="i"
          name="angle-right"
        />
      </span>}
    </div>
  );
};

PaginationComponent.propTypes = {
  availablePages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired,
};

export {
  PaginationComponent,
  Page,
  parsePages,
};
