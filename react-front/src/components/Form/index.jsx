import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';

import { Container, TodoForm, Button } from './styles';

export default function Form(props) {
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      e.ctrlKey ? props.handleSearch() : props.submitTask();
    } else if (e.key === 'Escape') {
      props.handleClear();
    }
  };

  return (
    <>
      <Container>
        <TodoForm>
          <Button buttonType="button" onClick={props.submitTask}>
            <FaPlus />
          </Button>

          <Button buttonType="button" onClick={props.handleSearch}>
            <FaSearch />
          </Button>

          <Button buttonType="button" onClick={props.handleClear}>
            <GrPowerReset color="#fff" />
          </Button>

          <input
            type="text"
            value={props.addTask}
            onChange={props.handleInputTask}
            onKeyUp={handleKey}
            autoFocus
            placeholder="add task"
          />
        </TodoForm>
      </Container>
    </>
  );
}
