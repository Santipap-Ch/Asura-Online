import React, { useState, useEffect } from "react";
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
import './formItem.css'

function FormItem() {
  return (
    <div className="pageFrom">
      <Container>
        <Form>
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
              <FormGroup align="center">
                  <div className="textHeader">
                      <h2 className="text-Add">ADD ITEM</h2>
                  </div>
                  <div className="forminP1">
                      <Label className="textLabel">Name</Label>
                  </div>
                  <Input className="inP1" type="text" placeholder="ชื่อ นามสกุล" name="name"/>
                  <div className="forminP1">
                      <Label className="textLabel">Phone Number</Label>
                  </div>
                  <Input className="inP1" type="tel" pattern="[0-9]{3}-[0-9]{7}" placeholder="xxx-xxxxxxx" name="phoneNumber"/>
                  <div className="forminP1">
                      <Label className="textLabel">Email</Label>
                  </div>
                  <Input className="inP1" type="email" placeholder="example@hotmail.com" name="email"/>
                  <div className="forminP1">
                      <Label className="textLabel">Name Item</Label>
                  </div>
                  <Input className="inP1" type="text" placeholder="ชื่อสิ่งของ" name="nameItem"/>
                  <div className="forminP1">
                      <Label className="textLabel">Image</Label>
                  </div>
                  <Input className="inP1" type="text" placeholder="url" name="img"/>
                  <div className="forminP1">
                      <Label className="textLabel">Detail</Label>
                  </div>
                  <Input className="inP1" type="textarea" placeholder="รายละเอียดเพิ่มเติม เช่น สถานที่ ,เวลา ,วันที่" name="detail"/>
                  <div align="end">
                  <Button className="btn2">ADD</Button>
                  </div>
              </FormGroup>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default FormItem;
