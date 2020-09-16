import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  margin: 20px 0;
  border: 1px solid lightgray;
  background: white;
  position: relative;

  .order__id {
    position: absolute;
    top: 40px;
    right: 20px;
  }

  .order__total {
    font-weight: 500;
    text-align: right;
  }
`;
