import { Fragment, useState, ChangeEvent } from "react";
import Pageheader from "../../layouts/Component/PageHeader/PageHeader";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Breadcrumb,
  Accordion,
  Row,
  Pagination as ReactPagination,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Select from "react-select";
import {
  Selectmaxoption,
  Selectoption1,
  Selectoption2,
  Selectoption3,
  Selectoption4,
  Selectoption5,
} from "../../common/Select2data";
import SideBarUser from "./components/SideBar";
import Offcanvas from "react-bootstrap/Offcanvas";
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

              <div className="d-flex w-100 py-2 justify-content-between border-bottom flex-column">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 px-2 ">New Technician</h5>
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="btn-icon rounded-pill"
                  >
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
                  <tr>
                    <td>SMS Mail ID </td>
                    <td>
                      <div className="d-flex gap-2 align-items-center">
                        <Form.Group
                          className="mb-0 w-250p"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <p className="mb-0 text-muted fs-13">
                          [Ex: 1234567890@mobile.att.net ]
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table borderless>
                <thead>
                  <tr>
                    <th colSpan={4}>
                      {" "}
                      <h6 className="mb-0">Cost Details</h6>{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width={200}>Cost Per Hour $</td>
                    <td>
                      <Form.Group
                        className="mb-0 w-250p"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="number"
                          value={0.0}
                          placeholder=""
                        />
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
                </tbody>
              </Table>
              <Table borderless>
                <thead>
                  <tr>
                    <th colSpan={4}>
                      {" "}
                      <h6 className="mb-0">Sites Association</h6>{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Select
                        isMulti
                        name="states[]"
                        options={Selectoption2}
                        className="basic-multi-select w-80"
                        isSearchable
                        menuPlacement="auto"
                        classNamePrefix="Select2"
                        defaultValue={[Selectoption2[0]]}
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
                      <h6 className="mb-0">Groups Association</h6>{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Select
                        isMulti
                        name="states[]"
                        options={Selectoption2}
                        className="basic-multi-select w-80"
                        isSearchable
                        menuPlacement="auto"
                        classNamePrefix="Select2"
                        defaultValue={[Selectoption2[0]]}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Form.Check
                        className="fw-600"
                        inline
                        label="Enable login for this technician"
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
      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="d-flex align-items-center">
             <i className="fe fe-help-circle"></i>
             <h5 className="mb-0 px-3">Help card</h5>
            </div>
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="text-muted">
            Request Groups denote the classification of help desk team under
            which the various incoming requests can be categorized. Each Group
            can have a group of technicians incharge of handling the requests
            pertaining to that Group. You can configure these Groups in such a
            way that notifications can be sent to technician group who belong to
            the Group regarding a new request creation.
          </p>
          <p className="text-muted">
            To add a new group click the <strong>New Group</strong> button under
            Active Groups.
          </p>
          <p className="text-muted">
            The Group Name is where you specify the unique name that is used to
            identify each Group.
          </p>
          <p className="text-muted">
            To group technicians under this Group, select the technicians from
            the Available Technicians list box and click Assign button. For
            multiple select of technicians, use Ctrl or Shift key.
          </p>
          <p className="text-muted">
            If you want to send notifications to the above group of technicians
            for new request creation or inform the group if there are requests
            unpicked, then select the check boxes available just below the
            technicians list box. Based on your need you can enable both the
            check boxes or select any one or none.
          </p>
          <p className="text-muted">
            You can enter a short description about the Group in the Description
            field. This will help in knowing the kind of requests that will be
            grouped under this Group and hence help in assigning technicians to
            this Group.
          </p>
          <p className="text-muted"> 
            Click the Save button to save the Group and return to the list view.
          </p>
          <p className="fw-600"> Assigning organization roles</p>         
          <ul className="text-muted list-style-1">
            <li>Click a technician group, then select the roles and add users to them.</li>
            <li>You can associate a user when adding a new technician group as well.</li>
            <li>In a similar way, you can associate Region, Site and Department level roles to users.</li>
          </ul>
          <p className="text-muted"><strong>Note:</strong> If you delete a group that's used in any request, the group will be inactivated and move under the nactive Groups tab. You can enable it anytime using the Mark as Active button.</p>





        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};
export default AddTechnician;
