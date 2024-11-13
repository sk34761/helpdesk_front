import { Fragment, useState } from "react";
import Pageheader from "../../layouts/Component/PageHeader/PageHeader";
import {
  Badge,
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  InputGroup,
  Breadcrumb,
  Row,
  Pagination as ReactPagination,
} from "react-bootstrap";
import { usergridData } from "../../common/Commontabledata";
import { Link } from "react-router-dom";
import ALLImages from "../../common/ImageData";
import { userData } from "../../common/CommonData";
import Table from "react-bootstrap/Table";
import SideBarUser from "./components/SideBar";
import { UserTable, ResponsiveDataTable, Savetable } from '../Tables/TableFunctionality';


//react tabuelater 

import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";

const UserSettings = () => {
  const [activeNavItem, setActiveNavItem] = useState("first");
  const [modalshow, setModalShow] = useState(false);
  const handleModalShow = () => setModalShow(true);

  const [newUserData, setNewUserData] = useState({
    username: "",
    country: "",
    profileImage: "",
  });

  const [userListData, setUserListData] = useState(userData);
  const [editingRow, setEditingRow] = useState(null);
  const [editedUserData, setEditedUserData] = useState({
    username: "",
    email: "",
    country: "",
    status: "",
    created: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleNavItemClick = (eventKey) => {
    setActiveNavItem(eventKey);
  };

  const renderSearchBar = () => {
    return (
      <InputGroup className={`${activeNavItem}_searchbar`}>
        <Form.Control
          placeholder={`Search ${activeNavItem === "first" ? "..." : "Email"}`}
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="" className="border" id="basic-addon2">
          <i className="bi bi-search text-muted"></i>
        </Button>
      </InputGroup>
    );
  };

  const handleModalClose = () => {
    setModalShow(false);
    setNewUserData({
      username: "",
      country: "",
      profileImage: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (files) => {
    setNewUserData((prevData) => ({
      ...prevData,
      profileImage: files?.[0] || "",
    }));
  };

  const handleAddUser = () => {
    setUserListData((prevData) => [
      {
        id: Date.now(),
        // preview:
        //   newUserData.profileImage instanceof File
        //     ? URL.createObjectURL(newUserData.profileImage)
        //     : newUserData.profileImage,
        username: newUserData.username,
        country: newUserData.country,
        status: "Active",
        created: new Date().toLocaleDateString(),
        color: "primary",
        checked: false,
      },
      ...prevData,
    ]);

    handleModalClose();
  };

  const handleEdit = (userId) => {
    const userToEdit = userListData.find((user) => user.id === userId);
    setEditingRow(userId);
    setEditedUserData({
      username: userToEdit?.username || "",
      country: userToEdit?.country || "",
      status: userToEdit?.status || "",
      created: userToEdit?.created || "",
    });
  };

  const handleSaveEdit = (userId) => {
    const updatedData = userListData.map((user) =>
      user.id === userId
        ? {
            ...user,
            username: editedUserData.username,
            country: editedUserData.country,
            status: editedUserData.status,
            created: editedUserData.created,
          }
        : user
    );

    setEditingRow(null);
    setEditedUserData({ username: "", country: "", status: "", created: "" });
    setUserListData(updatedData);
  };

  const handleCancelEdit = () => {
    setEditingRow(null);
    setEditedUserData({ username: "", country: "", status: "", created: "" });
  };

  const handleDelete = (userId) => {
    const updatedData = userListData.filter((user) => user.id !== userId);
    setUserListData(updatedData);
  };

  const filteredUserListData = userListData.filter((user) => {
    const searchLowerCase = searchTerm.toLowerCase();
    return (
      user.username.toLowerCase().includes(searchLowerCase) ||
      user.country.toLowerCase().includes(searchLowerCase) ||
      user.status.toLowerCase().includes(searchLowerCase) ||
      user.created.toLowerCase().includes(searchLowerCase)
    );
  });
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
      <Pageheader
        heading="User List"
        homepage="Admin UI"
        activepage="User List"
      />
      <div className="main-container bg-white p-0">
        <Row>
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

              <div className="d-flex w-100 py-0 justify-content-between border-bottom flex-column">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 pe-2 border-end">Users</h5>
                    <Dropdown className="mx-2">
                      <Dropdown.Toggle
                        variant="link"
                        className="text-decoration-none text-dark fs-14"
                        id="dropdown-basic"
                      >
                        All Users
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Assign Approval Permissions{" "}
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Mark as VIP user
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Assign Project Role{" "}
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Assign Department{" "}
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="d-flex gap-3">
                    <Form.Group
                      as={Row}
                      className="mb-0"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="5">
                        User category :
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
              <div className="d-flex py-2 justify-content-between">
                <div className="d-flex gap-2">
                  {" "}
                  <Button variant="outline-light">New Requester</Button>
                  <Button variant="outline-light">New Technician</Button>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-light"
                      id="dropdown-basic"
                    >
                      Actions
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Assign Approval Permissions{" "}
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Mark as VIP user
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Assign Project Role{" "}
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Assign Department{" "}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div>
                  <ReactPagination className="radius-pagination">
                    <ReactPagination.Item>{1}</ReactPagination.Item>

                    <ReactPagination.Ellipsis />
                    <ReactPagination.Item>{18}</ReactPagination.Item>
                    <ReactPagination.First />
                    <ReactPagination.Last />
                  </ReactPagination>
                </div>
              </div>

              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="mb-4"
              >
                <Card className="shadow-none">
                  <Card.Body className="p-0">
                    <div className="gap-2 py-0 w-100 border-top align-items-center">
                      <UserTable/>
                   
                    </div>
                  
                
                  </Card.Body>
                </Card>
              
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default UserSettings;
