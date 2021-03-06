import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../0_actions'

const AddTodoView = ({ dispatch }) => {
  let input;

  const submitForm = e => {
    e.preventDefault();
    if (!input.value.trim()) { return; }
    dispatch(addTodo(input.value));
    input.value = '';
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodoView)