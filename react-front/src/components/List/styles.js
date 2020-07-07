import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 32px;
  padding: 8px;

  border: 1px solid #222;
  border-radius: 4px;
  background-color: #fff;
`;

export const Table = styled.table`
  width: 100%;

  display: grid;
  grid-template-rows: 40px auto;

  thead {
    font-size: 20px;
    text-align: left;
  }

  tbody {
    tr {
      display: grid;
      grid-template-columns: 40px 40px auto;
      grid-template-rows: 40px;
      align-items: center;
      border: 0;

      &.markAsDone {
        color: #c4cccc;
        text-decoration: line-through;
      }

      & + tr {
        border-top: 1px solid #222;
        border-top: 1px solid #c4cccc;
      }

      &:hover {
        svg {
          opacity: 1;

          &:hover {
            transform: scale(1.3);
          }
        }
      }

      td {
        padding-left: 12px;

        svg {
          opacity: 0;

          color: #222;
          cursor: pointer;

          &.show {
            display: none;
          }
        }
      }
    }
  }
`;
