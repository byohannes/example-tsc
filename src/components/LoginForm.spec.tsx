import { screen, render, fireEvent } from "@testing-library/react";

import LoginForm, { Props } from "./LoginForm";

const renderLoginForm = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    shouldRemember: true,
    onUsernameChange () {
      return;
    },
    onPasswordChange () {
      return;
    },
    onRememberChange () {
      return;
    },
    onSubmit () {
      return;
    }
  }

  return render(<LoginForm {...defaultProps} {...props} />)
}

describe("<LoginForm />", () => {
  it("should display a blank login form, with remember me checked by default", async () => {    
    renderLoginForm()

    expect(await screen.findByTestId('login-form')).toHaveFormValues({
      username: '',
      password: '',
      remember: true
    })    
  });

  it('should allow typing a username', async ()=> {
    const mockOnUsernameChange = jest.fn() //mock the function onUsernameChange
    const onUsernameChange = mockOnUsernameChange;
    renderLoginForm({ onUsernameChange })

    fireEvent.change(await screen.findByTestId('username'), { target : { value: 'Ali Yohannes Okasana'}})
    expect(onUsernameChange).toHaveBeenCalledWith('Ali Yohannes Okasana')
  })
});