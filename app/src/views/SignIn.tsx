import { FormEvent } from "react"

export type FormInput = {
  label: string, 
  id: string, 
  type: string
}

export const GenerateFormElements = (formInputs: FormInput[]) => {
  // write element generation code here
  return formInputs.map( formInputs => {
      return (
        <div>
          <label>{formInputs.label}</label>
          <input id={formInputs.id} type={formInputs.type}/>
        </div>
      )
    }
  )
}

const SignIn = () => {
  let formInputs = [
    {label: "Email", id: "email", type: "email"},
    {label: "Password", id: "password", type: "password"}
  ];

  // write code here

  const signIn = (event: FormEvent) => {
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
      if (data.email === "") throw("Please enter an email");
      if (data.password === "") throw("Please enter a password");
      if (data.password.length < 8) throw("The password should be at leaset 8 characters long");
    } catch (error) {
      alert(error);
    }
  }

  return (<form onSubmit={signIn}>
    <h1>Sign in</h1>
    {GenerateFormElements(formInputs)}
    <button>Submit</button>
    {/* create components here */}
  </form>)
}

export default SignIn