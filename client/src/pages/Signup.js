import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div class="bg-navy-700 rounded-md shadow-md text-white p-4">
  <div className="container my-1">
    <Link to="/login" className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">← Go to Login</Link>
  </div>


  <h2 className="font-semibold text-2xl text-center my-4"></h2>
  <form className='mx-auto max-w-sm' onSubmit={handleFormSubmit}>
    <div className="mb-6 flex-row">
      <label htmlFor="username">Username:</label>
      <input
        placeholder="First"
        name="username"
        type="username"
        id="username"
        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        onChange={handleChange}
      />
    </div>
    <div className="mb-6 flex-row">
      <label htmlFor="email">Email:</label>
      <input
        placeholder="youremail@test.com"
        name="email"
        type="email"
        id="email"
        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        onChange={handleChange}
      />
    </div>
    <div className="mb-6 flex-row">
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
    <div className="flex-row flex-end">
      <button className='' type="submit">Submit</button>
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

export default Signup;
