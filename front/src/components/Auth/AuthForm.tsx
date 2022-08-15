import React, { useState } from "react";
import { post } from "../../api/api";
import { Container } from "./AuthForm.style";

interface AuthFormProp {
  isLoginPage: boolean;
}

interface TokenValue {
  access_token: string;
}

interface AuthValues {
  email: string;
  password: string;
}

interface AuthValidValues {
  emailValid: boolean;
  passwordValid: boolean;
}

function AuthForm({ isLoginPage }: AuthFormProp) {
  const [formValues, setFormValues] = useState<AuthValues>({
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState<AuthValidValues>({
    emailValid: false,
    passwordValid: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((cur) => {
      const newValues = { ...cur };
      newValues[e.target.name as keyof AuthValues] = e.target.value;
      return newValues;
    });
  };

  const postForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginPage) {
      return;
    } else {
      const result = post<TokenValue>("/auth/signup");
    }
  };
  return (
    <form onSubmit={postForm}>
      <Container>
        <label>
          이메일
          <input type="email" name="email" onChange={handleChange} />
        </label>
      </Container>
      <Container>
        <label>
          비밀번호
          <input
            type="password"
            name="password"
            autoComplete="true"
            onChange={handleChange}
          />
        </label>
      </Container>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default AuthForm;
