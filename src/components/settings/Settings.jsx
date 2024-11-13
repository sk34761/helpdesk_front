import { Fragment, useState } from "react";
import Pageheader from "../../layouts/Component/PageHeader/PageHeader";
import {
  Button,
  Col,
  Form,
  InputGroup,
  Row,
  Pagination as ReactPagination,
} from "react-bootstrap";
import "react-tabulator/lib/styles.css";
//import SideBarUser from "./components/SideBar";
import Select, { components } from 'react-select';

const SettingsHome = () => {
  const options = [
    { value: 'chocolate', label: <div className="d-flex gap-2"><span className="fw-600">Instance Settings</span>Instance Configurations</div> },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
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
    {
      title: "Passed?",
      field: "passed",
      hozAlign: "center",
      formatter: "tickCross",
    },
  ];
  var data = [
    { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
    { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
    {
      id: 3,
      name: "Christine Lobowski",
      age: "42",
      col: "green",
      dob: "22/05/1982",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "125",
      col: "orange",
      dob: "01/08/1980",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "16",
      col: "yellow",
      dob: "31/01/1999",
    },
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
          
          <Col xxl={12} xl={12} lg={12} md={12} className="bg-white ps-0">
            <div className="my-5">
              <div className="row justify-content-center pt-5 mt-5 py-3 align-items-center">
                <div className="col-lg-4 ">
                <div className="sreach-box">

                
<Select options={options}  closeMenuOnSelect={false}
className="react-select-container"
classNamePrefix="react-select" />
<span className="sreach-icon"><i className="fe fe-search"></i></span>
</div>
                
                </div>
              </div>
              <Row className="mt-5">
                <Col  lg={3} md={3}>
                <div className="text-center">
                <i className="fe fe-home fs-40 text-primary"></i>
                  <h5 className="fs-16 mb-0 fw-600 text-primary pt-3">Instance Configurations</h5>
                
                  <div className="d-flex">
                    <ul className="d-flex settings-li justify-content-center flex-wrap">
                      <li>
                        <a href="" >Instance Settings</a>
                      </li>
                      <li>
                        <a href="">Regions</a>
                      </li>
                      <li>
                        <a href="">Sites</a>
                      </li>
                      <li>
                        <a href="">Operational Hours</a>
                      </li>
                      <li>
                        <a href="">Holiday Groups</a>
                      </li>
                      <li>
                        <a href=""> Leave Types</a>
                      </li>
                      <li>
                        <a href="">  Departments</a>
                      </li>
                      <li>
                        <a href="">  Currency</a>
                      </li>
                      <li>
                        <a href="">  Organization Roles</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                
                </Col>
                <Col  lg={3} md={3}>
                <div className="text-center">
                <i className="fe fe-user fs-40  text-primary"></i> 
                  <h5 className="fs-16 mb-0 fw-600 text-primary pt-3">Users & Permissions</h5>
                
                  <div className="d-flex">
                    <ul className="d-flex settings-li justify-content-center flex-wrap">
                      <li>
                        <a href="" >Roles</a>
                      </li>
                      <li>
                        <a href="">Users</a>
                      </li>
                      <li>
                        <a href="">User Groups</a>
                      </li>
                      <li>
                        <a href="">Technician Groups</a>
                      </li>
                      <li>
                        <a href="">Fine-Grained Access</a>
                      </li>                     
                      <li>
                        <a href="">  Privacy Settings</a>
                      </li>
                     
                      
                    </ul>
                  </div>
                </div>
                
                </Col>
                <Col  lg={3} md={3}>
                <div className="text-center">
                <i className="fe fe-mail fs-40  text-primary"></i> 
                  <h5 className="fs-16 mb-0 fw-600 text-primary  pt-3">Mail Settings</h5>
                
                  <div className="d-flex">
                    <ul className="d-flex settings-li justify-content-center flex-wrap">
                      <li>
                        <a href="" >Mail Server Settings</a>
                      </li>
                      <li>
                        <a href="">Mail Addresses</a>
                      </li>
                      <li>
                        <a href="">Mail Box</a>
                      </li>
                      <li>
                        <a href="">Mail Filter</a>
                      </li>
                      <li>
                        <a href="">Email Command </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                </Col>
                <Col  lg={3} md={3}>
                <div className="text-center">
                <i className="fe fe-layers fs-40  text-primary"></i>                
                  <h5 className="fs-16 mb-0 fw-600 text-primary pt-3">Customization</h5>
                
                  <div className="d-flex">
                    <ul className="d-flex settings-li justify-content-center flex-wrap">
                      <li>
                        <a href="" >Helpdesk</a>
                      </li>
                      <li>
                        <a href="">Problem Management</a>
                      </li>
                      <li>
                        <a href="">Change Management</a>
                      </li>
                      <li>
                        <a href="">Project Management</a>
                      </li>
                      <li>
                        <a href="">Release Management</a>
                      </li>
                      <li>
                        <a href="">Solution Management</a>
                      </li>
                      <li>
                        <a href="">Asset Management</a>
                      </li>
                      <li>
                        <a href="">  CMDB</a>
                      </li>
                      <li>
                        <a href=""> Purchase Management</a>
                      </li>
                      <li>
                        <a href="">Contract Management</a>
                      </li>
                      <li>
                        <a href="">Additional Fields</a>
                      </li>
                      <li>
                        <a href="">Checklists</a>
                      </li>
                      <li>
                        <a href="">Announcement</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                
                </Col>
                <Col  lg={3} md={3}>
                <div className="text-center">
                <i className="fe fe-file-text fs-40  text-primary"></i>
                  <h5 className="fs-16 mb-0 fw-600 text-primary pt-3">Templates & Forms</h5>
                
                  <div className="d-flex">
                    <ul className="d-flex settings-li justify-content-center flex-wrap">
                      <li>
                        <a href="" >Instance Settings</a>
                      </li>
                      <li>
                        <a href="">Regions</a>
                      </li>
                      <li>
                        <a href="">Sites</a>
                      </li>
                      <li>
                        <a href="">Operational Hours</a>
                      </li>
                      <li>
                        <a href="">Holiday Groups</a>
                      </li>
                      <li>
                        <a href=""> Leave Types</a>
                      </li>
                      <li>
                        <a href="">  Departments</a>
                      </li>
                      <li>
                        <a href="">  Currency</a>
                      </li>
                      <li>
                        <a href="">  Organization Roles</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                
                </Col>
                <Col  lg={3} md={3}>
                <div className="text-center">
                <i className="fe fe-cpu fs-40  text-primary"></i> 
                  <h5 className="fs-16 mb-0 fw-600 text-primary pt-3">Automation</h5>
                
                  <div className="d-flex">
                    <ul className="d-flex settings-li justify-content-center flex-wrap">
                      <li>
                        <a href="" >Roles</a>
                      </li>
                      <li>
                        <a href="">Users</a>
                      </li>
                      <li>
                        <a href="">User Groups</a>
                      </li>
                      <li>
                        <a href="">Technician Groups</a>
                      </li>
                      <li>
                        <a href="">Fine-Grained Access</a>
                      </li>                     
                      <li>
                        <a href="">  Privacy Settings</a>
                      </li>
                     
                      
                    </ul>
                  </div>
                </div>
                
                </Col>
                <Col  lg={3} md={3}>
                <div className="text-center">
                <i className="fe fe-monitor fs-40  text-primary"></i> 
                  <h5 className="fs-16 mb-0 fw-600 text-primary  pt-3">Probes & Discovery</h5>
                
                  <div className="d-flex">
                    <ul className="d-flex settings-li justify-content-center flex-wrap">
                      <li>
                        <a href="" >Mail Server Settings</a>
                      </li>
                      <li>
                        <a href="">Mail Addresses</a>
                      </li>
                      <li>
                        <a href="">Mail Box</a>
                      </li>
                      <li>
                        <a href="">Mail Filter</a>
                      </li>
                      <li>
                        <a href="">Email Command </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                </Col>
                <Col  lg={3} md={3}>
                <div className="text-center">
                <i className="fe fe-layers fs-40  text-primary"></i>                
                  <h5 className="fs-16 mb-0 fw-600 text-primary pt-3">User Survey</h5>
                
                  <div className="d-flex">
                    <ul className="d-flex settings-li justify-content-center flex-wrap">
                      <li>
                        <a href="" >Helpdesk</a>
                      </li>
                      <li>
                        <a href="">Problem Management</a>
                      </li>
                      <li>
                        <a href="">Change Management</a>
                      </li>
                      <li>
                        <a href="">Project Management</a>
                      </li>
                      <li>
                        <a href="">Release Management</a>
                      </li>
                      <li>
                        <a href="">Solution Management</a>
                      </li>
                      <li>
                        <a href="">Asset Management</a>
                      </li>
                      <li>
                        <a href="">  CMDB</a>
                      </li>
                      <li>
                        <a href=""> Purchase Management</a>
                      </li>
                      <li>
                        <a href="">Contract Management</a>
                      </li>
                      <li>
                        <a href="">Additional Fields</a>
                      </li>
                      <li>
                        <a href="">Checklists</a>
                      </li>
                      <li>
                        <a href="">Announcement</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                
                </Col>
                <Col  lg={3} md={3}>
                <div className="text-center">
                <i className="fe fe-database fs-40  text-primary"></i> 
                  <h5 className="fs-16 mb-0 fw-600 text-primary pt-3">Data Administration</h5>
                
                  <div className="d-flex">
                    <ul className="d-flex settings-li justify-content-center flex-wrap">
                      <li>
                        <a href="" >Roles</a>
                      </li>
                      <li>
                        <a href="">Users</a>
                      </li>
                      <li>
                        <a href="">User Groups</a>
                      </li>
                      <li>
                        <a href="">Technician Groups</a>
                      </li>
                      <li>
                        <a href="">Fine-Grained Access</a>
                      </li>                     
                      <li>
                        <a href="">  Privacy Settings</a>
                      </li>
                     
                      
                    </ul>
                  </div>
                </div>
                
                </Col>
                <Col  lg={3} md={3}>
                <div className="text-center">
                <i className="fe fe-settings fs-40  text-primary"></i> 
                  <h5 className="fs-16 mb-0 fw-600 text-primary  pt-3">General Settings</h5>
                
                  <div className="d-flex">
                    <ul className="d-flex settings-li justify-content-center flex-wrap">
                      <li>
                        <a href="" >Mail Server Settings</a>
                      </li>
                      <li>
                        <a href="">Mail Addresses</a>
                      </li>
                      <li>
                        <a href="">Mail Box</a>
                      </li>
                      <li>
                        <a href="">Mail Filter</a>
                      </li>
                      <li>
                        <a href="">Email Command </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                </Col>
                <Col  lg={3} md={3}>
                <div className="text-center">
                <i className="fe fe-command fs-40  text-primary"></i> 
                <h5 className="fs-16 mb-0 fw-600 text-primary pt-3">Apps & Add-ons</h5>
                
                  <div className="d-flex">
                    <ul className="d-flex settings-li justify-content-center flex-wrap">
                      <li>
                        <a href="" >Mail Server Settings</a>
                      </li>
                      <li>
                        <a href="">Mail Addresses</a>
                      </li>
                      <li>
                        <a href="">Mail Box</a>
                      </li>
                      <li>
                        <a href="">Mail Filter</a>
                      </li>
                      <li>
                        <a href="">Email Command </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                </Col>
                <Col  lg={3} md={3}>
                <div className="text-center">
                <i className="fe fe-code fs-40 text-primary"></i>                
                  <h5 className="fs-16 mb-0 fw-600 text-primary pt-3">Developer Space</h5>
                
                  <div className="d-flex">
                    <ul className="d-flex settings-li justify-content-center flex-wrap">
                      <li>
                        <a href="" >Helpdesk</a>
                      </li>
                      <li>
                        <a href="">Problem Management</a>
                      </li>
                      <li>
                        <a href="">Change Management</a>
                      </li>
                      <li>
                        <a href="">Project Management</a>
                      </li>
                      <li>
                        <a href="">Release Management</a>
                      </li>
                      <li>
                        <a href="">Solution Management</a>
                      </li>
                      <li>
                        <a href="">Asset Management</a>
                      </li>
                      <li>
                        <a href="">  CMDB</a>
                      </li>
                      <li>
                        <a href=""> Purchase Management</a>
                      </li>
                      <li>
                        <a href="">Contract Management</a>
                      </li>
                      <li>
                        <a href="">Additional Fields</a>
                      </li>
                      <li>
                        <a href="">Checklists</a>
                      </li>
                      <li>
                        <a href="">Announcement</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default SettingsHome;
