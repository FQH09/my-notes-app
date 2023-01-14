import React from 'react';
import PropTypes from 'prop-types';

function Login({login}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function onEmailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function onPasswordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    login({ email, password });
  } 

  return (
    <form onSubmit={onSubmitHandler} className='login-form'>
      <input type="email" placeholder='Email' value={email} onChange={onEmailChangeHandler} />
      <input type="password" placeholder='Password' value={password} onChange={onPasswordChangeHandler} />
      <button>Masuk</button>
    </form>
  );
}
   
Login.propTypes = {
    login: PropTypes.func.isRequired,
}
   
export default Login;