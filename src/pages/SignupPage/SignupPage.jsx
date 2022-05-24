import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(props) {
  const [error,setError] = setState('');
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
    bio: ''
  });
  
  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Signup PAGE</h1>
      <ul>
        <li>Read the User Model, You can change it to fit your needs</li>
        <li>
          Make sure you read the Signup up func in the User Controller, to know
          how it is setup to find the user!
        </li>
      </ul>
    </>
  );
}
