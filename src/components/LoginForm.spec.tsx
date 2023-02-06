import { screen, render, fireEvent } from "@testing-library/react";

import LoginForm, { Props } from "./LoginForm";

const renderLoginForm = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    shouldRemember: false,
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
      remember: false
    })    
  });

  it('should allow typing a username', async ()=> {
    const mockOnUsernameChange = jest.fn() //mock the function onUsernameChange
    const onUsernameChange = mockOnUsernameChange;
    renderLoginForm({ onUsernameChange })

    fireEvent.change(await screen.findByTestId('username'), { target : { value: 'Ali Yohannes Okasana'}})
    expect(onUsernameChange).toHaveBeenCalledWith('Ali Yohannes Okasana')
  })

  it('should allow entering a password', async ()=> {
    const mockOnPasswordChange = jest.fn() //mock the function onPasswordChange
    const onPasswordChange = mockOnPasswordChange;
    renderLoginForm({ onPasswordChange })

    fireEvent.change(await screen.findByTestId('password'), { target : { value: 'AOY123456'}})
    expect(onPasswordChange).toHaveBeenCalledWith('AOY123456')
    expect(await screen.findByLabelText('Password:')).toBeTruthy()
  })

  it('should enable toggling remember me', async ()=> {
    const onRememberChange = jest.fn() //mock the function onPasswordChange;
    renderLoginForm({ onRememberChange, shouldRemember: true })
    fireEvent.click(await screen.findByTestId('remember'))
    expect(onRememberChange).toHaveBeenCalledWith(false)
    fireEvent.click(await screen.findByTestId('remember'))
    expect(onRememberChange).toHaveBeenCalledWith(true)
    expect(await screen.findByLabelText('Remember me?')).toBeTruthy()
  })

  it('should submit the form with username, password, and remember values', async ()=> {
    const onSubmit = jest.fn() //mock the function onSubmit;
    renderLoginForm({ onSubmit })
    fireEvent.change(await screen.findByTestId('username'), { target : { value: 'Ali'}})
    fireEvent.change(await screen.findByTestId('password'), { target : { value: 'Oksana'}})
    fireEvent.click(await screen.findByTestId('remember'))
    fireEvent.click(await screen.findByTestId('submit'))
    expect(onSubmit).toHaveBeenCalledWith('Ali', 'Oksana', true)
  })
});