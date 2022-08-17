import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get, post } from "../../api/api";
import { Response } from "../../common/types/interface";
import { API_URL } from "../../common/utils/constant";
import List from "./List";
import {
  TodoListContainer as OuterContainer,
  InnerContainer,
  Title,
  PostForm,
} from "./TodoListContainer.style";

interface TodoValues {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface PostTodoValue {
  todo: string;
}

type PostTodoType = TodoValues & Response;
type GetTodosType = TodoValues[] & Response;

function TodoListContainer() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<TodoValues[]>([]);
  const [addTodo, setAddTodo] = useState("");

  const postTodoList = () => {
    const postTodo: PostTodoValue = {
      todo: addTodo,
    };
    return post<PostTodoType, PostTodoValue>(API_URL.TODO, postTodo);
  };

  const getTodoList = () => {
    return get<GetTodosType>(API_URL.TODO);
  };

  const PostAndGetTodoList = async (e: React.FormEvent) => {
    e.preventDefault();
    await postTodoList();
    const result = await getTodoList();
    setTodoList(result);
  };

  const handleChangeAddTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddTodo(e.target.value);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    const getTodos = async () => {
      const result = await getTodoList();
      setTodoList(result);
    };
    getTodos();
  }, []);

  return (
    <OuterContainer>
      <Title>Today Todo List</Title>
      <InnerContainer>
        <PostForm>
          <form onSubmit={PostAndGetTodoList}>
            <label>
              Add Todo List
              <input
                type="text"
                name="todoList"
                value={addTodo}
                onChange={handleChangeAddTodo}
              />
            </label>
            <input type="submit" value="할 일 추가" />
          </form>
        </PostForm>
        {todoList && (
          <ul>
            {todoList?.map((todo, index) => (
              <List todo={todo.todo} key={`key-${index}`} />
            ))}
          </ul>
        )}
      </InnerContainer>
    </OuterContainer>

    // const submitLoginForm = () => {
    //     // ...
    // }

    //     <form>
    //         <input type="text" />
    //         <input type="password" />
    //         <button type="submit" className={isFormValid ? "button" : "button invalid"} onClick={isFormValid ? submitLoginForm : undefined}/>
    //     </form>
  );
}

export default TodoListContainer;
