import { Fragment } from "react";
import { Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
const SideBarUser = () => {
  return (
    <Fragment>
      <Card className="text-center rounded-0 sidenav bg-body-tertiary pt-4 border-0 shadow-none">
        <Card.Body className="px-0 py-0">
          <div className="text-start p-3">
            <h6 className="mb-0 fw-600 text-primary">Setup</h6>
          </div>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="border-0 bg-transparent">
              <Accordion.Header className="border-0 mb-0">
                Users & Permissions
              </Accordion.Header>
              <Accordion.Body className="px-0 py-0 bg-white">
                <div className="d-flex flex-column nav-item text-start">
                  <Link className="active">Roles</Link>
                  <Link className="text-black-50">Users</Link>
                  <Link className="text-black-50">User Groups</Link>
                  <Link className="text-black-50">Technician Groups</Link>
                  <Link className="text-black-50">Fine-Grained Access</Link>
                  <Link className="text-black-50">Privacy Settings</Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="border-0 bg-transparent">
              <Accordion.Header>Mail Settings</Accordion.Header>
              <Accordion.Body className="px-0 py-0 bg-white">
                <div className="d-flex flex-column nav-item text-start">
                  <Link className="active">Roles</Link>
                  <Link className="text-black-50">Users</Link>
                  <Link className="text-black-50">User Groups</Link>
                  <Link className="text-black-50">Technician Groups</Link>
                  <Link className="text-black-50">Fine-Grained Access</Link>
                  <Link className="text-black-50">Privacy Settings</Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="border-0 bg-transparent">
              <Accordion.Header>Customization</Accordion.Header>
              <Accordion.Body className="px-0 py-0 bg-white">
                <div className="d-flex flex-column nav-item text-start">
                  <Link className="active">Roles</Link>
                  <Link className="text-black-50">Users</Link>
                  <Link className="text-black-50">User Groups</Link>
                  <Link className="text-black-50">Technician Groups</Link>
                  <Link className="text-black-50">Fine-Grained Access</Link>
                  <Link className="text-black-50">Privacy Settings</Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SideBarUser;
