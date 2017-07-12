/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './pagination.component.sass';


const IconButton = ({ iconName, visible, onClick }) => (
  <button
    id={iconName}
    className={classnames('arrow', { hidden: !visible })}
    onClick={onClick}
    disabled={!visible}
  >
    <FontAwesome
      tag="i"
      name={iconName}
    />
  </button>
);

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Page = ({ pageNumber, active, selectPage }) => (
  <button
    onClick={() => selectPage(pageNumber)}
    className={classnames('page-number', { active })}
  >
    {pageNumber + 1}
  </button>
);

Page.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

Page.defaultProps = {
  active: false,
};

const PaginationComponent = ({
                               left,
                               right,
                               leftEnd,
                               rightEnd,
                               pageNumbers,
                               activePage,
                               selectPage,
                             }) => {
  const pages = pageNumbers.map(page => (
    <Page
      key={page}
      selectPage={selectPage}
      pageNumber={page}
      active={activePage === page}
    />));
  return (
    <div className="pagination-container">
      <IconButton
        onClick={() => selectPage(pageNumbers[0])}
        visible={leftEnd}
        iconName="angle-double-left"
      />
      <IconButton
        onClick={() => selectPage(activePage - 1)}
        visible={left}
        iconName="angle-left"
      />
      {pages}
      <IconButton
        onClick={() => selectPage(activePage + 1)}
        visible={right}
        iconName="angle-right"
      />
      <IconButton
        onClick={() => selectPage(pageNumbers[pageNumbers.length - 1])}
        visible={rightEnd}
        iconName="angle-double-right"
      />
    </div>
  );
};

PaginationComponent.propTypes = {
  left: PropTypes.bool.isRequired,
  leftEnd: PropTypes.bool.isRequired,
  pageNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  right: PropTypes.bool.isRequired,
  rightEnd: PropTypes.bool.isRequired,
  activePage: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired,
};

export {
  PaginationComponent,
  Page,
};
