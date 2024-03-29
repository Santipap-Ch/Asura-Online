import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from "../Reducer/Reducer";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar"

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
import "./formItem.css";

function FormItem(prop) {
  const actions = bindActionCreators(allActions, useDispatch());
  const psuPass = useSelector(state=>state.psuPass)
  const history = useHistory();

  const [dataform, setForm] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    nameItem: "",
    img: "",
    detail: "",
  });

  const addData=()=>{
    actions.addItem(dataform)
    history.push('/items')
    actions.getItem()
  }

  return (
    <div className="pageFrom">
          <Row>
            <Nav className="nav1">
              <NavItem style={{marginLeft:"15px"}}>
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
              <Navbar/>
            </Nav>
          </Row>
      <Container>
        <Form>
          <Row>
            <FormGroup align="center">
              <div className="textHeader">
                <h2 className="text-Add">ADD ITEM</h2>
              </div>
              <div className="forminP1">
                <Label className="textLabel">Name</Label>
              </div>
              <Input
                className="inP1"
                type="text"
                placeholder="ชื่อ"
                name="name"
                onChange={(e) => setForm({ ...dataform, name: e.target.value })}
              />
              <div className="forminP1">
                <Label className="textLabel">Phone Number</Label>
              </div>
              <Input
                className="inP1"
                type="tel"
                pattern="[0-9]{3}-[0-9]{7}"
                placeholder="xxx-xxxxxxx"
                name="phoneNumber"
                onChange={(e) =>
                  setForm({ ...dataform, phoneNumber: e.target.value })
                }
              />
              <div className="forminP1">
                <Label className="textLabel">Email</Label>
              </div>
              <Input
                className="inP1"
                type="email"
                placeholder="example@hotmail.com"
                name="email"
                onChange={(e) =>
                  setForm({ ...dataform, email: e.target.value })
                }
              />
              <div className="forminP1">
                <Label className="textLabel">Name Item</Label>
              </div>
              <Input
                className="inP1"
                type="text"
                placeholder="ชื่อสิ่งของ"
                name="nameItem"
                onChange={(e) =>
                  setForm({ ...dataform, nameItem: e.target.value })
                }
              />
              <div className="forminP1">
                <Label className="textLabel">Image</Label>
              </div>
              <Input
                className="inP1"
                type="text"
                placeholder="url"
                name="img"
                onChange={(e) => setForm({ ...dataform, img: e.target.value })}
              />
              <div className="forminP1">
                <Label className="textLabel">Detail</Label>
              </div>
              <Input
                className="inP1"
                type="textarea"
                placeholder="รายละเอียดเพิ่มเติม เช่น สถานที่ ,เวลา ,วันที่"
                name="detail"
                onChange={(e) =>
                  setForm({ ...dataform, detail: e.target.value })
                }
              />
              <div align="end">
                <Button className="btn2" onClick={()=>{addData()}}>ADD</Button>
              </div>
            </FormGroup>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default FormItem;
