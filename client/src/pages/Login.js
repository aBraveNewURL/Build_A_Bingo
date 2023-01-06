import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    // <div className="container my-1">
    //   <Link to="/signup">← Go to Signup</Link>
    
    
<div>
<h2 className="font-semibold text-2xl text-center my-4">Login</h2>
<form className='mx-auto max-w-sm' onSubmit={handleFormSubmit}>
  <div className="mb-6 flex-row">
    <label htmlFor="email">Email address:</label>
    <input
      placeholder="youremail@test.com"
      name="email"
      type="email"
      id="email"
      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      onChange={handleChange}
    />
  </div>
  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
    <p className="text-center text-white font-semibold mx-4 mb-0">and</p>
  </div>
  <div className="mb-6">
    <label htmlFor="pwd">Password:</label>
    <input
      placeholder="******"
      name="password"
      type="password"
      id="pwd"
      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      onChange={handleChange}
    />
  </div>
  {error ? (
    <div>
      <p className="error-text">The provided credentials are incorrect</p>
    </div>
  ) : null}
  <div className="flex-row flex-end">
    <button className='' type="submit">Login</button>
  </div>
</form>
<div class="text-xl font-semibold mt-2 pt-1 mb-0 rounded-md shadow-md bg-navy-700 text-white">
  Don't have an account?
  <Link to="/signup" className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
    Register
  </Link>
</div>

</div>
  );
}

export default Login;



