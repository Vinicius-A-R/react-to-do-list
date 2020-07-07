import React from 'react';

import { FaCheck, FaTrash, FaTimes } from 'react-icons/fa';

import { Container, Table } from './styles';

export default function List(props) {
  const renderRows = () => {
    const list = props.listTask || [];

    return list.map((todo) => (
      <tr key={todo._id} className={todo.done ? 'markAsDone' : ''}>
        {todo.done ? (
          <td>
            <FaTimes
              className={todo.done ? '' : 'show'}
              color="#FC041C"
              onClick={() => props.warning(todo)}
            />
          </td>
        ) : (
          <td>
            <FaCheck
              className={todo.done ? 'show' : ''}
              color="#04FC04"
              onClick={() => props.done(todo)}
            />
          </td>
        )}

        <td>
          <FaTrash color="" onClick={() => props.remove(todo)} />
        </td>

        <td>{todo.description}</td>
      </tr>
    ));
  };

  return (
    <>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>To Do:</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </Table>
      </Container>
    </>
  );
}
