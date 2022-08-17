import React from "react";
import { Container } from "./index.style";

interface ListProp {
  todo: string;
}

function List({ todo }: ListProp) {
  return <Container>{todo}</Container>;
}

export default List;
