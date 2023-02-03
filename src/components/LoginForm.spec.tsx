import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";

import LoginForm, { Props } from "./LoginForm";

describe("<LoginForm />", () => {
  it("should display a blank login form, with remember me checked by default", async () => {
    const onUsernameChange = () => {
      return;
    }
    const onPasswordChange = () => {
      return;
    }
    const onRememberChange = () => {
      return;
    }
    const onSubmit = () => {
      return;
    }
    render(<LoginForm shouldRemember={true} onUsernameChange={onUsernameChange} onRememberChange={onRememberChange} onPasswordChange={onPasswordChange}  onSubmit={onSubmit} />)

    expect(await screen.findByTestId('login-form')).toHaveFormValues({
      username: '',
      password: '',
      remember: true
    })    
  });
});