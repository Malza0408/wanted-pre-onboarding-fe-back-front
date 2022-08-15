import React, { useEffect, useState } from "react";
import { Container, Form, SwitchButton, Title } from "./index.style";
import AuthForm from "../../components/Auth/AuthForm";

function Main() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const handleSetIsLoginPage = (isLogin: boolean) => {
    setIsLoginPage(isLogin);
  };

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
        <AuthForm
          isLoginPage={isLoginPage}
          handleSetIsLoginPage={handleSetIsLoginPage}
        />
      </Form>
    </Container>
  );
}

export default Main;
