import { Fragment } from "react";
import Pageheader from "../../layouts/Component/PageHeader/PageHeader";
import {
  Card,
  Col,
  Row,
  Button,
  Breadcrumb,
  Pagination as ReactPagination,
} from "react-bootstrap";
import Select, { components } from 'react-select';
import { Link } from "react-router-dom";
import SideBarUser from "./components/SideBar";


const Roles = () => {
  const options = [
    { value: 'chocolate', label: <div className="d-flex gap-2"><span className="fw-600">Instance Settings</span>Instance Configurations</div> },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  return (
    <Fragment>
      <Pageheader
        heading="Default Tables"
        homepage="Tables"
        activepage="Default Tables"
      />

      <div className="main-container bg-white p-0">
        <Row>
          <Col xxl={2} xl={4} lg={5} md={5} className="ps-1">
            <SideBarUser />
          </Col>
          <Col xxl={10} xl={8} lg={7} md={7} className="ps-0">
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
                  <div className="sreach-box">

                
                <Select options={options}  closeMenuOnSelect={false}
        className="react-select-container"
  classNamePrefix="react-select" />
  <span className="sreach-icon"><i className="fe fe-search"></i></span>
  </div>

             
                </div>
              </div>
              <div className="d-flex w-100 justify-content-between flex-column">
                <div className="d-flex justify-content-between align-items-center pb-3">
                  <h5 className="mb-0">Roles</h5>
                 

               
      <Button variant="primary" className="btn-icon rounded-pill">
                    <i className="fe fe-help-circle"></i>
                  </Button>
                </div>

                <div className="d-flex py-2 border-top border-bottom justify-content-between">
                  <div>
                    {" "}
                    <Button variant="outline-light">New Role</Button>
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
              </div>
              <Card className="shadow-none">
                <Card.Body className="p-0">
                  <div className="bg-light-gray bg-gray-300 py-3">
                    <h6 className="fw-500 mb-0 ms-1 ps-9">Role Name</h6>
                  </div>
                  <div className="px-3 d-flex gap-2 role-card py-3 w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">AnnouncementConfig</h6>
                      <p className="mb-0 text-muted">
                        Full control to configure and manage announcements
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 role-card py-3 w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">ContractConfig</h6>
                      <p className="mb-0 text-muted">
                        Can configure vendor, notifications, and
                        contract-related additional fields.
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 role-card py-3 w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">HelpdeskConfig</h6>
                      <p className="mb-0 text-muted">
                        Can customize helpdesk fields, configure templates,
                        SLAs, business rules, notifications, closure rules,
                        preventive maintenance tasks, technician auto assign and
                        data archive.
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 role-card py-3 w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">PurchaseConfig</h6>
                      <p className="mb-0 text-muted">
                        Can configure currency, product, vendor, and
                        notifications and customize purchase fields.
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 role-card py-3 w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">SDAssetManager</h6>
                      <p className="mb-0 text-muted">
                        This mandatory role grants asset manager privileges. It
                        cannot be edited or deleted.
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 role-card py-3 w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">ContractConfig</h6>
                      <p className="mb-0 text-muted">
                        Can configure vendor, notifications, and
                        contract-related additional fields.
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 py-3 role-card w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">HelpdeskConfig</h6>
                      <p className="mb-0 text-muted">
                        Can customize helpdesk fields, configure templates,
                        SLAs, business rules, notifications, closure rules,
                        preventive maintenance tasks, technician auto assign and
                        data archive.
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 role-card py-3 w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">PurchaseConfig</h6>
                      <p className="mb-0 text-muted">
                        Can configure currency, product, vendor, and
                        notifications and customize purchase fields.
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 py-3 role-card w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">AnnouncementConfig</h6>
                      <p className="mb-0 text-muted">
                        Full control to configure and manage announcements
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 py-3 role-card w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">ContractConfig</h6>
                      <p className="mb-0 text-muted">
                        Can configure vendor, notifications, and
                        contract-related additional fields.
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 py-3 role-card w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">HelpdeskConfig</h6>
                      <p className="mb-0 text-muted">
                        Can customize helpdesk fields, configure templates,
                        SLAs, business rules, notifications, closure rules,
                        preventive maintenance tasks, technician auto assign and
                        data archive.
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 py-3 role-card w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">PurchaseConfig</h6>
                      <p className="mb-0 text-muted">
                        Can configure currency, product, vendor, and
                        notifications and customize purchase fields.
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 py-3 role-card w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">SDAssetManager</h6>
                      <p className="mb-0 text-muted">
                        This mandatory role grants asset manager privileges. It
                        cannot be edited or deleted.
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 py-3 role-card w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">ContractConfig</h6>
                      <p className="mb-0 text-muted">
                        Can configure vendor, notifications, and
                        contract-related additional fields.
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 py-3 role-card w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">HelpdeskConfig</h6>
                      <p className="mb-0 text-muted">
                        Can customize helpdesk fields, configure templates,
                        SLAs, business rules, notifications, closure rules,
                        preventive maintenance tasks, technician auto assign and
                        data archive.
                      </p>
                    </div>
                  </div>
                  <div className="px-3 d-flex gap-2 py-3 role-card w-100 border-bottom align-items-center">
                    <div className="d-flex gap-2">
                      <Link>
                        <i className="fe fe-trash-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-edit-2 fs-18"></i>
                      </Link>
                      <Link>
                        <i className="fe fe-user fs-18"></i>
                      </Link>
                    </div>
                    <div className="px-3">
                      <h6 className="mb-0">PurchaseConfig</h6>
                      <p className="mb-0 text-muted">
                        Can configure currency, product, vendor, and
                        notifications and customize purchase fields.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
export default Roles;