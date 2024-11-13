import { ChangeEvent } from "react";
import Pageheader from "../../layouts/Component/PageHeader/PageHeader";
import { FC, Fragment, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import {
  Button,
  Col,
  Form,
  InputGroup,
  Breadcrumb,
  Row,
  Tab,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import SideBarUser from "./components/SideBar";
import Tabs from "react-bootstrap/Tabs";
import { Label } from "@mui/icons-material";
import { BasicTable } from "../Tables/TableFunctionality";

const TechnicianGroups = () => {
  // initial value is `false`
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    // Change state to the opposite (to ture) when checkbox changes
    setChecked(!checked);
  };
  const [selectedOptions, setSelectedOptions] = useState(null);

  const handleSelectChange = (selected) => {
    const maxSelections = 3;

    if (selected && selected.length <= maxSelections) {
      setSelectedOptions(selected);
    }
  };

  const [singleSelectValue, setSingleSelectValue] = useState(null);
  const [multiSelectValue, setMultiSelectValue] = useState([]);
  const [isSelectDisabled, setSelectDisabled] = useState(false);

  const options = [
    { value: "s-1", label: "Selection-1" },
    { value: "s-2", label: "Selection-2" },
    { value: "s-3", label: "Selection-3" },
    { value: "s-4", label: "Selection-4" },
    { value: "s-5", label: "Selection-5" },
  ];

  const handleSingleSelectChange = (selectedOption) => {
    setSingleSelectValue(selectedOption);
  };

  const handleMultiSelectChange = (selectedOptions) => {
    setMultiSelectValue(selectedOptions);
  };

  const disableSelect = () => {
    setSelectDisabled(true);
  };

  const enableSelect = () => {
    setSelectDisabled(false);
  };

  return (
    <Fragment>
      <Pageheader
        heading="User List"
        homepage="Admin UI"
        activepage="User List"
      />

      <div className="main-container bg-white p-0">
        <Row>
          <Col xxl={2} xl={4} lg={5} md={5} className="">
            <SideBarUser />
          </Col>
          <Col xxl={10} xl={8} lg={7} md={7} className="bg-white ps-0">
            <div className="mt-0">
              <div className="row justify-content-end py-3 align-items-center">
                <div className="col-lg-8">
                  <Breadcrumb>
                    <Breadcrumb.Item href="#">Setup</Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                      Users & Permissions
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">Users</Breadcrumb.Item>
                    <Breadcrumb.Item active>All Users</Breadcrumb.Item>
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

              <Tab.Container defaultActiveKey={1}>
                <Nav className="tab-menu-heading panel-tabs">
                  <Nav.Item>
                    <Nav.Link eventKey={1} className="">
                      Active Groups{" "}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={2}>Inactive Groups</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="p-2">
                  <Tab.Pane eventKey={1}>
                    <div className="d-flex w-100 pb-2 justify-content-between border-bottom flex-column">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                        <h5 className="mb-0 px-0 ">New Group</h5>
                       
                        </div>
                   
                        <div className="d-flex gap-3">
                    <Form.Group
                      as={Row}
                      className="mb-0"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="5">
                      Filter by Site : 
                      </Form.Label>
                      <Col sm="7">
                        <Form.Select aria-label="Default select example">
                          <option>All </option>
                          <option value="1">Login Users</option>
                          <option value="2">Non-Login Users</option>
                          <option value="3">Pending Users</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                    <Button variant="primary" className="btn-icon rounded-pill">
                      <i className="fe fe-help-circle"></i>
                    </Button>
                  </div>
                      </div>
      
                    </div>
                    <span className="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success-emphasis bg-primary-subtle border rounded-0 mt-3 border-primary-subtle rounded-2">
                      Following{" "}
                      <a className="fw-bold px-2">Technician Groups </a>are also
                      associated with{" "}
                      <a href="" className="fw-bold px-2">
                        3 more site(s)
                      </a>
                    </span>
                    <Table borderless>
                      <thead>
                        <tr>
                          <th colSpan={4}>
                            {" "}
                            <h6 className="mb-0">Personal Details</h6>{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td width={200}>
                            Name <span className="text-danger">*</span>
                          </td>
                          <td>
                            <Form.Group
                              className="mb-0 w-250p"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control type="text" placeholder="" />
                            </Form.Group>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Site <span className="text-danger">*</span>{" "}
                          </td>
                          <td>
                            <Form.Group
                              className="mb-0 w-250p"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control type="text" placeholder="" />
                            </Form.Group>
                          </td>
                        </tr>
                        <tr>
                          <td>Technicians </td>
                          <td>
                            <Row className="align-items-center">
                              <div className="col-md-3 col-md-offset-2">
                                <h5 className="fs-13 bg-gray-200 border border-bottom-0 p-2 mb-0">
                                  Available Technicians
                                </h5>
                                <select
                                  name="from[]"
                                  id="undo_redo"
                                  className="form-control rounded-0 h-180 overflow-scroll"
                                  size="13"
                                  multiple="multiple"
                                >
                                  <option value="1">Bella</option>
                                  <option value="2">MarkHeather</option>
                                  <option value="3">GrahamHoward</option>
                                  <option value="4">SternJeniffer</option>
                                  <option value="5">DoeJohn</option>
                                  <option value="6">Roberts</option>
                                  <option value="7">Kalyan Tech</option>
                                  <option value="8">Muthiah</option>
                                  <option value="9">Selvam_Tech</option>
                                  <option value="10">Shawn Adams</option>
                                  <option value="11">DoeJohn</option>
                                  <option value="12">SternJeniffer</option>
                                  <option value="13">GrahamHoward</option>
                                </select>
                              </div>

                              <div className="col-md-1">
                                <button
                                  type="button"
                                  id="undo_redo_rightSelected"
                                  className="btn border btn-light btn-block"
                                >
                                  <i className="fe fe-chevron-left"></i>
                                </button>
                                <button
                                  type="button"
                                  id="undo_redo_leftSelected"
                                  className="btn border btn-light btn-block"
                                >
                                  <i className="fe fe-chevron-right"></i>
                                </button>
                              </div>

                              <div className="col-md-3">
                                <h5 className="fs-13 bg-gray-200 border border-bottom-0 p-2 mb-0">
                                  Selected technicians in this group
                                </h5>
                                <select
                                  name="to[]"
                                  id="undo_redo_to"
                                  className="form-control rounded-0 h-180"
                                  size="13"
                                  multiple="multiple"
                                ></select>
                              </div>
                            </Row>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            {" "}
                            <div className="p-2 border">
                              <Form.Label>
                                Select technician(s) for notifications
                              </Form.Label>
                              <span className="d-inline-flex px-2 py-1 fw-semibold text-warning-emphasis bg-warning-subtle border rounded-0 my-1 border-warning-subtle rounded-2">
                                Following{" "}
                                <a className="fw-bold px-2">
                                  Technician Groups{" "}
                                </a>
                                are also associated with{" "}
                                <a href="" className="fw-bold px-2">
                                  3 more site(s)
                                </a>
                              </span>

                              <Form.Group
                                className="py-1 border-bottom"
                                controlId="formBasicCheckbox"
                              >
                                <Form.Check
                                  id="inputVacationPercentage"
                                  type="checkbox"
                                  checked={checked}
                                  onChange={handleChange}
                                  label="When a new request is added to this group"
                                />
                              </Form.Group>

                              <Form.Group
                                className="py-1 border-bottom"
                                controlId="formBasicCheckbox"
                              >
                                <Form.Check
                                  id="inputVacationPercentage"
                                  type="checkbox"
                                  checked={checked}
                                  onChange={handleChange}
                                  label="When a request in this group is left unpicked"
                                />
                              </Form.Group>
                              <Form.Group
                                className="py-1"
                                controlId="formBasicCheckbox"
                              >
                                <Form.Check
                                  id="inputVacationPercentage"
                                  type="checkbox"
                                  checked={checked}
                                  onChange={handleChange}
                                  label="When a request in this group is updated"
                                />
                              </Form.Group>
                              <div className="conditional-checkbox">
                                {/* Inline conditional if checked state is `true` will show the div, otherwise, it won't */}

                                {checked && (
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                      type="text"
                                      placeholder="Select Technicians"
                                    />
                                  </Form.Group>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>Description</td>
                          <td>
                            <Form.Group
                              className="mb-0 w-250p"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table borderless>
                      <thead>
                        <tr>
                          <th colSpan={4}>
                            {" "}
                            <h6 className="mb-0">Contact Information</h6>{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td width={200}>Email</td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <Form.Group
                                className="mb-0 w-250p"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Control type="text" placeholder="" />
                              </Form.Group>
                              <p className="mb-0 text-muted fs-13">
                                [ Primary Email ID used for all kinds of
                                communication and login. ]
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Phone <span className="text-danger">*</span>{" "}
                          </td>
                          <td>
                            <Form.Group
                              className="mb-0 w-250p"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control type="text" placeholder="" />
                            </Form.Group>
                          </td>
                        </tr>
                        <tr>
                          <td>Mobile </td>
                          <td>
                            <Form.Group
                              className="mb-0 w-250p"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control type="text" placeholder="" />
                            </Form.Group>
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <Table borderless>
                      <thead>
                        <tr>
                          <th colSpan={4}>
                            {" "}
                            <h6 className="mb-0">Group Mail Settings</h6>{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td width={200}>Group Email</td>
                          <td>
                            <Form.Group
                              className="mb-0 w-50"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <div className="w-50 py-2">
                              <p className="fs-12 text-muted mb-0">
                                You can configure group email addresses for this
                                group here. Group email specified here should be
                                aliased with the mail account specified in
                                incoming mail server settings.
                              </p>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          {" "}
                          <td width={200}>Sender's Name</td>
                          <td>
                            <Form.Control
                              className="w-250p"
                              type="text"
                              placeholder=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <td width={200}>Sender's Email</td>
                          <td>
                            <Form.Group
                              className="mb-0 w-250p"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select
                                className="mb-0 w-250p"
                                aria-label="Default select example"
                              >
                                <option>None</option>
                                <option value="1">Administration</option>
                                <option value="2">Engineering</option>
                                <option value="3">ERP</option>
                                <option value="3">Finance</option>
                                <option value="3">Infrastructure</option>
                                <option value="3">IT Services</option>
                                <option value="3">Sales</option>
                              </Form.Select>
                            </Form.Group>
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <Table borderless>
                      <thead>
                        <tr>
                          <th colSpan={4}>
                            {" "}
                            <h6 className="mb-0">
                              Assigned Organization Roles
                            </h6>{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Button
                              variant="primary-light"
                              className="d-inline-flex gap-2 align-items-center"
                            >
                              {" "}
                              <i className="fe fe-plus"></i>Assign Role
                            </Button>
                            <Row className="mt-3">
                              <Col xs={5}>
                                <Row className="align-content-end justify-content-end">
                                  <Col xs={4}>
                                    <Form.Label>Role Name</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                      <option>Select Role Name</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </Form.Select>
                                  </Col>
                                  <Col xs={4}>
                                    <Form.Label>User</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                      <option>Select User Name</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </Form.Select>
                                  </Col>
                                  <Col xs={4} className="mt-30">
                               
                                  <Button variant="light">
                                      <i className="fe fe-plus"></i>
                                    </Button>{" "}
                                    <Button variant="light">
                                      <i className="fe fe-minus"></i>
                                    </Button>{" "}
                                                                
                                  
                                  
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Tab.Pane>
                  <Tab.Pane eventKey={2} className="p-0">
                    <div className="d-flex w-100 pb-2 justify-content-between border-bottom flex-column">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 px-0 ">Inactive Groups</h5>
                        <Button
                          variant="primary"
                          className="btn-icon rounded-pill"
                        >
                          <i className="fe fe-help-circle"></i>
                        </Button>
                      </div>
                    </div>
                    <span className="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success-emphasis bg-primary-subtle border rounded-0 mt-3 border-primary-subtle rounded-2">
                      Following{" "}
                      <a className="fw-bold px-2">Technician Groups </a>are also
                      associated with{" "}
                      <a href="" className="fw-bold px-2">
                        3 more site(s)
                      </a>
                    </span>
                    <BasicTable />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

              <div className="d-flex gap-3 py-5 justify-content-center border-top">
                <Button variant="primary" type="submit">
                  Save
                </Button>
                <Button variant="light">Cancel</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default TechnicianGroups;
