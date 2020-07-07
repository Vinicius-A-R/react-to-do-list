import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-bottom: 32px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  background-color: #222;
  color: #f4f5f7;

  padding: 16px;
  border-radius: 8px;

  a {
    color: #f4f5f7;
    text-decoration: none;
    text-transform: uppercase;

    font-weight: 700;
    margin-right: 16px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  font-size: 24px;
  margin-left: 8px;
  margin-right: 32px;

  cursor: pointer;

  span {
    font-weight: 700;
    margin-left: 8px;
  }
`;
