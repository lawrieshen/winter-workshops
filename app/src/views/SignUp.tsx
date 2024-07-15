import { FormEvent } from "react"
import { FormInput, GenerateFormElements } from "./SignIn";

const SignUp = () => {
  let formInputs: FormInput[] = [
    {label: "First Name", id: "firstName", type: "text"},
    {label: "Last Name", id: "lastName", type: "text"},
    {label: "Email", id: "email", type: "email"},
    {label: "Password", id: "password", type: "password"},
    {label: "Confirm Password", id: "confirmPassword", type: "password"}
  ];
  
  // write code here

  const signUp = (event: FormEvent) => {
    event.preventDefault();

    // @ts-ignore
    const elementArray = [...event.target.elements];
    
    // write function code here
    const data = elementArray.reduce((acc, element) => {
      if (element.id) {
        acc[element.id] = element.value
      }

      return acc;
    }, {})

    try {
      if (data.firstName === "") throw("Please enter an First Name");
      if (data.lastName === "") throw("Please enter an Last Name");

      if (data.email === "") throw("Please enter an email");
      if (data.password === "") throw("Please enter a password");
      if (data.confirmPassword === "") throw("Please confirm your password");
      if (data.password.length < 8) throw("The password should be at leaset 8 characters long");
      if (data.password !== data.confirmPassword) throw("Password does not match");
    } catch (error) {
      alert(error)
    }
  }

  return (<form onSubmit={signUp}>
    <h1>Sign up</h1>
    {GenerateFormElements(formInputs)}
    {/* create components here */}
    <button>Submit</button>
  </form>)
}

export default SignUp