import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from "../Reducer/Reducer";
import { useHistory } from "react-router-dom";
import ItemCard from "./ItemCard";
import "./ItemList.css";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Container,
  NavItem,
  Nav,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

function ItemList(prop) {
  const actions = bindActionCreators(allActions, useDispatch());
  const items = useSelector((state) => state.items);
  const psuPass = useSelector((state) => state.psuPass);
  const history = useHistory();

  useEffect(() => {
    if (psuPass.id != null) {
      console.log("aaaa",psuPass.id);
      history.push("/items");
    }
    else{
      history.push('/')
    }
    actions.getItem();
  }, []);

  const typeList = () => {
    if (psuPass.id == 5935512095) {
      return (
        <Container>
          <div>
            <Row>
              <Nav className="nav1">
                <NavItem>
                  <NavLink
                    onClick={(e) => {
                      e.preventDefault();
                      prop.history.push("/items");
                      console.log("Click Items", { ...psuPass });
                    }}
                    className="text_nav0"
                  >
                    Items
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={(e) => {
                      e.preventDefault();
                      prop.history.push("/formitem");
                      console.log("Click Add", { ...psuPass });
                    }}
                    className="text_nav0"
                  >
                    Add Item
                  </NavLink>
                </NavItem>
              </Nav>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              {items.map((item, index) => (
                <div key={index} style={{ margin: 5 }}>
                  <Col style={{marginLeft:"50px"}}>
                    <ItemCard {...item} />
                  </Col>
                </div>
              ))}
            </Row>
          </div>
        </Container>
      );
    } else {
      return (
        <Container>
          <div>
            <Row>
              <Nav className="nav1">
                <NavItem>
                  <NavLink
                    onClick={(e) => {
                      e.preventDefault();
                      prop.history.push("/items");
                      console.log("Click Items", { ...psuPass });
                    }}
                    className="text_nav0"
                  >
                    Items
                  </NavLink>
                </NavItem>
              </Nav>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              {items.map((item, index) => (
                <div key={index} style={{ margin: 5 }}>
                  <Col style={{marginLeft:"150px"}}>
                    <ItemCard {...item} />
                  </Col>
                </div>
              ))}
            </Row>
          </div>
        </Container>
      );
    }
  };

  return <div>{typeList()}</div>;
}

export default ItemList;
