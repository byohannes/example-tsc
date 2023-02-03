import React, { ChangeEvent, FormEvent, useState } from "react";

export interface Props {
  onUsernameChange: (username: string) => void;
  onPasswordChange: (password: string) => void;
  onRememberChange: (remember: boolean) => void;
  onSubmit: (username: string, password: string) => void;
  shouldRemember: boolean;
}

const LoginForm = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(props.shouldRemember);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
    props.onUsernameChange(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    props.onPasswordChange(value);
  };

  const handleRememberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setRemember(checked);
    props.onRememberChange(checked);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(username, password);
  };

  return (
    <form data-testid="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        data-testid="username"
        type="text"
        name="username"
        value={username}
        onChange={handleUsernameChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        data-testid="password"
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <label>
        <input
          data-testid="remember"
          name="remember"
          type="checkbox"
          checked={remember}
          onChange={handleRememberChange}
        />
        Remember me?
      </label>

      <button type="submit" data-testid="submit">
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;