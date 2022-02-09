import React, { useState, useEffect } from "react";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";

import firebase from "firebase/compat/app";
import db from "./firebasedb";
import AddUser from "./firebaseAddUser";
import isLoginUser from "./firebaseIsLogin";
import SignOut from "./firebaseSignOut";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("authenticated", user);
  } else {
    console.log("signed out");
  }
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="loginbar"></div>
      <Container fluid>
        <div className="w-100 h-100">
          <div className=" color-overlay d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <Form inline className="login  py-4 px-5">
              <div className="logo"></div>
              <FormGroup floating>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                  bsSize="sm"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <Label for="exampleEmail">Email</Label>
              </FormGroup>
              <FormGroup floating>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <Label for="examplePassword">Password</Label>
              </FormGroup>
              <Button color="primary float-end" size="" onClick={isLoginUser}>
                → Giriş Yap
              </Button>
              <Button color=" float-start " size="" onClick={AddUser}>
                - Ekle
              </Button>
              <Button color=" float-start " size="" onClick={SignOut}>
                * Sign Out
              </Button>
              <div className="login_shadow"></div>
            </Form>
          </div>
        </div>
      </Container>

      <div className="login-versionBar">
        <div className="copyright">
          © Copyright 2022 Albaraka Türk Bütün Hakları Saklıdır{" "}
        </div>
      </div>
    </>
  );
};

export default Login;
