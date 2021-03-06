import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btn-sm'
        >
          Add Item
        </button>
        <button
          className='btn btn-danger btn-sm m-2'
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    return (classes += this.props.counter.value === 0 ? 'warning' : 'primary');
  }

  formatCount() {
    return this.props.counter.value === 0 ? '0' : this.props.counter.value;
  }
}

export default Counter;
