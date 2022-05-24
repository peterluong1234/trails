import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  return (
    <>
      <h1>Setup Login Page</h1>
      <ul>
        <li>Read the Login Model, You can change it to fit your needs</li>
        <li>
          Make sure you read the Login func in the User Controller, to know how
          it is setup to find the user!
        </li>
      </ul>
    </>
  );
}
