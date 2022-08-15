import React from "react";
import { Container } from "./AuthForm.style";

function AuthForm() {
  return (
    <form>
      <Container>
        <label>
          이메일
          <input type="email" name="email" />
        </label>
      </Container>
      <Container>
        <label>
          비밀번호
          <input type="password" name="password" />
        </label>
      </Container>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default AuthForm;
