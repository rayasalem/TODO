import React from 'react';

const ToDo = ({ task, onRemove }) => {
  return (
    <div>
      <p>{task}</p>
      <button onClick={onRemove}>Remove Task</button>
    </div>
  );
};

export default ToDo;
