import React, { useState, useEffect } from "react";
import { Col, Button, NavbarText } from "reactstrap";
import { bindActionCreators } from "redux";
import { allActions } from "../Reducer/Reducer";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  const actions = bindActionCreators(allActions, useDispatch());
  const psuPass = useSelector((state) => state.psuPass);
  const history = useHistory();

  const [users, setUser] = useState("");

  useEffect(() => {
    let user = psuPass.id + " " + psuPass.name + " " + psuPass.surname;
    setUser(user);
  });

  const logout = () => {
    actions.logoutPsu();
    history.push("/");
    console.log("psuPass", psuPass);
  };
  const showBar = () => {
    if (psuPass.id == 5935512095) {
      return (
        <div>
          <Col align="right" style={{ marginTop: "5px", marginLeft: "500px" }}>
            <h6 className="text_user">
              {users}{" "}
              <Button className="btnLogout" onClick={() => logout()}>
                LOGOUT
              </Button>{" "}
            </h6>
          </Col>
        </div>
      );
    }
    else{
        return (
            <div>
              <Col align="right" style={{ marginTop: "5px", marginLeft: "555px" }}>
                <h6 className="text_user">
                  {users}{" "}
                  <Button className="btnLogout" onClick={() => logout()}>
                    LOGOUT
                  </Button>{" "}
                </h6>
              </Col>
            </div>
          );
    }
  };

  return <div>{showBar()}</div>;
}
export default Navbar;
