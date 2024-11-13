import { Fragment, useState } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Breadcrumb
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import Pageheader from "../../layouts/Component/PageHeader/PageHeader";
import { Link } from "react-router-dom";
import SideBarUser from "./components/SideBar";
import Accordion from 'react-bootstrap/Accordion';
const Profile = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Fragment>
      <Pageheader heading="Profile" homepage="Pages" activepage="Profile" />

      <div className="main-container bg-white p-0">
        <Row className="">
          <Col xxl={2} xl={4} lg={5} md={5} className="ps-1">
            <SideBarUser />
          </Col>
          <Col xxl={10} xl={8} lg={7} md={7} className="bg-white ps-0">
            <div className="mt-3">
              <div className="row justify-content-end py-3 align-items-center">
                <div className="col-lg-8">
                  <Breadcrumb>
                    <Breadcrumb.Item href="#">Setup</Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                      Users & Permissions
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Roles</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="col-lg-4 ">
                  <InputGroup className="border-bottom">
                    <Form.Control
                      className="border-0 rounded-0 bg-transparent"
                      placeholder="Search Email"
                      aria-describedby="basic-addon2"
                    />
                    <Button
                      variant="link"
                      id="basic-addon2"
                      type="button"
                      className="border-0"
                    >
                      <i className="bi bi-search text-muted"></i>
                    </Button>
                  </InputGroup>
                </div>
              </div>

              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="mb-4"
              >
                <Card className='shadow-none'>
                  <Card.Header className="px-0 py-1">
                    <div className="d-flex w-100  justify-content-between flex-column">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">New Role</h5>
                        <Button
                          variant="primary"
                          className="btn-icon rounded-pill"
                        >
                          <i className="fe fe-help-circle"></i>
                        </Button>
                      </div>
                    </div>
                  </Card.Header>

                  <Card.Body className="p-0">
                    <div className="px-0 gap-2 py-3 w-100 border-bottom align-items-center">
                      <Row>
                        <Col xxl={6} xl={12} lg={6} md={6}>
                          <Form.Group
                            className="mb-1"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Role Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder=""
                              id="validationCustom01"
                            />
                            <Form.Control.Feedback>
                              Role Name Ok
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            className="mb-1"
                            controlId="exampleForm.ControlTextarea1"
                            id="validationCustom02"
                          >
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                          </Form.Group>
                        </Col>
                      </Row>
                     
                      <h6 className="py-2 mt-2">Access permissions <span className="text-danger">*</span></h6>
                      <Table >
                        <thead>
                          <tr className="bg-light-gray">
                            <th className="fw-600">Access levels</th>
                            <th className="fw-600 text-center">Full Control</th>
                            <th className="fw-600 text-center">View</th>
                            <th className="fw-600 text-center">Add</th>
                            <th className="fw-600 text-center">Edit</th>
                            <th className="fw-600 text-center">Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="bg-td-gray">Requests</td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-td-gray">Problems</td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-td-gray">Changes</td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-td-gray">Requests</td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td >
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-td-gray">Problems</td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-td-gray">Changes</td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={6} className="bg-light">
                              {" "}
                              <span className="fw-600 text-muted">
                                Other Configurations
                              </span>{" "}
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-td-gray">Problems</td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-td-gray">Changes</td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                            <td className="text-center">
                              {" "}
                              <Form.Check aria-label="option 1" />
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                  
                    </div>
                  </Card.Body>
                </Card>
                <div className="d-flex gap-3 my-5 justify-content-center">
                  <Button variant="primary" type="submit">
                    Save
                  </Button>
                  <Button variant="light">Cancel</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
export default Profile;
