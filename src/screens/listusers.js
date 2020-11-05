import React, { Fragment, Component } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const divStyle = {
  width: "25rem",
  margin: "20px",
};

class ListUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
      fetch('http://localhost:4000/user')
        .then(res => res.json())
        .then(data => {
            this.setState({ users: data });
            console.log('users', this.state.users);
        })
        .catch(console.log);
  }

  render() {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col>
              {this.state.users.map((user) => (
                <Card style={divStyle} color="white">
                  <CardBody>
                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold">
                      {user.name}
                    </CardTitle>
                    <CardSubtitle className="mb-3 font-weight-light text-uppercase">
                      {user.name}
                    </CardSubtitle>
                    <CardText className="mb-4">
                      {""}
                      {user.creationDate}
                    </CardText>
                    <Row>
                      <Col>
                        <Button color="success">Edit</Button>
                      </Col>
                      <Col sm="auto">
                        <Button color="danger">Delete</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ListUsers;