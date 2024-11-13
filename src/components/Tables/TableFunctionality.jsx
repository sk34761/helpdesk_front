import { Button, Form, Modal, Table } from "react-bootstrap";
import { nanoid } from "nanoid";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { JSX } from "react/jsx-runtime";
import { ClassAttributes, Fragment, HTMLAttributes, useState } from "react";

// ******************************************************
// ******************************************************
// ******************************************************


export const COLUMNS = [
  {
    Header: "Name",
    accessor: "Name",
    //   className: "wd-20p borderrigth",
  },
  {
    Header: "Name (Display Name)",
    accessor: "Name (Display Name)",
    // className: "wd-25p",
  },
  {
    Header: "User Type",
    accessor: "User Type",
    //   className: "wd-20p borderrigth",
  },
  {
    Header: "Login Name",
    accessor: "Login Name",
    //   className: "wd-15p borderrigth",
  },
  {
    Header: "Email",
    accessor: "Email",
    // className: "wd-20p borderrigth",
  },
  {
    Header: "Salary",
    accessor: "Salary",
    //   className: "wd-20p borderrigth",
  },
];
export const TECH = [
  {
    Header: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    accessor: "Name",
    className: "wd-20p",
  },

  {
    Header: "",
    accessor: "Edit",
    className: "wd-25p borderrigth",
  },
  {
    Header: "Group Name",
    accessor: "Groupname",
    //   className: "wd-25p borderrigth",
  },
  {
    Header: "Description",
    accessor: "Description",
    //   className: "wd-20p borderrigth",
  },
];
export const DATATECH = [
  {
    Id: "1",
    Name: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    Edit: (
      <Button variant="light" className="bg-transparent border-transparent">
        <i className="fe fe-edit-2"></i>
      </Button>
    ),
    Groupname: "Web Development",
    Description: "-",
  },
  {
    Id: "2",
    Name: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    Edit: (
      <Button variant="light" className="bg-transparent border-transparent">
        <i className="fe fe-edit-2"></i>
      </Button>
    ),
    Groupname: "Software",
    Description: "Users handling software and related issue or queries",
  },
  {
    Id: "3",
    Name: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    Edit: (
      <Button variant="light" className="bg-transparent border-transparent">
        <i className="fe fe-edit-2"></i>
      </Button>
    ),
    Groupname: "Printer Problems",
    Description: "All Problems related to printer are assigned to this queue",
  },
  {
    Id: "4",
    Name: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    Edit: (
      <Button variant="light" className="bg-transparent border-transparent">
        <i className="fe fe-edit-2"></i>
      </Button>
    ),
    Groupname: "Onboarding",
    Description:
      "Users handling processes and issues related to onboarding new employees",
  },
  {
    Id: "5",
    Name: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    Edit: (
      <Button variant="light" className="bg-transparent border-transparent">
        <i className="fe fe-edit-2"></i>
      </Button>
    ),
    Groupname: "Network",
    Description:
      "All Requests are assigned to this Group. All Network related requests have to be attended in 30 mins",
  },
  {
    Id: "6",
    Name: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    Edit: (
      <Button variant="light" className="bg-transparent border-transparent">
        <i className="fe fe-edit-2"></i>
      </Button>
    ),
    Groupname: "Major Incident Team",
    Description:
      "Technicians handling issues that have major impact on the organization",
  },
  {
    Id: "7",
    Name: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    Edit: (
      <Button variant="light" className="bg-transparent border-transparent">
        <i className="fe fe-edit-2"></i>
      </Button>
    ),
    Groupname: "Maintenance",
    Description: "Users handling routine and scheduled maintenances",
  },
  {
    Id: "8",
    Name: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    Edit: (
      <Button variant="light" className="bg-transparent border-transparent">
        <i className="fe fe-edit-2"></i>
      </Button>
    ),
    Groupname: "Internet",
    Description: "Users handling issues and queried related to network",
  },
  {
    Id: "9",
    Name: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    Edit: (
      <Button variant="light" className="bg-transparent border-transparent">
        <i className="fe fe-edit-2"></i>
      </Button>
    ),
    Groupname: "Infra-SSO",
    Description: "Users handling data infrastructure and Single-Sign On",
  },
  {
    Id: "10",
    Name: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    Edit: (
      <Button variant="light" className="bg-transparent border-transparent">
        <i className="fe fe-edit-2"></i>
      </Button>
    ),
    Groupname: "Hosting Team",
    Description: "Users involved with hosting events and guests",
  },
];
export const USER = [
  {
    Header: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    accessor: "Id",
    className: "wd-20p",
  },
  {
    Header: "",
    accessor: "setting",
    className: "wd-25p borderrigth",
  },
  {
    Header: "Name (Display Name)",
    accessor: "Name",
    className: "wd-25p borderrigth",
  },

  {
    Header: "User Type",
    accessor: "Usertype",
    //   className: "wd-25p borderrigth",
  },
  {
    Header: "Login Name",
    accessor: "login",
    //   className: "wd-25p borderrigth",
  },
  {
    Header: "Email",
    accessor: "email",
    //   className: "wd-25p borderrigth",
  },
  {
    Header: "Department Name",
    accessor: "departmentname",
    //   className: "wd-20p borderrigth",
  },
  {
    Header: "Employee ID",
    accessor: "employeeid",
    //   className: "wd-25p borderrigth",
  },
  {
    Header: "Phone",
    accessor: "phone",
    //   className: "wd-20p borderrigth",
  },

  {
    Header: "Job Title",
    accessor: "jobtitle",
    //   className: "wd-25p borderrigth",
  },
  {
    Header: "Mobile",
    accessor: "mobile",
    //   className: "wd-20p borderrigth",
  },
  {
    Header: "Site",
    accessor: "site",
    //   className: "wd-20p borderrigth",
  },
  {
    Header: "First Name",
    accessor: "fristname",
    //   className: "wd-20p borderrigth",
  },
  {
    Header: "Last Name",
    accessor: "lastname",
    //   className: "wd-20p borderrigth",
  },
  {
    Header: "Actions",
    accessor: "Actions",
    //   className: "wd-20p borderrigth",
  },
];
export const DATATABLE = [
  {
    Id: "1",
    Name: "Tiger Nixon",
    Position: "System Architect",
    Office: "Edinburgh",
    Age: "61",
    date: "2011-04-25",
    Salary: "$320,800",
  },
  {
    Id: "2",
    Name: "Garrett Winters",
    Position: "Accountant",
    Office: "Tokyo",
    Age: "63",
    date: "2011-07-25",
    Salary: "$170,750",
  },
  {
    Id: "3",
    Name: "Ashton Cox",
    Position: "Junior Technical Author",
    Office: "San Francisco",
    Age: "66",
    date: "2009-01-12",
    Salary: "$86,000",
  },
  {
    Id: "4",
    Name: "Cedric Kelly",
    Position: "Senior Javascript Developer",
    Office: "Edinburgh",
    Age: "22",
    date: "2012-03-29",
    Salary: "$433,060",
  },
  {
    Id: "5",
    Name: "Airi Satou",
    Position: "Accountant",
    Office: "Tokyo",
    Age: "33",
    date: "2010-10-14",
    Salary: "$162,700",
  },
  {
    Id: "6",
    Name: "Brielle Williamson",
    Position: "Integration Specialist",
    Office: "New York",
    Age: "61",
    date: "2009-09-15",
    Salary: "$372,000",
  },
  {
    Id: "7",
    Name: "Herrod Chandler",
    Position: "Sales Assistant",
    Office: "San Francisco",
    Age: "59",
    date: "2008-12-13",

    Salary: "$137,500",
  },

  {
    Id: "8",
    Name: "Rhona Davidson",
    Position: "Integration Specialist",
    Office: "Tokyo",
    Age: "55",
    date: "2008-12-19",
    Salary: "$327,900",
  },
  {
    Id: "9",
    Name: "Colleen Hurst",
    Position: "Javascript Developer",
    Office: "San Francisco",
    Age: "39",
    date: "2013-03-03",
    Salary: "$205,500",
  },
  {
    Id: "10",
    Name: "Sonya Frost",
    Position: "Software Engineer",
    Office: "Edinburgh",
    Age: "23",
    date: "2013-03-03",
    Salary: "$103,600",
  },
  {
    Id: "11",
    Name: "Jena Gaines",
    Position: "Office Manager",
    Office: "London",
    Age: "30",
    date: "2008-10-16",
    Salary: "$90,560",
  },
  {
    Id: "12",
    Name: "Quinn Flynn",
    Position: "Support Lead",
    Office: "Edinburgh",
    Age: "22",
    date: "2012-12-18",
    Salary: "$342,000",
  },
  {
    Id: "13",
    Name: "Charde Marshall",
    Position: "Regional Director",
    Office: "San Francisco",
    Age: "36",
    date: "2010-06-09",
    Salary: "$470,600",
  },
  {
    Id: "14",
    Name: "Haley Kennedy",
    Position: "Senior Marketing Designer",
    Office: "London",
    Age: "43",
    date: "2009-04-10",
    Salary: "$313,500",
  },
  {
    Id: "15",
    Name: "Tatyana Fitzpatrick",
    Position: "Regional Director",
    Office: "London",
    Age: "19",
    date: "2012-10-13",
    Salary: "$385,750",
  },
  {
    Id: "16",
    Name: "Michael Silva",
    Position: "Marketing Designer",
    Office: "London",
    Age: "66",
    date: "2012-09-26",
    Salary: "$198,500",
  },
  {
    Id: "17",
    Name: "Paul Byrd",
    Position: "Chief Financial Officer (CFO)",
    Office: "New York",
    Age: "64",
    date: "2011-09-03",
    Salary: "$725,000",
  },
  {
    Id: "18",
    Name: "Gloria Little",
    Position: "Systems Administrator",
    Office: "New York",
    Age: "59",
    date: "2009-06-25",
    Salary: "$237,500",
  },
  {
    Id: "19",
    Name: "Bradley Greer",
    Position: "Software Engineer",
    Office: "London",
    Age: "41",
    date: "2011-12-12",
    Salary: "$132,000",
  },
  {
    Id: "20",
    Name: "Dai Rios",
    Position: "Personnel Lead",
    Office: "Edinburgh",
    Age: "35",
    date: "2010-09-20",
    Salary: "$217,500",
  },
  {
    Id: "21",
    Name: "Jenette Caldwell",
    Position: "Development Lead",
    Office: "New York",
    Age: "30",
    date: "2009-10-09",
    Salary: "$345,000",
  },
  {
    Id: "22",
    Name: "Yuri Berry",
    Position: "Chief Marketing Officer (CMO)",
    Office: "New York",
    Age: "40",
    date: "2010-12-22",
    Salary: "$675,000",
  },
  {
    Id: "23",
    Name: "Caesar Vance",
    Position: "Pre-Sales Support",
    Office: "New York",
    Age: "21",
    date: "2010-11-14",
    Salary: "$106,450",
  },
  {
    Id: "24",
    Name: "Doris Wilder",
    Position: "Sales Assistant",
    Office: "Sidney",
    Age: "23",
    date: "2011-06-07",
    Salary: "$85,600",
  },
  {
    Id: "25",
    Name: "Angelica Ramos",
    Position: "Chief Executive Officer (CEO)",
    Office: "London",
    Age: "47",
    date: "2010-03-11",
    Salary: "$1,200,000",
  },
  {
    Id: "26",
    Name: "Gavin Joyce",
    Position: "Developer",
    Office: "Edinburgh",
    Age: "42",
    date: "2011-08-14",
    Salary: "$92,575",
  },
  {
    Id: "27",
    Name: "Jennifer Chang",
    Position: "Regional Director",
    Office: "Singapore",
    Age: "28",
    date: "2011-05-07",
    Salary: "$357,650",
  },
  {
    Id: "28",
    Name: "Brenden Wagner",
    Position: "Software Engineer",
    Office: "San Francisco",
    Age: "28",
    date: "2011-08-14",
    Salary: "$206,850",
  },
  {
    Id: "29",
    Name: "Fiona Green",
    Position: "Chief Operating Officer (COO)",
    Office: "San Francisco",
    Age: "48",
    date: "2009-10-09",
    Salary: "$850,000",
  },
  {
    Id: "30",
    Name: "Shou Itou",
    Position: "Regional Marketing",
    Office: "Tokyo",
    Age: "20",
    date: "2011-09-03",
    Salary: "$163,000",
  },
  {
    Id: "31",
    Name: "Michelle House",
    Position: "Integration Specialist",
    Office: "Sidney",
    Age: "37",
    date: "2011-04-25",
    Salary: "$95,400",
  },
  {
    Id: "32",
    Name: "Suki Burks",
    Position: "Developer",
    Office: "London",
    Age: "53",
    date: "2012-11-27",
    Salary: "$114,500",
  },
  {
    Id: "33",
    Name: "Prescott Bartlett",
    Position: "Technical Author",
    Office: "London",
    Age: "27",
    date: "2009-06-25",
    Salary: "$145,000",
  },
  {
    Id: "34",
    Name: "Gavin Cortez",
    Position: "Team Leader",
    Office: "San Francisco",
    Age: "22",
    date: "2008-11-13",
    Salary: "$235,500",
  },
  {
    Id: "35",
    Name: "Martena Mccray",
    Position: "Post-Sales support",
    Office: "Edinburgh",
    Age: "46",
    date: "2013-02-01",
    Salary: "$324,050",
  },
  {
    Id: "36",
    Name: "Unity Butler",
    Position: "Marketing Designer",
    Office: "San Francisco",
    Age: "47",
    date: "2012-09-26",
    Salary: "$85,675",
  },
  {
    Id: "37",
    Name: "Howard Hatfield",
    Position: "Office Manager",
    Office: "San Francisco",
    Age: "51",
    date: "2011-06-02",
    Salary: "$164,500",
  },
  {
    Id: "38",
    Name: "Hope Fuentes",
    Position: "Secretary",
    Office: "San Francisco",
    Age: "41",
    date: "2008-10-26",
    Salary: "$109,850",
  },
  {
    Id: "39",
    Name: "Vivian Harrell",
    Position: "Financial Controller",
    Office: "San Francisco",
    Age: "62",
    date: "2009-02-14",

    Salary: "$452,500",
  },
  {
    Id: "40",
    Name: "Timothy Mooney",
    Position: "Office Manager",
    Office: "London",
    Age: "37",
    date: "2008-12-16",
    Salary: "$136,200",
  },
  {
    Id: "41",
    Name: "Jackson Bradshaw",
    Position: "Director",
    Office: "New York",
    Age: "65",
    date: "2009-10-22",
    Salary: "$645,750",
  },
  {
    Id: "42",
    Name: "Olivia Liang",
    Position: "Support Engineer",
    Office: "Singapore",
    Age: "64",
    date: "2009-10-22",
    Salary: "$234,500",
  },
  {
    Id: "43",
    Name: "Bruno Nash",
    Position: "Software Engineer",
    Office: "London",
    Age: "38",
    date: "2008-12-11",

    Salary: "$163,500",
  },
  {
    Id: "44",
    Name: "Sakura Yamamoto",
    Position: "Support Engineer",
    Office: "Tokyo",
    Age: "37",
    date: "2010-03-11",
    Salary: "$139,575",
  },
  {
    Id: "45",
    Name: "Thor Walton",
    Position: "Developer",
    Office: "New York",
    Age: "61",
    date: "2011-05-07",
    Salary: "$98,540",
  },
  {
    Id: "46",
    Name: "Finn Camacho",
    Position: "Support Engineer",
    Office: "San Francisco",
    Age: "47",
    date: "2009-10-22",

    Salary: "$87,500",
  },
  {
    Id: "47",
    Name: "Serge Baldwin",
    Position: "Data Coordinator",
    Office: "Singapore",
    Age: "64",
    date: "2008-10-26",
    Salary: "$138,575",
  },
  {
    Id: "48",
    Name: "Zenaida Frank",
    Position: "Software Engineer",
    Office: "New York",
    Age: "63",
    date: "2009-10-09",

    Salary: "$125,250",
  },
  {
    Id: "49",
    Name: "Zorita Serrano",
    Position: "Software Engineer",
    Office: "San Francisco",
    Age: "56",
    date: "2011-05-07",
    Salary: "$115,000",
  },
  {
    Id: "50",
    Name: "Jennifer Acosta",
    Position: "Junior Javascript Developer",
    Office: "Edinburgh",
    Age: "43",
    date: "2011-06-07",
    Salary: "$75,650",
  },
  {
    Id: "51",
    Name: "Cara Stevens",
    Position: "Sales Assistant",
    Office: "New York",
    Age: "46",
    date: "2009-02-14",

    Salary: "$145,600",
  },
  {
    Id: "52",
    Name: "Hermione Butler",
    Position: "Regional Director",
    Office: "London",
    Age: "47",
    date: "2011-03-09",

    Salary: "$356,250",
  },
  {
    Id: "53",
    Name: "Lael Greer",
    Position: "Systems Administrator",
    Office: "London",
    Age: "21",
    date: "2009-02-14",

    Salary: "$103,500",
  },
  {
    Id: "54",
    Name: "Jonas Alexander",
    Position: "Developer",
    Office: "San Francisco",
    Age: "30",
    date: "2011-12-06",

    Salary: "$86,500",
  },
  {
    Id: "55",
    Name: "Shad Decker",
    Position: "Regional Director",
    Office: "Edinburgh",
    Age: "51",
    date: "2011-03-21",

    Salary: "$183,000",
  },
  {
    Id: "56",
    Name: "Michael Bruce",
    Position: "Javascript Developer",
    Office: "Singapore",
    Age: "29",
    date: "2009-02-27",

    Salary: "$183,000",
  },
  {
    Id: "57",
    Name: "Donna Snider",
    Position: "Customer Support",
    Office: "New York",
    Age: "27",
    date: "2010-07-14",
    Salary: "$112,000",
  },
  {
    Id: "58",
    Name: "Fiona Green",
    Position: "Chief Operating Officer (COO)",
    Office: "San Francisco",
    Age: "48",
    date: "2008-11-13",
    Salary: "$850,000",
  },
  {
    Id: "59",
    Name: "Shou Itou",
    Position: "Regional Marketing",
    Office: "Tokyo",
    Age: "20",
    date: "2011-06-27",
    Salary: "$163,000",
  },
  {
    Id: "60",
    Name: "Prescott Bartlett",
    Position: "Technical Author",
    Office: "London",
    Age: "27",
    date: "2011-01-25",
    Salary: "$145,000",
  },
];
export const USERDATATABLE = [
  {
    Id: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    setting: (
      <Button variant="link" className="text-decoration-none text-dark">
        <i className="fe fe-settings"></i>
      </Button>
    ),
    Name: "Tony Samuel",
    Usertype: "Requester",
    login: "-",
    email: "shawn.adams@zylker.com",
    departmentname: "IT Services",
    employeeid: "-",
    jobtitle: "1011",
    mobile: "-",
    site: "	Base Site	",
    fristname: "Wade",
    lastname: "Williams",
    Actions: (
      <div className="d-flex gap-2">
        {" "}
        <button className="btn btn-sm btn-icon btn-info-light rounded-circle">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-sm btn-icon btn-secondary-light rounded-circle">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    ),
  },
  {
    Id: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    setting: (
      <Button variant="link" className="text-decoration-none text-dark">
        <i className="fe fe-settings"></i>
      </Button>
    ),
    Name: "Tony Samuel",
    Usertype: "Requester",
    login: "-",
    email: "shawn.adams@zylker.com",
    departmentname: "IT Services",
    employeeid: "-",
    jobtitle: "1011",
    mobile: "-",
    site: "	Base Site	",
    fristname: "Wade",
    lastname: "Williams",
    Actions: (
      <div className="d-flex gap-2">
        {" "}
        <button className="btn btn-sm btn-icon btn-info-light rounded-circle">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-sm btn-icon btn-secondary-light rounded-circle">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    ),
  },
  {
    Id: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    setting: (
      <Button variant="link" className="text-decoration-none text-dark">
        <i className="fe fe-settings"></i>
      </Button>
    ),
    Name: "Tony Samuel",
    Usertype: "Requester",
    login: "-",
    email: "shawn.adams@zylker.com",
    departmentname: "IT Services",
    employeeid: "-",
    jobtitle: "1011",
    mobile: "-",
    site: "	Base Site	",
    fristname: "Wade",
    lastname: "Williams",
    Actions: (
      <div className="d-flex gap-2">
        {" "}
        <button className="btn btn-sm btn-icon btn-info-light rounded-circle">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-sm btn-icon btn-secondary-light rounded-circle">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    ),
  },
  {
    Id: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    setting: (
      <Button variant="link" className="text-decoration-none text-dark">
        <i className="fe fe-settings"></i>
      </Button>
    ),
    Name: "Tony Samuel",
    Usertype: "Requester",
    login: "-",
    email: "shawn.adams@zylker.com",
    departmentname: "IT Services",
    employeeid: "-",
    jobtitle: "1011",
    mobile: "-",
    site: "	Base Site	",
    fristname: "Wade",
    lastname: "Williams",
    Actions: (
      <div className="d-flex gap-2">
        {" "}
        <button className="btn btn-sm btn-icon btn-info-light rounded-circle">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-sm btn-icon btn-secondary-light rounded-circle">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    ),
  },
  {
    Id: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    setting: (
      <Button variant="link" className="text-decoration-none text-dark">
        <i className="fe fe-settings"></i>
      </Button>
    ),
    Name: "Tony Samuel",
    Usertype: "Requester",
    login: "-",
    email: "shawn.adams@zylker.com",
    departmentname: "IT Services",
    employeeid: "-",
    jobtitle: "1011",
    mobile: "-",
    site: "	Base Site	",
    fristname: "Wade",
    lastname: "Williams",
    Actions: (
      <div className="d-flex gap-2">
        {" "}
        <button className="btn btn-sm btn-icon btn-info-light rounded-circle">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-sm btn-icon btn-secondary-light rounded-circle">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    ),
  },
  {
    Id: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    setting: (
      <Button variant="link" className="text-decoration-none text-dark">
        <i className="fe fe-settings"></i>
      </Button>
    ),
    Name: "Tony Samuel",
    Usertype: "Requester",
    login: "-",
    email: "shawn.adams@zylker.com",
    departmentname: "IT Services",
    employeeid: "-",
    jobtitle: "1011",
    mobile: "-",
    site: "	Base Site	",
    fristname: "Wade",
    lastname: "Williams",
    Actions: (
      <div className="d-flex gap-2">
        {" "}
        <button className="btn btn-sm btn-icon btn-info-light rounded-circle">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-sm btn-icon btn-secondary-light rounded-circle">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    ),
  },
  {
    Id: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    setting: (
      <Button variant="link" className="text-decoration-none text-dark">
        <i className="fe fe-settings"></i>
      </Button>
    ),
    Name: "Tony Samuel",
    Usertype: "Requester",
    login: "-",
    email: "shawn.adams@zylker.com",
    departmentname: "IT Services",
    employeeid: "-",
    jobtitle: "1011",
    mobile: "-",
    site: "	Base Site	",
    fristname: "Wade",
    lastname: "Williams",
    Actions: (
      <div className="d-flex gap-2">
        {" "}
        <button className="btn btn-sm btn-icon btn-info-light rounded-circle">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-sm btn-icon btn-secondary-light rounded-circle">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    ),
  },
  {
    Id: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    setting: (
      <Button variant="link" className="text-decoration-none text-dark">
        <i className="fe fe-settings"></i>
      </Button>
    ),
    Name: "Tony Samuel",
    Usertype: "Requester",
    login: "-",
    email: "shawn.adams@zylker.com",
    departmentname: "IT Services",
    employeeid: "-",
    jobtitle: "1011",
    mobile: "-",
    site: "	Base Site	",
    fristname: "Wade",
    lastname: "Williams",
    Actions: (
      <div className="d-flex gap-2">
        {" "}
        <button className="btn btn-sm btn-icon btn-info-light rounded-circle">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-sm btn-icon btn-secondary-light rounded-circle">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    ),
  },
  {
    Id: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    setting: (
      <Button variant="link" className="text-decoration-none text-dark">
        <i className="fe fe-settings"></i>
      </Button>
    ),
    Name: "Tony Samuel",
    Usertype: "Requester",
    login: "-",
    email: "shawn.adams@zylker.com",
    departmentname: "IT Services",
    employeeid: "-",
    jobtitle: "1011",
    mobile: "-",
    site: "	Base Site	",
    fristname: "Wade",
    lastname: "Williams",
    Actions: (
      <div className="d-flex gap-2">
        {" "}
        <button className="btn btn-sm btn-icon btn-info-light rounded-circle">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-sm btn-icon btn-secondary-light rounded-circle">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    ),
  },
  {
    Id: (
      <Form.Group className="mb-0" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="" />
      </Form.Group>
    ),
    setting: (
      <Button variant="link" className="text-decoration-none text-dark">
        <i className="fe fe-settings"></i>
      </Button>
    ),
    Name: "Tony Samuel",
    Usertype: "Requester",
    login: "-",
    email: "shawn.adams@zylker.com",
    departmentname: "IT Services",
    employeeid: "-",
    jobtitle: "1011",
    mobile: "-",
    site: "	Base Site	",
    fristname: "Wade",
    lastname: "Williams",
    Actions: (
      <div className="d-flex gap-2">
        {" "}
        <button className="btn btn-sm btn-icon btn-info-light rounded-circle">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-sm btn-icon btn-secondary-light rounded-circle">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    ),
  },
];

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};

export const BasicTable = () => {
  const tableInstance = useTable(
    {
      columns: TECH,
      data: DATATECH,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      {/* <div className="d-flex">
                <select
                    className=" mb-4 selectpage border me-1"
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {[10, 25, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div> */}
      <table {...getTableProps()} className="table table-hover mb-0 ">
        <thead className="bg-gray-200">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={column.className}
                  key={Math.random()}
                >
                  <span className="tabletitle">{column.render("Header")}</span>
                  <span className="float-end">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa fa-angle-down"></i>
                      ) : (
                        <i className="fa fa-angle-up"></i>
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={Math.random()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="borderrigth"
                      {...cell.getCellProps()}
                      key={Math.random()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-block d-sm-flex mt-4 ">
        <span className="">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span className="ms-sm-auto ">
          <Button
            variant=""
            className="btn-outline-light tablebutton me-2 d-sm-inline d-block my-1"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {" Previous "}
          </Button>
          <Button
            variant=""
            className="btn-outline-light tablebutton me-2 my-1"
            onClick={() => {
              previousPage();
            }}
            disabled={!canPreviousPage}
          >
            {" << "}
          </Button>
          <Button
            variant=""
            className="btn-outline-light tablebutton me-2 my-1"
            onClick={() => {
              previousPage();
            }}
            disabled={!canPreviousPage}
          >
            {" < "}
          </Button>
          <Button
            variant=""
            className="btn-outline-light tablebutton me-2 my-1"
            onClick={() => {
              nextPage();
            }}
            disabled={!canNextPage}
          >
            {" > "}
          </Button>
          <Button
            variant=""
            className="btn-outline-light tablebutton me-2 my-1"
            onClick={() => {
              nextPage();
            }}
            disabled={!canNextPage}
          >
            {" >> "}
          </Button>
          <Button
            variant=""
            className="btn-outline-light tablebutton me-2 d-sm-inline d-block my-1"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {" Next "}
          </Button>
        </span>
      </div>
    </>
  );
};
export const UserTable = () => {
  const tableInstance = useTable(
    {
      columns: USER,
      data: USERDATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      {/* <div className="d-flex">
                <select
                    className=" mb-4 selectpage border me-1"
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {[10, 25, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div> */}
      <table {...getTableProps()} className="table table-hover mb-0 ">
        <thead className="bg-gray-200">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={column.className}
                  key={Math.random()}
                >
                  <span className="tabletitle">{column.render("Header")}</span>
                  <span className="float-end">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa fa-angle-down"></i>
                      ) : (
                        <i className="fa fa-angle-up"></i>
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={Math.random()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="borderrigth"
                      {...cell.getCellProps()}
                      key={Math.random()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div className="d-block d-sm-flex mt-4 ">
        <span className="">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span className="ms-sm-auto ">
          <Button
            variant=""
            className="btn-outline-light tablebutton me-2 d-sm-inline d-block my-1"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {" Previous "}
          </Button>
          <Button
            variant=""
            className="btn-outline-light tablebutton me-2 my-1"
            onClick={() => {
              previousPage();
            }}
            disabled={!canPreviousPage}
          >
            {" << "}
          </Button>
          <Button
            variant=""
            className="btn-outline-light tablebutton me-2 my-1"
            onClick={() => {
              previousPage();
            }}
            disabled={!canPreviousPage}
          >
            {" < "}
          </Button>
          <Button
            variant=""
            className="btn-outline-light tablebutton me-2 my-1"
            onClick={() => {
              nextPage();
            }}
            disabled={!canNextPage}
          >
            {" > "}
          </Button>
          <Button
            variant=""
            className="btn-outline-light tablebutton me-2 my-1"
            onClick={() => {
              nextPage();
            }}
            disabled={!canNextPage}
          >
            {" >> "}
          </Button>
          <Button
            variant=""
            className="btn-outline-light tablebutton me-2 d-sm-inline d-block my-1"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {" Next "}
          </Button>
        </span>
      </div> */}
    </>
  );
};

// ******************************************************

export const Savetable = () => {
  const [modalShow, setModalShow] = useState(false);
  const data = [
    {
      id: "1",
      sno: "1",
      Name: "Yonna",
      lastname: "Qond",
      position: "Financial Controller",
      email: "jacke123@gmail.com",
      salary: "$143,654",
    },
    {
      id: "2",
      sno: "2",
      Name: "Zonna",
      lastname: "Jond",
      position: "Accountant",
      email: "virginia456@gmail.com",
      salary: "$343,654",
    },
    {
      id: "3",
      sno: "3",
      Name: "Nonna",
      lastname: "Tond",
      position: "Chief Executive Officer",
      email: "jacobthomson@gmail.com",
      salary: "$743,654",
    },
    {
      id: "4",
      sno: "4",
      Name: "Bonna",
      lastname: "Oond",
      position: "Chief Operating Officer",
      email: "trevor@gmail.com",
      salary: "$643,654",
    },
    {
      id: "5",
      sno: "5",
      Name: "Honna",
      lastname: "Pond",
      position: "Data Coordinator",
      email: "kylie@gmail.com",
      salary: "$243,654",
    },
    {
      id: "6",
      sno: "6",
      Name: "Fonna",
      lastname: "Nond",
      position: "Developer",
      email: "jan@gmail.com",
      salary: "$543,654",
    },
    {
      id: "7",
      sno: "7",
      Name: "Aonna",
      lastname: "Xond",
      position: "Development lead",
      email: "trevor@gmail.com",
      salary: "$843,654",
    },
    {
      id: "8",
      sno: "8",
      Name: "Qonna",
      lastname: "Vond",
      position: "Director",
      email: "kylie@gmail.com",
      salary: "$843,654",
    },
    {
      id: "9",
      sno: "9",
      Name: "Jond",
      lastname: "Zonna",
      position: "Marketing Officer",
      email: "emily@gmail.com",
      salary: "$843,654",
    },
    {
      id: "10",
      sno: "10",
      Name: "Yonna",
      lastname: "Qond",
      position: "Financial Controller",
      email: "jan@gmail.com",
      salary: "$433,060",
    },
  ];
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    sno: "",
    Name: "",
    lastname: "",
    position: "",
    email: "",
    salary: "",
  });

  const [editFormData, setEditFormData] = useState({
    sno: "",
    Name: "",
    lastname: "",
    position: "",
    email: "",
    salary: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      sno: addFormData.sno,
      Name: addFormData.Name,
      lastname: addFormData.lastname,
      position: addFormData.position,
      email: addFormData.email,
      salary: addFormData.salary,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

    setModalShow(false);

    setAddFormData({
      sno: "",
      Name: "",
      lastname: "",
      position: "",
      email: "",
      salary: "",
    });
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      sno: editFormData.sno,
      Name: editFormData.Name,
      lastname: editFormData.lastname,
      position: editFormData.position,
      email: editFormData.email,
      salary: editFormData.salary,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      sno: contact.sno,
      Name: contact.Name,
      lastname: contact.lastname,
      position: contact.position,
      email: contact.email,
      salary: contact.salary,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <Form onSubmit={handleEditFormSubmit}>
        <Button
          variant=""
          className="btn btn-primary mb-3"
          onClick={() => setModalShow(true)}
        >
          Add New Row
        </Button>
        <Table
          id="delete-datatable"
          className="table table-bordered text-nowrap border-bottom"
        >
          <thead>
            <tr>
              <th className="wd-5p text-center">S NO</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment key={contact.id}>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </Table>
      </Form>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title as="h6" id="contained-modal-title-vcenter">
            Add New Row
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddFormSubmit} className="">
            <Form.Control
              type="number"
              name="sno"
              required
              placeholder="S No..."
              onChange={handleAddFormChange}
              className="form-control mb-2 border"
            />
            <Form.Control
              type="text"
              name="Name"
              required
              placeholder="Enter a name..."
              onChange={handleAddFormChange}
              className="form-control mb-2 border"
            />
            <Form.Control
              type="text"
              name="lastname"
              required
              placeholder="Enter an lastname..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <Form.Control
              type="text"
              name="position"
              required
              placeholder="Position..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <Form.Control
              type="email"
              name="email"
              required
              placeholder="Enter an email..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <Form.Control
              type="number"
              name="salary"
              required
              placeholder="Salary..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <Button
              variant=""
              className="btn btn-primary me-2 wd-100p "
              type="submit"
            >
              Add
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-primary wd-20p"
            onClick={() => setModalShow(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <Form.Control
          type="text"
          required
          placeholder="S NO"
          name="Sno"
          value={editFormData.sno}
          onChange={handleEditFormChange}
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Form.Control
          type="text"
          required
          placeholder="Enter a name..."
          name="Name"
          value={editFormData.Name}
          onChange={handleEditFormChange}
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Form.Control
          type="text"
          required
          placeholder="Enter an lastname..."
          name="lastname"
          value={editFormData.lastname}
          onChange={handleEditFormChange}
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Form.Control
          type="text"
          required
          placeholder="Enter a phone number..."
          name="position"
          value={editFormData.position}
          onChange={handleEditFormChange}
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Form.Control
          type="email"
          required
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Form.Control
          type="number"
          required
          placeholder="Salary..."
          name="salary"
          value={editFormData.salary}
          onChange={handleEditFormChange}
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Button variant="" className="btn btn-primary me-1" type="submit">
          Save
        </Button>
        <Button
          variant=""
          className="btn btn-danger me-1"
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
      </td>
    </tr>
  );
};

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td className="wd-5p text-center">{contact.sno}</td>
      <td>{contact.Name}</td>
      <td>{contact.lastname}</td>
      <td>{contact.position}</td>
      <td>{contact.email}</td>
      <td>{contact.salary}</td>
      <td>
        <Button
          variant=""
          className="btn btn-primary me-1"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </Button>
        <Button
          variant=""
          className="btn btn-danger me-1"
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

// ******************************************************

export const ResponsiveDataTable = () => {
  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    // _pageOptions,
    gotoPage,
    pageCount,
    // setPageSize,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <div className="e-table">
        <div className="d-flex">
          {/* <select
              className="mb-4 border me-1 text-dark bg-transparent"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 25, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                 {pageSize}
                </option>
              ))}
            </select> */}
          <GlobalResFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        <div className="table-responsive ">
          <Table {...getTableProps()} className=" text-nowrap mb-0">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={Math.random()}
                      className={column.className}
                    >
                      <span className="tabletitle">
                        {column.render("Header")}
                      </span>
                      <span className="float-end">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <i className="fa fa-angle-down"></i>
                          ) : (
                            <i className="fa fa-angle-up"></i>
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr className="" {...row.getRowProps()} key={Math.random()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()} key={Math.random()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="d-block d-sm-flex mt-4 ">
          <span className="">
            Showing 41 to 50 of 50 entries{" "}
            {/* <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "} */}
          </span>
          <span className="ms-sm-auto ">
            <Button
              variant=""
              className="btn-outline-light tablebutton me-2 my-2 d-sm-inline d-block"
              onClick={() => gotoPage(0)}
              disabled={!canNextPage}
            >
              {" Previous "}
            </Button>
            <Button
              variant="primary"
              className="tablebutton me-2 my-2"
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              {" 1 "}
            </Button>
            <Button
              variant=""
              className="btn-outline-light tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" 2 "}
            </Button>
            <Button
              variant=""
              className="btn-outline-light tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" 3 "}
            </Button>
            <Button
              variant=""
              className="btn-outline-light tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" 4"}
            </Button>
            <Button
              variant=""
              className="btn-outline-light tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" 5 "}
            </Button>
            <Button
              variant=""
              className="btn-outline-light tablebutton me-2 my-2"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {" Next "}
            </Button>
          </span>
        </div>
      </div>
    </>
  );
};
const GlobalResFilter = ({ filter, setFilter }) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};
