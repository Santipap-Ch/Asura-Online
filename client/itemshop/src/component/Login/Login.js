import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import "./login.css";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";

function Login() {
  return (
    <div className="pageLogin">
      <Container>
        <Row>
          <Col className="pageLogin2">
            <div>
              <img src="https://www.thairath.co.th/media/4DQpjUtzLUwmJZZPG15DvAz7TXRC81MEP0wkMriL3iKB.jpg" />
            </div>
          </Col>

          <Col className="pageLogin3">
            <div className="pageLogin4">
              <div>
                <h2>LOGIN PSU PASSPORT</h2>
              </div>
              <div className="label">
                <Label className="textLabel">Username</Label>
              </div>
              <Input type="username" placeholder="username" />
              <div className="label">
                <Label className="textLabel">Password</Label>
              </div>
              <Input type="password" placeholder="password" />
              <div className="pageLogin5">
                <Button className="btn1">LOGIN</Button>
              </div>
              <GoogleLogin
                className="googleAuth"
                clientId="457858959347-7jetv19toiolur9vqissnaakbmcgr5k8.apps.googleusercontent.com"
                buttonText="ลงชื่อเข้าใช้"
                //   onSuccess={}
                //   onFailure={}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Login;
