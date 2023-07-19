import { Link } from "react-router-dom";

import useSignup2 from "./hooks/useSignup2";
import Signup2Wrapper from "./Signup2Wrapper";
import Button from "../../components/Button";
import PhoneInput from "../../components/Input/PhoneInput";
import PasswordInput from "../../components/Input/PasswordInput";
import Input from "../../components/Input";

const Signup2 = () => {
  const { handleSubmit, register, mutationState, errors } = useSignup2();

  return (
    <Signup2Wrapper>
      {mutationState.isError && <p data-testid="error"></p>}

      <header>
        <h1 className="page-title">Create a new account</h1>
      </header>

      <main className="content">
        <form onSubmit={handleSubmit()} className="form">
          <div className="form__input-list">
            <Input
              placeholder="First Name"
              label="First Name"
              required
              {...register("firstName", {
                required: "First Name is required",
                minLength: { value: 3, message: "First Name must be 3 digits or more" },
              })}
              error={errors.firstName?.message}
            />
            <Input
              placeholder="Last Name"
              label="Last Name"
              required
              {...register("lastName", {
                required: "Last Name is required",
                minLength: { value: 3, message: "Last Name must be 3 digits or more" },
              })}
              error={errors.lastName?.message}
            />
            <Input
              placeholder="Middle Name"
              label="Middle Name"
              {...register("middleName", {
                minLength: { value: 3, message: "Middle Name must be 3 digits or more" },
              })}
              error={errors.middleName?.message}
            />
            <Input
              placeholder="Email"
              label="Email"
              required
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email is invalid",
                },
              })}
              error={errors.email?.message}
            />
            <PhoneInput
              placeholder="Phone Number"
              required
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              error={errors.phoneNumber?.message}
            />
            <PasswordInput
              placeholder="Enter 6 digits login passcode"
              required
              {...register("loginPasscode", {
                required: "Login passcode is required",
                pattern: {
                  value: /^\d{6}$/,
                  message: "Login passcode must be 6 digits",
                },
              })}
              error={errors.loginPasscode?.message}
            />
          </div>

          <div className="form__actions">
            <div className="form__actions-top">
              <label htmlFor="remember-login-passcode" className="form__checkbox">
                <input type="checkbox" id="remember-login-passcode" />
                Remember login passcode
              </label>

              <Link to="#" className="form__link">
                Forgot login passcode?
              </Link>
            </div>

            <Button type="submit" disabled={mutationState.isLoading} className="form__actions-bottom">
              Confirm
              {mutationState.isLoading && <p data-testid="loading"></p>}
            </Button>

            <Link to="/auth/signup" className="form__link">
              Don't have an account? Sign Up
            </Link>
          </div>
        </form>
      </main>
    </Signup2Wrapper>
  );
};

export default Signup2;
