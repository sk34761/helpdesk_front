import { Fragment, useState, ChangeEvent } from "react";
import Pageheader from "../../layouts/Component/PageHeader/PageHeader";
import {
  Button,
  Col,
  Form,
  InputGroup,
  Breadcrumb,
  Row,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import SideBarUser from "./components/SideBar";

const AddTechnician = () => {
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
          <Col xxl={10} xl={8} lg={7} md={7} className="bg-white">
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

              <div className="d-flex w-100 py-2 justify-content-between border-bottom flex-column">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 px-2 ">New Requester</h5>
                  <Button variant="primary" className="btn-icon rounded-pill">
                    <i className="fe fe-help-circle"></i>
                  </Button>
                </div>
              </div>
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
                    <td width={200}>Name (Display Name)</td>
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
                      First Name <span className="text-danger">*</span>{" "}
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
                    <td>Last Name </td>
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
                    <td>Employee ID </td>
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
                          [ Primary Email ID used for all kinds of communication
                          and login. ]
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
                      <h6 className="mb-0">Department Details</h6>{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width={200}>Site Name</td>
                    <td>
                      <Form.Select
                        className="mb-0 w-250p"
                        aria-label="Default select example"
                      >
                        <option>Base Site</option>
                        <option value="1">DataCenter, FL</option>
                        <option value="2">HeadQuarters, NY</option>
                        <option value="3">IDC, SA </option>
                      </Form.Select>
                    </td>
                  </tr>

                  <tr>
                    {" "}
                    <td width={200}>Department Name</td>
                    <td>
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
                    </td>
                  </tr>
                  <tr>
                    <td width={200}>Job title</td>
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
                    {" "}
                    <td width={200}>Reporting Manager</td>
                    <td>
                      <Form.Select
                        className="mb-0 w-250p"
                        aria-label="Default select example"
                      >
                        <option>Select User</option>
                        <option value="1">Administration</option>
                        <option value="2">Engineering</option>
                        <option value="3">ERP</option>
                        <option value="3">Finance</option>
                        <option value="3">Infrastructure</option>
                        <option value="3">IT Services</option>
                        <option value="3">Sales</option>
                      </Form.Select>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <Form.Check
                        className=""
                        inline
                        label="Enable Self-Service Login"
                        name="group1"
                        type="checkbox"
                      />
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
                        Advanced Permissions & Privileges
                      </h6>{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Form.Check
                        inline
                        label="VIP User"
                        name="group1"
                        type="checkbox"
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
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

export default AddTechnician;
