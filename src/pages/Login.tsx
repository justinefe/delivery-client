import { useNavigate, NavLink } from "react-router-dom";
import DivImage from "../components/DivImage";
import { useState } from "react";
import { loginApi, setUser } from "../store/userAction";
import { useDispatch } from "react-redux";
import FormWrapper from "../FormWrapper";
import Input from "../components/Input/FormInput";
import useForm from "../hooks/useForm";
import toast from "react-hot-toast";
import { checkError } from "../helpers/validate";

const validationSchema = {
  email: {
    required: true,
    // email pattern max length of 30 characters
    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    errorMessage: "Please enter a valid email address",
  },
  password: {
    required: true,
    /* password pattern should be between 8-16 characters,
    contain lower case letters,
    at least an uppercase letter, a Special Character and at least one number
    */
    pattern:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,12}$/,
    errorMessage:
      "Password must be at least 8-12 characters long, contain lower case letters, at least an uppercase letter, a Special Character and at least one number",
  },
};

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const { formValues, handleChange, errors, handleBlur }: any = useForm(
    {
      email: "",
      password: "",
    },
    validationSchema
  );

  const handleLogin = async (e: any) => {
    if (checkError(errors)) return;

    setLoading(true);
    e.preventDefault(e);
    const result = await loginApi(formValues);
    if (result?.success) {
      toast.success(result?.message);
      const loginData = result?.data?.user;
      dispatch(setUser(loginData));
      navigate("/");
    } else {
      toast.error(result?.message);
    }
    setLoading(false);
  };

  return (
    <>
      <DivImage
        src="https://homeapppublicassets.s3.us-east-2.amazonaws.com/3d-rendering-large-modern-contemporary-house-wood-concrete-early-evening+1.png"
        className="flex w-full min-h-screen min-w-screen items-center justify-center bg-cover"
      >
        <FormWrapper
          title="LOGIN"
          buttonText={loading ? " Loading..." : "LOGIN"}
          className=" h-screen w-screen max-w-screen sm:h-fit sm:w-full sm:max-w-[489px]  bg-white rounded-2xl shadow-form"
          onSubmit={handleLogin}
          loading={loading}
        >
          <div className="pb-10">
            <Input
              name="email"
              type="email"
              value={formValues?.email}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Email"
              required
              error={errors?.email}
              className="mb-4"
            />
            <Input
              name="password"
              type="password"
              value={formValues?.password}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Password"
              required
              error={errors?.password}
              className="mb-4"
            />
            <NavLink to="/signup" className="w-full flex justify-center">
              <span className="text-light-grey-900 text-base font-inter">
                Don't have an account?{" "}
                <strong className="text-[#577c9e] font-medium">Sign Up</strong>
              </span>
            </NavLink>
          </div>
        </FormWrapper>
      </DivImage>
    </>
  );
};

export default LoginForm;
