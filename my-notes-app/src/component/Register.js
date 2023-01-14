import React from "react";
import PropTypes from 'prop-types';

function Register({ register }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function onNameChangeHandler(event) {
    setName(event.target.value);
  }

  function onEmailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function onPasswordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    register({ name, email, password });
  } 
  
  return (
    <form onSubmit={onSubmitHandler} className='register-form'>
      <input type="text" placeholder="Nama" value={name} onChange={onNameChangeHandler} />
      <input type="email" placeholder="Email" value={email} onChange={onEmailChangeHandler} />
      <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={onPasswordChangeHandler} />
      <button>Daftar</button>
    </form>
  )  
}
  
Register.propTypes = {
  register: PropTypes.func.isRequired,
};
  
export default Register;