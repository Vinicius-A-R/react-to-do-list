import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 16px;
  margin-top: 16px;

  border: 1px solid var(--color-dark);
  border-radius: 4px;
  background-color: #fff;
`;

export const TodoForm = styled.form`
  display: flex;
  align-items: center;

  width: 100%;

  input {
    width: 100%;
    height: 32px;
    padding: 8px;

    border: 1px solid var(--color-primary);
    border-radius: 4px;
  }
`;

export const Button = styled.button.attrs((props) => ({
  type: props.buttonType,
  disabled: props.test,
}))`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  margin-right: 12px;

  color: #fff;
  font-size: 12px;

  border: 0;
  border-radius: 4px;
  background-color: var(--color-primary);

  svg {
    color: #fff;
  }

  &:hover {
    font-size: 14px;
    background-color: var(--color-primary-light);
  }
`;
