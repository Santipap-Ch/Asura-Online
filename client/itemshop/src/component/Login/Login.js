import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from "../Reducer/Reducer";
import { useHistory } from "react-router-dom";
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
  Alert,
} from "reactstrap";

function Login() {
  const actions = bindActionCreators(allActions, useDispatch());
  const psuPass = useSelector((state) => state.psuPass);
  const history = useHistory();
  const [idUser, setidUser] = useState({
    username: "",
    password: ""
  });

  useEffect(() => {
    if (psuPass.id) {
      history.push("/items");
    } else {
      history.push("/");
    }
  }, [psuPass]);

  const login = () => {    
    if (idUser.username && idUser.password) {
      actions.loginPsu(idUser);
    console.log("id :", { psuPass });

    } else {
      // <Alert color="danger">Please enter your User ID and Password</Alert>
      console.log("Please enter your User ID and Password");
    }
  };

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
              <Input
                type="username"
                placeholder="username"
                onChange={(e) =>
                  setidUser({ ...idUser, username: e.target.value })
                }
              />
              <div className="label">
                <Label className="textLabel">Password</Label>
              </div>
              <Input
                type="password"
                placeholder="password"
                onChange={(e) =>
                  setidUser({ ...idUser, password: e.target.value })
                }
              />
              <div className="pageLogin5">
                <Button
                  className="btn1"
                  onClick={() => {
                    login();
                  }}
                >
                  LOGIN
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Login;
