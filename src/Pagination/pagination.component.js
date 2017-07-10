import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './pagination.component.sass';

const Page = ({ pageNumber, active }) => (
  <i className={classnames('page-number', { active })}>{pageNumber + 1}</i>
);

Page.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  active: PropTypes.bool,
};

Page.defaultProps = {
  active: false,
};

const parsePages = (max, activePage, pages = [], current = 0) =>
  ((Math.abs(current) < max)
    ? parsePages(max, activePage, [...pages,
      <Page
        key={max + current}
        active={activePage === current}
        pageNumber={current
        }
      />], current + 1)
    : pages);

const PaginationComponent = ({ availablePages, activePage }) => {
  const pages = parsePages(availablePages, activePage);
  const leftArrowVisible = activePage > 0;
  const rightArrowVisible = activePage < (availablePages - 1);
  return (
    <div className="pagination-container">
      {leftArrowVisible
      && <FontAwesome
        className="left-arrow"
        tag="i"
        name="angle-left"
      />}
      {pages}
      {rightArrowVisible
      && <FontAwesome
        className="right-arrow"
        tag="i"
        name="angle-right"
      />}
    </div>
  );
};

PaginationComponent.propTypes = {
  availablePages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
};

export {
  PaginationComponent,
  Page,
  parsePages,
};
