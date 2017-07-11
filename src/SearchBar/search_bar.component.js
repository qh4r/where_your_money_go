import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './search_bar.component.sass';

class SearchBarComponent extends Component {

  componentWillMount() {

  }

  componentWillReceiveProps() {

  }

  // this method was made for sake of testability
  // otherwise would be fine with default reset
  onReset = (e) => {
    e.preventDefault();
    this.supplierInput.value = '';
    this.rateSelect.value = 0;
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      supplier: this.supplierInput.value,
      rating: +this.rateSelect.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} onReset={this.onReset}>
        <div className="search-bar">
          <input
            ref={(supplierInput) => {
              this.supplierInput = supplierInput;
            }}
            placeholder="Search suppliers"
            type="text"
          />
          <div className="select-wrapper">
            <select
              ref={(rateSelect) => {
                this.rateSelect = rateSelect;
              }}
              defaultValue={null}
              name="rating-picker"
              id="rating-picker"
            >
              <option value={0}>Select pound rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <input type="reset" value="Reset" action="reset" />
          <input type="submit" value="Submit" action="submit" />
        </div>
      </form>
    );
  }
}

SearchBarComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export {
  SearchBarComponent,
};
