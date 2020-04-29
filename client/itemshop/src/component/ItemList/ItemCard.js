import React from "react";
import './ItemCard.css'
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

function ItemCard(props) {
  const typeCard = () => {
    if (true) {
      return (
        <Card style={{ width: "800px" }}>
          <Row>
            <Col md="3">
              <CardImg top width="100%" src={props.img} alt="Card image" />
            </Col>
            <Col >
            <div className="btnCard">
                <Button className="btnUpdate">Update</Button>
                <Button className="btnDelete"> Delete</Button>
                </div>
              <CardBody className="textCard">
                <CardTitle><span style={{ fontWeight: "bold" }}>สิ่งของที่หาย : </span>{props.nameItem}</CardTitle>
                <CardTitle><span style={{ fontWeight: "bold" }}>ของ : </span>คุณ{props.name}</CardTitle>
                <CardSubtitle><span style={{ fontWeight: "bold" }}>เบอร์โทรศัพท์ :  </span>{props.phoneNumber}</CardSubtitle>
                <CardSubtitle><span style={{ fontWeight: "bold" }}>อีเมล : </span>{props.email}</CardSubtitle>
                <CardText><span style={{ fontWeight: "bold" }}>รายละเอียดเพิ่มเติม : </span>{props.detail}</CardText>
              </CardBody>
                
            </Col>
          </Row>
        </Card>
      );
    } else {
      return (
        <Card style={{ width: "500px" }}>
          <CardImg top width="100%" src={props.img} alt="Card image" />
          <CardBody>
            <CardTitle>{props.nameItem}</CardTitle>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>{props.phoneNumber}</CardSubtitle>
            <CardSubtitle>{props.email}</CardSubtitle>
            <CardText>{props.detail}</CardText>
          </CardBody>
        </Card>
      );
    }
  };

  return <div>{typeCard()}</div>;
}

export default ItemCard;
