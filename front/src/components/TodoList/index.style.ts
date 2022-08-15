import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 1fr;
  justify-items: center;
  align-items: center;
  width: 80vw;
  min-height: 100vh;
  margin: 0 auto;
  border: 1px solid;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const TodoListContainer = styled.div`
  border: 1px solid;
  width: 100%;
  height: 100%;
`;
