import { Fragment, useState } from "react";
import Pageheader from "../../layouts/Component/PageHeader/PageHeader";
import {
  Button,
  Col,
  Form,
  InputGroup,
  Breadcrumb,
  Row,

  Dropdown,
  Nav,
  Pagination as ReactPagination,

} from "react-bootstrap";
import 'react-tabulator/lib/styles.css';
import { ReactTabulator } from 'react-tabulator'
import Table from "react-bootstrap/Table";
import SideBarUser from "./components/SideBar";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { BasicTable } from "../Tables/TableFunctionality";



const ActiveGroups = () => {
  // initial value is `false`
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    // Change state to the opposite (to ture) when checkbox changes
    setChecked(!checked);
  };
  const columns = [
    { title: "Name", field: "name", width: 150 },
    { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
    { title: "Favourite Color", field: "col" },
    { title: "Date Of Birth", field: "dob", hozAlign: "center" },
    { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
    { title: "Passed?", field: "passed", hozAlign: "center", formatter: "tickCross" }
  ];
  var data = [
    {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
    {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
    {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
    {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
    {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
  ];



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
                        <h5 className="mb-0 px-0 ">Active Group</h5>
                       
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
                   
                    <div className="d-flex py-2 justify-content-between">

          <div className="d-flex gap-2">
            {" "}
            <Button variant="outline-light" href="/Users/TechnicianGroups">New Group</Button>
            <Button variant="outline-light">Delete</Button>
           
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
                 
                    
                    <span className="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success-emphasis bg-primary-subtle border rounded-0 mt-0 border-primary-subtle rounded-2">
                      Following{" "}
                      <a className="fw-bold px-2">Technician Groups </a>are also
                      associated with{" "}
                      <a href="" className="fw-bold px-2">
                        3 more site(s)
                      </a>
                    </span>
                   <BasicTable />
                 
                  </Tab.Pane>
                  <Tab.Pane eventKey={2} className="p-0"></Tab.Pane>
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

export default ActiveGroups;
