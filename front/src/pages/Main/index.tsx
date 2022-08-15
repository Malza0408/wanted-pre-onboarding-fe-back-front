import React, { useEffect, useState } from "react";
import AuthForm from "../../components/Auth/AuthForm";
import { Container, Form, SwitchButton, Title } from "./index.style";

function Main() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
    }
  }, []);

  return (
    <Container>
      <Title>Welcome To Wanted pre onboarding Todo List</Title>
      <Form>
        {isLoginPage ? (
          <SwitchButton onClick={() => setIsLoginPage(false)}>
            회원가입 페이지로 이동
          </SwitchButton>
        ) : (
          <SwitchButton onClick={() => setIsLoginPage(true)}>
            로그인 페이지로 이동
          </SwitchButton>
        )}
        <AuthForm />
      </Form>
    </Container>
  );
}

export default Main;
