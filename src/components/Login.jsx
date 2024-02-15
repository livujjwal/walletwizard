import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function handle() {}
  function signupWithEmail() {
    console.log(name, email, password, confirmPassword);
    if (!name && !email && password.length > 5 && confirmPassword.length > 5)
      toast.error("All fields are mantadory");

    if (password !== confirmPassword) toast.error("Password must be same");
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          toast.success("User Created");
          setConfirmPassword("");
          setEmail("");
          setName("");
          setPassword("");
        })
        .catch((error) => {
          const errorCode = error.code;
          toast.error(error.message);
        });
    }
  }
  return (
    <div className="w-screen h-[90vh] flex items-center justify-center">
      <div className="w-[60%] max-w-[450px] auto shadow-4xl bottom-4 py-4 px-10">
        <h2 className="text-center font-medium">
          Sign Up on <span className="text-theme">WalletWizard</span>
        </h2>
        <form
          className="gap-4"
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
          <Input
            SameSite="None"
            label={"Full Name"}
            type={"text"}
            state={name}
            setState={setName}
            placeholder={"John Doe"}
          />
          <Input
            SameSite="None"
            label={"Email"}
            type={"email"}
            state={email}
            setState={setEmail}
            placeholder={"JohnDoe@gmail.com"}
          />
          <Input
            SameSite="None"
            label={"Password"}
            type={"password"}
            state={password}
            setState={setPassword}
            placeholder={"Your Password"}
          />
          <Input
            SameSite="None"
            label={"Confirm Password"}
            type={"password"}
            state={confirmPassword}
            setState={setConfirmPassword}
            placeholder={"Confirm Password"}
          />
          <Button
            text="Signup With Email"
            blue={false}
            onClick={signupWithEmail}
          />
        </form>
        <p className="text-center my-4">Or</p>
        <Button text="Signup With Google" blue={true} onClick={handle} />
      </div>
    </div>
  );
};

export default Login;
