import React, { useState } from "react";
import "./ItemCard.css";
import { bindActionCreators } from "redux";
import { allActions } from "../Reducer/Reducer";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
  Spinner,
} from "reactstrap";
import { useEffect } from "react";

function ItemCard(props) {
  const actions = bindActionCreators(allActions, useDispatch());
  const items = useSelector((state) => state.items);
  const psuPass = useSelector(state=>state.psuPass);

  // useEffect(()=>{
  //   actions.getItem();
  // },[items])

  const [modal, setModal] = useState(false);

  const [data_new, setData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    nameItem: "",
    img: "",
    detail: "",
  });

  const editCard = async (id) => {
    const data_new = items.find((item) => item.id === id);
    await setData({ ...data_new });
  };

  const updateCard = async () => {
    await actions.updateItem({ ...data_new });
    setModal(false);
    await actions.getItem();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const showModal = () => {
    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update data</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              value={data_new.name}
              onChange={(e) => {
                setData({ ...data_new, name: e.target.value });
              }}
            />
            <Label>Phone Number</Label>
            <Input
              type="tel"
              value={data_new.phoneNumber}
              onChange={(e) => {
                setData({ ...data_new, phoneNumber: e.target.value });
              }}
            />
            <Label>Email</Label>
            <Input
              type="email"
              value={data_new.email}
              onChange={(e) => {
                setData({ ...data_new, email: e.target.value });
              }}
            />
            <Label>Name Item</Label>
            <Input
              type="text"
              value={data_new.nameItem}
              onChange={(e) => {
                setData({ ...data_new, nameItem: e.target.value });
              }}
            />
            <Label>Image</Label>
            <Input
              type="text"
              value={data_new.img}
              onChange={(e) => {
                setData({ ...data_new, img: e.target.value });
              }}
            />
            <Label>Detail</Label>
            <Input
              type="textarea"
              value={data_new.detail}
              onChange={(e) => {
                setData({ ...data_new, detail: e.target.value });
              }}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateCard}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  const deleteItem = () => {
    console.log("Click Delete");
    
    actions.deleteItem(props.id);
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1500);
  };

  const typeCard = () => {
    if (psuPass.id==5935512095) {
      return (
        <div>
          {showModal()}

          <Card style={{ width: "800px" }}>
            <div className="btnCard">
              <Button
                className="btnEdit"
                onClick={() => {
                  setModal(true);
                  editCard(props.id);
                }}
              >
                Edit
              </Button>
              <Button
                className="btnDelete"
                onClick={() => {
                  deleteItem();
                }}
              >
                Delete
              </Button>
            </div>
            <Row>
              <Col md="4" style={{ display: "table" }}>
                <CardImg top width="100%" src={props.img} alt="Card image" />
              </Col>
              <Col>
                <CardBody className="textCard">
                  <CardTitle>
                    <span style={{ fontWeight: "bold" }}>สิ่งของที่หาย : </span>
                    {props.nameItem}
                  </CardTitle>
                  <CardTitle>
                    <span style={{ fontWeight: "bold" }}>เจ้าของ : </span>คุณ
                    {props.name}
                  </CardTitle>
                  <CardSubtitle>
                    <span style={{ fontWeight: "bold" }}>เบอร์โทรศัพท์ : </span>
                    {props.phoneNumber}
                  </CardSubtitle>
                  <CardSubtitle>
                    <span style={{ fontWeight: "bold" }}>อีเมล : </span>
                    {props.email}
                  </CardSubtitle>
                  <CardText>
                    <span style={{ fontWeight: "bold" }}>
                      รายละเอียดเพิ่มเติม :{" "}
                    </span>
                    {props.detail}
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </div>
      );
    } else {
      return (
        <Card style={{ width: "800px" }}>
          <Row>
            <Col md="4" style={{ display: "table" }}>
              <CardImg top width="100%" src={props.img} alt="Card image" />
            </Col>
            <Col>
              <CardBody className="textCard">
                <CardTitle>
                  <span style={{ fontWeight: "bold" }}>สิ่งของที่หาย : </span>
                  {props.nameItem}
                </CardTitle>
                <CardTitle>
                  <span style={{ fontWeight: "bold" }}>เจ้าของ : </span>คุณ
                  {props.name}
                </CardTitle>
                <CardSubtitle>
                  <span style={{ fontWeight: "bold" }}>เบอร์โทรศัพท์ : </span>
                  {props.phoneNumber}
                </CardSubtitle>
                <CardSubtitle>
                  <span style={{ fontWeight: "bold" }}>อีเมล : </span>
                  {props.email}
                </CardSubtitle>
                <CardText>
                  <span style={{ fontWeight: "bold" }}>
                    รายละเอียดเพิ่มเติม :{" "}
                  </span>
                  {props.detail}
                </CardText>
              </CardBody>
            </Col>
          </Row>
        </Card>
      );
    }
  };

  return (
    <div>
      {typeCard()}
      {/* {showModal()} */}
    </div>
  );
}

export default ItemCard;
