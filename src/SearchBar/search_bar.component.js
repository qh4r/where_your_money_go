import React, { Component } from 'react';
import './search_bar.component.sass';

class SearchBarComponent extends Component {

  componentWillMount() {

  }

  componentWillReceiveProps() {

  }

  render() {
    return (
      <form>
        <div className="search-bar">
          <input placeholder="Search suppliers" type="text" />
          <div className="select-wrapper">
            <select defaultValue={null} name="rating-picker" id="rating-picker">
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

export {
  SearchBarComponent,
};
