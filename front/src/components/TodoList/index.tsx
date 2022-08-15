import { useState } from "react";
import { Container, Title, TodoListContainer } from "./index.style";
import List from "./List";

function TodoList() {
  const [todoList, seTtodoList] = useState([]);
  return (
    <Container>
      <Title>Today Todo List</Title>
      <TodoListContainer>
        <ul>
          <List />
          <List />
          <List />
          <List />
        </ul>
      </TodoListContainer>
    </Container>
  );
}

export default TodoList;
