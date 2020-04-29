import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from "../Reducer/Reducer";
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
} from "reactstrap";

function ItemList() {
  const actions = bindActionCreators(allActions, useDispatch());
  const items = useSelector((state) => state.items);

  useEffect(() => {
    actions.getItem();
  }, []);

  const typeList = () => {
    if (true) {
      return (
        <Container>
          <div>
            <Row>
              <Nav className="nav1">
                <NavItem>
                  <NavLink href="/items" className="text_nav0">
                    Items
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/formitem" className="text_nav0">
                    Add Item
                  </NavLink>
                </NavItem>
              </Nav>
            </Row>
            <Row>
              {items.map((item, index) => (
                <div key={index} style={{ margin: 5 }}>
                  <Col>
                    <ItemCard {...item} />
                  </Col>
                </div>
              ))}
            </Row>
          </div>
        </Container>
      );
    } else {
      return <div>ไม่ผ่าน</div>;
    }
  };

  return <div>{typeList()}</div>;
}

export default ItemList;
