/* eslint quotes: 0 */
/* eslint max-len: 0 */
import React, { Component, PropTypes } from 'react';
import Const from '../Const';

class DateFilter extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }

  setDefaultDate() {
    let defaultDate = '';
    if (this.props.defaultValue) {
        // Set the appropriate format for the input type=date, i.e. "YYYY-MM-DD"
      const defaultValue = new Date(this.props.defaultValue);
      defaultDate = `${defaultValue.getFullYear()}-${("0" + (defaultValue.getMonth() + 1)).slice(-2)}-${("0" + defaultValue.getDate()).slice(-2)}`;
    }
    return defaultDate;
  }

  filter(event) {
    const dateValue = event.target.value;
    if (dateValue) {
      this.props.filterHandler(new Date(dateValue), Const.FILTER_TYPE.DATE);
    } else {
      this.props.filterHandler(null, Const.FILTER_TYPE.DATE);
    }
  }

  componentDidMount() {
    const dateValue = this.refs.inputDate.defaultValue;
    if (dateValue) {
      this.props.filterHandler(new Date(dateValue), Const.FILTER_TYPE.DATE);
    }
  }

  render() {
    return (
        <input ref='inputDate'
           className='filter date-filter form-control'
           type='date'
           onChange={ this.filter }
           defaultValue={ this.setDefaultDate() } />
    );
  }
}

DateFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  defaultValue: PropTypes.object,
  columnName: PropTypes.string
};

export default DateFilter;
