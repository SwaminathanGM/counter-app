import React from 'react';
import Counter from './counter';

const Counters = (props) => {
  const { onReset, counters, onDelete, onIncrement } = props;
  return (
    <div>
      <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
