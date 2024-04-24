import React from "react";
import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState('');

  // this is a combined state for both inputs, an object that holds the values
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  //typical way of handling submit to stop page from refreshing
  function handleSubmit(event) {
    event.preventDefault();
    console.log("user email: " + enteredValues.email);
    console.log("uer password: " + enteredValues.password);
    console.log(enteredValues);
    
    // resetting values if reset clicked
    setEnteredValues({
      email: "",
      password: "",
    });
  }

  // generic handling function where we call setEnteredValues and then we update one of the values in the useState object
  // we get an identifier of the input for the event that occured, value is just 'event' but with a different name since we get event.target.value in actual input fields
  // we get previous state snapshot with prevValues and return new state snapshot as a new object
  // then we paste in the existing key value pairs with spread operator '...'
  // then we update the field thats identified with the identifier
  // [] is js syntax that allows us to dynamically access a property in an object
  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
