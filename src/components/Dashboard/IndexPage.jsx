import { FC, Fragment } from 'react';
import Pageheader from '../../layouts/Component/PageHeader/PageHeader';
import { Badge, Card, Col, Dropdown, ProgressBar, Row, Table } from 'react-bootstrap';
import ALLImages from '../../common/ImageData';
import { Link } from 'react-router-dom';
import { Donut_update, Ethereum, Ethereum1, OrderAnalytics, Total_Revenue } from '../../common/ChartData';


const Indexpage = () => {

  return (
    <Fragment>
      <Pageheader heading="Dashboard" homepage="Admin" activepage='Dashboard' />

      <div className="main-container container-fluid">
        <Row>
          <Col xxl={9}>
            <Row>
              <Col xxl={5} xl={12}>
                <Row>
                  <Col xl={3} lg={6} md={6} sm={6} xxl={6}>
                    <Card>
                      <Card.Body>
                        <div className="d-flex align-items-start">
                          <div className="flex-grow-1">
                            <p className="mb-0">Total Orders</p>
                              <span className="fs-5">45</span>
                              <span className="fs-12 text-success ms-2">
                                <i className="ti ti-trending-up mx-1"></i>0.5%
                              </span>
                            </div>
                          <div className="min-w-fit-content ms-3">
                            <span className="avatar avatar-md br-5 bg-primary-transparent text-primary">
                              <i className="fe fe-user fs-18"></i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={3} lg={6} md={6} sm={6} xxl={6}>
                    <Card>
                      <Card.Body>
                        <div className="d-flex align-items-start">
                          <div className="flex-grow-1">
                            <p className="mb-0">Total Package</p>
                              <span className="fs-5">10</span>
                              <span className="fs-12 text-secondary ms-2">
                                <i className="ti ti-trending-down mx-1"></i>8.0%
                              </span>
                          </div>
                          <div className="min-w-fit-content ms-3">
                            <span className="avatar avatar-md br-5 bg-secondary-transparent text-secondary">
                              <i className="fe fe-package fs-18"></i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={3} lg={6} md={6} sm={6} xxl={6}>
                    <Card>
                      <Card.Body>
                        <div className="d-flex align-items-start">
                          <div className="flex-grow-1">
                            <p className="mb-0">Total Payments</p>
                              <span className="fs-5">60</span>
                              <span className="fs-12 text-success ms-2">
                                <i className="ti ti-trending-up mx-1"></i>3.5%
                              </span>
                          </div>
                          <div className="min-w-fit-content ms-3">
                            <span className="avatar avatar-md br-5 bg-warning-transparent text-warning">
                              <i className="fe fe-credit-card fs-18"></i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={3} lg={6} md={6} sm={6} xxl={6}>
                    <Card>
                      <Card.Body>
                        <div className="d-flex align-items-start flex-wrap gap-1">
                          <div className="flex-grow-1">
                            <p className="mb-0">Subscriptions </p>
                              <span className="fs-5">10</span>
                              <span className="fs-12 text-success ms-2">
                                <i className="ti ti-trending-up mx-1"></i>0.5%
                              </span>
                          </div>
                          <div className="min-w-fit-content">
                            <span className="avatar avatar-md br-5 bg-info-transparent">
                              <i className="fe fe-user-plus fs-18"></i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6}>
                    <Card>
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3 flex-wrap gap-1">
                          <span className="avatar avatar-md stat-avatar rounded-circle text-bg-warning fs-18 min-w-fit-content me-2">
                            <i className="bi bi-bag-check"></i>
                          </span>
                          <p className="mb-0 flex-grow-1">
                            Total Sales by Unit
                          </p>
                        </div>
                        <span className="fs-5">$12,897</span>
                        <span className="fs-12 text-warning ms-2 d-inline-flex lh-1">
                          <i className="ti ti-trending-up mx-1"></i>3.5%
                        </span>
                        <div className="fw-normal d-flex align-items-center mb-2 mt-4">
                          <p className="mb-0 flex-grow-1">Active Sales</p>
                          <span>3,274</span>
                        </div>
                        <ProgressBar className='custom-progress-1' variant='warning' now={50} min={0} max={100} style={{ height: "5px" }} />
                      </Card.Body>
                      <div className="card-footer p-0 text-center">
                        <div className="d-grid">
                          <Link to="#" className="px-3 py-2 text-warning" >
                            View Details{" "}
                            <i className="ti ti-external-link"></i>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6}>
                    <Card className="overflow-hidden">
                      <Card.Body className="p-0">
                        <div className="px-3 pt-3">
                          <div className="d-flex align-items-center mb-3">
                            <span className="avatar avatar-md stat-avatar rounded-circle text-bg-primary fs-18 min-w-fit-content me-2">
                              <i className="bi bi-bar-chart"></i>
                            </span>
                            <p className="mb-0 flex-grow-1">Total Revenue</p>
                          </div>
                          <span className="fs-5">$8,889</span>
                          <span className="fs-12 text-success ms-2 d-inline-flex lh-1">
                            <i className="ti ti-trending-up mx-1"></i>5.5%
                          </span>
                        </div>
                        <Total_Revenue />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={12}>
                    <Card>
                      <Card.Header className="d-flex align-items-center justify-content-between border-bottom">
                        <h6 className="card-title">Recent Activities </h6>
                      </Card.Header>
                      <Card.Body>
                        <ul className="mb-0 recent-activity">
                          <li className="list-item activity-avatar-before info">
                            <div className="d-flex">
                              <div className="avatar p-1 avatar-md rounded-circle bg-info-transparent min-w-fit-content">
                                <span className="avatar avatar-sm activity-avatar bg-info min-w-fit-content rounded-circle cover-image">
                                  <i className="bi bi-briefcase fs-14"></i>
                                </span>
                              </div>
                              <div className="ms-3 flex-fill">
                                <p className="mb-0 fs-14">
                                  Nile Robetz mentioned a jogh in post
                                </p>
                                <span className="clearfix"></span>
                                <small className="text-muted fs-12 ">
                                  Uploaded a new post
                                </small>
                                <span className="clearfix"></span>
                              </div>
                              <div className="ms-auto">
                                <span className="text-muted fs-12 ms-2 text-truncate">
                                  <i className="bi bi-clock"></i> 11:17 am
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="list-item activity-avatar-before danger">
                            <div className="d-flex">
                              <div className="avatar p-1 avatar-md rounded-circle bg-danger-transparent min-w-fit-content">
                                <span className="avatar avatar-sm activity-avatar bg-danger min-w-fit-content rounded-circle cover-image">
                                  <i className="bi bi-brightness-high fs-14"></i>
                                </span>
                              </div>
                              <div className="ms-3 flex-fill">
                                <p className="mb-0 fs-14">
                                  Always look on the bright side of life
                                </p>
                                <span className="clearfix"></span>
                                <small className="text-muted fs-12">
                                  Look at the Life
                                </small>
                                <span className="clearfix"></span>
                              </div>
                              <div className="ms-auto">
                                <span className="text-muted fs-12 ms-2 text-truncate">
                                  <i className="bi bi-clock"></i> 08:19 am
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="list-item activity-avatar-before success">
                            <div className="d-flex">
                              <div className="avatar p-1 avatar-md rounded-circle bg-success-transparent min-w-fit-content">
                                <span className="avatar avatar-sm activity-avatar bg-success min-w-fit-content rounded-circle cover-image">
                                  <i className="bi bi-peace fs-14"></i>
                                </span>
                              </div>
                              <div className="ms-3 flex-fill">
                                <p className="mb-0 fs-14">
                                  Peace on earth a wonderful width
                                </p>
                                <span className="clearfix"></span>
                                <small className="text-muted fs-12">
                                  Wonderful earth gives a peace
                                </small>
                                <span className="clearfix"></span>
                              </div>
                              <div className="ms-auto">
                                <span className="text-muted fs-12 ms-2 text-truncate">
                                  <i className="bi bi-clock"></i> 10:43 am
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="list-item activity-avatar-before warning">
                            <div className="d-flex">
                              <div className="avatar p-1 avatar-md rounded-circle bg-warning-transparent box-shadow-warning min-w-fit-content">
                                <span className="avatar avatar-sm activity-avatar bg-warning min-w-fit-content rounded-circle cover-image">
                                  <i className="bi bi-clock-history fs-14"></i>
                                </span>
                              </div>
                              <div className="ms-3 flex-fill">
                                <p className="mb-0 fs-14">
                                  A brief history of creation
                                </p>
                                <span className="clearfix"></span>
                                <small className="text-muted fs-12">
                                  Create your own history
                                </small>
                                <span className="clearfix"></span>
                              </div>
                              <div className="ms-auto">
                                <span className="text-muted fs-12 ms-2 text-truncate">
                                  <i className="bi bi-clock"></i> 07:27 pm
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="list-item activity-avatar-before danger">
                            <div className="d-flex">
                              <div className="avatar p-1 avatar-md rounded-circle bg-danger-transparent min-w-fit-content">
                                <span className="avatar avatar-sm activity-avatar bg-danger min-w-fit-content rounded-circle cover-image">
                                  <i className="bi bi-brightness-high fs-14"></i>
                                </span>
                              </div>
                              <div className="ms-3 flex-fill">
                                <p className="mb-0 fs-14">
                                  Always look on the bright side of life
                                </p>
                                <span className="clearfix"></span>
                                <small className="text-muted fs-12">
                                  Look at the Life
                                </small>
                                <span className="clearfix"></span>
                              </div>
                              <div className="ms-auto">
                                <span className="text-muted fs-12 ms-2 text-truncate">
                                  <i className="bi bi-clock"></i> 08:19 am
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="list-item activity-avatar-before info">
                            <div className="d-flex">
                              <div className="avatar p-1 avatar-md rounded-circle bg-info-transparent min-w-fit-content">
                                <span className="avatar avatar-sm activity-avatar bg-info min-w-fit-content rounded-circle cover-image">
                                  <i className="bi bi-briefcase fs-14"></i>
                                </span>
                              </div>
                              <div className="ms-3 flex-fill">
                                <p className="mb-0 fs-14">
                                  Nile Robetz mentioned a jogh in post
                                </p>
                                <span className="clearfix"></span>
                                <small className="text-muted fs-12 ">
                                  Uploaded a new post
                                </small>
                                <span className="clearfix"></span>
                              </div>
                              <div className="ms-auto">
                                <span className="text-muted fs-12 ms-2 text-truncate">
                                  <i className="bi bi-clock"></i> 11:17 am
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="list-item activity-avatar-before primary">
                            <div className="d-flex">
                              <div className="avatar p-1 avatar-md rounded-circle bg-primary-transparent min-w-fit-content">
                                <span className="avatar avatar-sm activity-avatar bg-primary min-w-fit-content rounded-circle cover-image">
                                  <i className="bi bi-broadcast-pin fs-14"></i>
                                </span>
                              </div>
                              <div className="ms-3 flex-fill">
                                <p className="mb-0 fs-14">
                                  The science of superstitions.
                                </p>
                                <span className="clearfix"></span>
                                <small className="text-muted fs-12">
                                  Volume is a superstitions
                                </small>
                                <span className="clearfix"></span>
                              </div>
                              <div className="ms-auto">
                                <span className="text-muted fs-12 ms-2 text-truncate">
                                  <i className="bi bi-clock"></i> 10:09 am
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col xxl={7} xl={12}>
                <Card>
                  <Card.Header className="justify-content-between">
                    <h6 className="card-title flex-grow-1 text-truncate me-3">
                      Monthly Orders Analytics
                    </h6>
                    <Dropdown>
                      <Dropdown.Toggle size='sm' variant="primary-light" id="dropdown-basic">View All</Dropdown.Toggle>
                      <Dropdown.Menu align='end'>
                        <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">This Week</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Last Week</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card.Header>
                  <Card.Body>
                    <OrderAnalytics />
                  </Card.Body>
                </Card>
                <Row>
                  <Col xl={12}>
                    <Card>
                      <Card.Header className="border-bottom justify-content-between">
                        <h6 className="card-title flex-grow-1 text-truncate me-3">
                          Best Selling Products
                        </h6>
                        <Dropdown>
                        <Dropdown.Toggle size='sm' variant="primary-light" id="dropdown-basic">View All</Dropdown.Toggle>
                          <Dropdown.Menu align='end'>
                            <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">This Week</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Last Week</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Card.Header>
                      <Card.Body className="p-0">
                        <div className="table-responsive">
                          <Table className="table-hover card-table mb-0">
                            <thead>
                              <tr>
                                <th className="ps-3 min-wd-200">Products</th>
                                <th>Categories</th>
                                <th>Sold</th>
                                <th>Price</th>
                                <th className="pe-3">Earnings</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="ps-3">
                                  <div className="d-flex align-items-center position-relative">
                                    <Link to="#" className="stretched-link" title="recruiter" ></Link>
                                    <div className="img-fluid lh-1 me-2">
                                      <img className="avatar avatar-md avatar-radius cover-image" src={ALLImages('shop21')} />
                                    </div>
                                    <div className="flex-grow-1"> <p className="mb-0">White headephones</p> </div>
                                  </div>
                                </td>
                                <td>Gadgets</td>
                                <td> <Badge bg='primary-transparent' className="rounded-pill"> 457 </Badge> </td>
                                <td> <span>$97</span> </td>
                                <td> <span>$74,890</span> </td>
                              </tr>
                              <tr>
                                <td className="ps-3">
                                  <div className="d-flex align-items-center position-relative">
                                    <Link to="#" className="stretched-link" title="recruiter" ></Link>
                                    <div className="img-fluid lh-1 me-2">
                                      <img className="avatar avatar-md avatar-radius cover-image" src={ALLImages('shop22')} />
                                    </div>
                                    <div className="flex-grow-1"> <p className="mb-0">Mini Alram</p> </div>
                                  </div>
                                </td>
                                <td>Fashion</td>
                                <td> <Badge bg='primary-transparent' className="rounded-pill"> 876 </Badge> </td>
                                <td> <span>$97</span> </td>
                                <td> <span>$74,890</span> </td>
                              </tr>
                              <tr>
                                <td className="ps-3">
                                  <div className="d-flex align-items-center position-relative">
                                    <Link to="#" className="stretched-link" title="recruiter" ></Link>
                                    <div className="img-fluid lh-1 me-2">
                                      <img className="avatar avatar-md avatar-radius cover-image" src={ALLImages('shop23')} />
                                    </div>
                                    <div className="flex-grow-1"> <p className="mb-0"> Camera-Lenses </p> </div>
                                  </div>
                                </td>
                                <td>Smart Home</td>
                                <td> <Badge bg='primary-transparent' className="rounded-pill"> 432 </Badge></td>
                                <td> <span>$97</span></td>
                                <td> <span>$74,890</span> </td>
                              </tr>
                              <tr>
                                <td className="ps-3">
                                  <div className="d-flex align-items-center position-relative">
                                    <Link to="#" className="stretched-link" title="recruiter" ></Link>
                                    <div className="img-fluid lh-1 me-2">
                                      <img className="avatar avatar-md avatar-radius cover-image" src={ALLImages('shop24')} />
                                    </div>
                                    <div className="flex-grow-1"> <p className="mb-0"> Photo Frame </p> </div>
                                  </div>
                                </td>
                                <td>Bags</td>
                                <td> <Badge bg='primary-transparent' className="rounded-pill"> 234 </Badge> </td>
                                <td> <span>$97</span> </td>
                                <td> <span>$74,890</span> </td>
                              </tr>
                              <tr>
                                <td className="ps-3">
                                  <div className="d-flex align-items-center position-relative">
                                    <Link to="#" className="stretched-link" title="recruiter"></Link>
                                    <div className="img-fluid lh-1 me-2"> <img className="avatar avatar-md avatar-radius cover-image" src={ALLImages('shop20')} /> </div>
                                    <div className="flex-grow-1"> <p className="mb-0">Sports Shoes</p> </div>
                                  </div>
                                </td>
                                <td>Electronics</td>
                                <td> <Badge bg='primary-transparent' className="rounded-pill"> 678 </Badge></td>
                                <td> <span>$97</span> </td>
                                <td> <span>$74,890</span> </td>
                              </tr>
                              <tr>
                                <td className="ps-3 border-bottom-0">
                                  <div className="d-flex align-items-center position-relative">
                                    <Link to="#" className="stretched-link" title="recruiter" ></Link>
                                    <div className="img-fluid lh-1 me-2"> <img className="avatar avatar-md avatar-radius cover-image" src={ALLImages('shop22')} /> </div>
                                    <div className="flex-grow-1"> <p className="mb-0">Mini Alram</p> </div>
                                  </div>
                                </td>
                                <td className='border-bottom-0'>Fashion</td>
                                <td className='border-bottom-0'> <Badge bg='primary-transparent' className="rounded-pill">876</Badge> </td>
                                <td className='border-bottom-0'> <span>$97</span></td>
                                <td className='border-bottom-0'> <span>$74,890</span></td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xxl={3}>
            <Row>
              <Col xxl={12} xl={12}>
                <Row>
                  <Col xl={12}>
                    <Card className="bg-primary tx-fixed-white card-bg-img">
                      <Card.Body className="position-relative d-flex justify-content-between">
                        <div>
                          <div className="flex-grow-1">
                            <p className="mb-1 fs-18 fw-semibold">
                              Top Sellers of this Week
                            </p>
                          </div>
                          <p className="mb-1 fs-13 op-8">
                            You have got 5 new offers, Track here
                            <br />
                            the Sales data and best deals here.
                          </p>
                          <span className="fs-16">3,531</span>
                          <span className="fs-12 op-7 ms-1 d-inline-flex">
                            <i className="ti ti-trending-up mx-1"></i>0.5%
                          </span>
                        </div>
                        <div className="min-w-fit-content">
                          <span className="avatar avatar-xxl bg-transparent">
                            <img src={ALLImages('png6')} className="op-7" alt="img" />
                          </span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6}>
                    <Card>
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                          <Ethereum />
                          <div className="min-w-fit-content mb-3">
                            <span className="avatar avatar-md br-5 bg-primary-transparent rounded-circle text-primary">
                              <i className="bi bi-briefcase fs-18"></i>
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <p className="mb-0">Total Projects</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="fs-5">60</span>
                            <span className="fs-12 text-primary ms-1">
                              <i className="ti ti-trending-down mx-1"></i>8.0%
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6}>
                    <Card>
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                          <Ethereum1 />
                          <div className="min-w-fit-content mb-3">
                            <span className="avatar avatar-md br-5 bg-secondary-transparent rounded-circle text-secondary">
                              <i className="fe fe-airplay fs-18"></i>
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <p className="mb-0">Completed Projects</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="fs-5">40</span>
                            <span className="fs-12 text-secondary ms-1">
                              <i className="ti ti-trending-down mx-1"></i>4.0%
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={12}>
                    <Card>
                      <Card.Header className="border-bottom justify-content-between flex-wrap gap-2">
                        <div>
                          <h6 className="card-title flex-grow-1 text-truncate me-3 mb-1">
                            Top Product Categories
                          </h6>
                        </div>
                        <Dropdown>
                        <Dropdown.Toggle size='sm' variant="primary-light" id="dropdown-basic">View All</Dropdown.Toggle>
                          <Dropdown.Menu align='end'>
                            <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">This Week</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Last Week</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Card.Header>
                      <Card.Body>
                        <div className="d-flex align-items-center avatar-before primary mb-3 flex-wrap gap-2">
                          <span className="avatar avatar-md stat-avatar rounded-circle fs-18 bg-primary-transparent min-w-fit-content">
                            <i className="bi bi-diagram-3"></i>
                          </span>
                          <div className="ms-3 flex-fill">
                            <p className="mb-0 fs-14">Women's Clothing</p>
                            <span className="clearfix"></span>
                            <small className="text-muted fs-12">
                              Differnt types of clothing
                            </small>
                          </div>
                          <div>
                            <Badge bg='light' className="text-dark p-2">
                              <i className="bi bi-circle-fill fs-8 me-1 text-primary"></i>
                              40 available
                            </Badge>
                          </div>
                        </div>
                        <div className="d-flex align-items-center avatar-before warning mb-3 flex-wrap gap-2">
                          <span className="avatar avatar-md stat-avatar rounded-circle fs-18 bg-warning-transparent min-w-fit-content">
                            <i className="bi bi-cast"></i>
                          </span>
                          <div className="ms-3 flex-fill">
                            <p className="mb-0 fs-14">Phones and Tablets</p>
                            <span className="clearfix"></span>
                            <small className="text-muted fs-12">
                              All models of phones
                            </small>
                          </div>
                          <div>
                            <Badge bg='light' className="text-dark p-2">
                              <i className="bi bi-circle-fill fs-8 me-1 text-warning"></i>
                              60 available
                            </Badge>
                          </div>
                        </div>
                        <div className="d-flex align-items-center avatar-before indigo mb-3 flex-wrap gap-2">
                          <span className="avatar avatar-md stat-avatar rounded-circle fs-18 bd-indigo-100 text-indigo min-w-fit-content">
                            <i className="bi bi-bag-check"></i>
                          </span>
                          <div className="ms-3 flex-fill">
                            <p className="mb-0 fs-14">Electronics</p>
                            <span className="clearfix"></span>
                            <small className="text-muted fs-12">
                              Related to all Electronics
                            </small>
                          </div>
                          <div>
                            <Badge bg='light' className="text-dark p-2">
                              <i className="bi bi-circle-fill fs-8 me-1 text-success"></i>
                              70 available
                            </Badge>
                          </div>
                        </div>
                        <div className="d-flex align-items-center avatar-before info mb-3 flex-wrap gap-2">
                          <span className="avatar avatar-md stat-avatar rounded-circle fs-18 bg-info-transparent min-w-fit-content">
                            <i className="bi bi-house-door"></i>
                          </span>
                          <div className="ms-3 flex-fill">
                            <p className="mb-0 fs-14">Home Appliances </p>
                            <span className="clearfix"></span>
                            <small className="text-muted fs-12">
                              Furnitures,gadgets etc..
                            </small>
                          </div>
                          <div>
                            <Badge bg='light' className="text-dark p-2">
                              <i className="bi bi-circle-fill fs-8 me-1 text-info"></i>
                              80 available
                            </Badge>
                          </div>
                        </div>
                        <div className="d-flex align-items-center avatar-before danger mb-0 flex-wrap gap-2">
                          <span className="avatar avatar-md stat-avatar rounded-circle fs-18 bg-danger-transparent min-w-fit-content">
                            <i className="bi bi-house-door"></i>
                          </span>
                          <div className="ms-3 flex-fill">
                            <p className="mb-0 fs-14">Home Appliances </p>
                            <span className="clearfix"></span>
                            <small className="text-muted fs-12">
                              Furnitures,gadgets etc..
                            </small>
                          </div>
                          <div>
                            <Badge bg='light' className="text-dark p-2">
                              <i className="bi bi-circle-fill fs-8 me-1 text-info"></i>
                              80 available
                            </Badge>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Header className="border-bottom justify-content-between">
                        <h6 className="card-title flex-grow-1 text-truncate me-3">
                          Order Status
                        </h6>
                      </Card.Header>
                      <Card.Body className="d-flex justify-content-center">
                        <Donut_update />
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xl={12}>
            <Card>
              <Card.Header>
                <h3 className="card-title mb-0">Product Sales</h3>
              </Card.Header>
              <Card.Body className="pt-4">
                <div className="grid-margin">
                  <div className="table-responsive">
                    <Table className="table-bordered text-nowrap mb-0">
                      <thead className="border-top">
                        <tr>
                          <th className="wp-5 border-bottom-0 my-auto text-center"><input className="form-check-input check-all" type="checkbox" value="" id="checkebox-sm" /></th>
                          <th className="border-bottom-0">Order no</th>
                          <th className="border-bottom-0">Product</th>
                          <th className="border-bottom-0">Ratings</th>
                          <th className="border-bottom-0">Customer</th>
                          <th className="border-bottom-0 text-center">Quantity </th>
                          <th className="border-bottom-0">Status</th>
                          <th className="border-bottom-0">Price</th>
                          <th className="border-bottom-0">Ordered date</th>
                          <th className="border-bottom-0">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-bottom user-list">
                          <td className="user-checkbox text-center">
                            <input className="form-check-input" type="checkbox" value="" defaultChecked />
                          </td>
                          <td className="fs-14 fw-semibold"><Link className="text-dark" to="#">#1537890</Link></td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-sm avatar-radius me-2">
                                <img src={ALLImages('shop1')} className="avatar-radius" alt="product" />
                              </span>
                              A semi minimal chair
                            </div>
                          </td>
                          <td className="fw-semibold fs-15">5.0{" "}
                            <span className="text-muted fw-normal fs-12">(90 Mem)</span>{" "}
                            <i className="fa fa-star text-warning fs-12"></i>
                          </td>
                          <td className="fs-14"><Link className="text-dark" to="#">Simon Cowall</Link></td>
                          <td className="text-center">1</td>
                          <td><Badge bg='success-transparent' className="badge-sm text-success fw-normal fs-11">Shipped</Badge></td>
                          <td className="fs-14 fw-semibold">$4320.29</td>
                          <td><span className="me-2">25 Mar 2022</span></td>
                          <td>
                            <div className="hstack gap-2 fs-1">
                              <Link to='#' aria-label="anchor" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light"><i className="ri-edit-line"></i></Link>
                              <Link aria-label="anchor" to='#' className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"><i className="ri-delete-bin-7-line"></i></Link>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom user-list">
                          <td className="user-checkbox text-center">
                            <input className="form-check-input" type="checkbox" value="" />
                          </td>
                          <td className="fs-14 fw-semibold text-success">
                            <Link className="text-dark" to="#"> #1539078 </Link>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-sm avatar-radius me-2">
                                <img src={ALLImages('shop2')} className="avatar-radius" alt="product" />
                              </span>
                              Two type of watch sets
                            </div>
                          </td>
                          <td className="fw-semibold fs-15">
                            3.0{" "} <span className="text-muted fw-normal fs-12">(50 Mem)</span>{" "}
                            <i className="fa fa-star text-warning fs-12"></i>
                          </td>
                          <td className="fs-14">
                            <Link className="text-dark" to="#">Meisha Kerr</Link>
                          </td>
                          <td className="text-center">2</td>
                          <td>
                            <Badge bg='danger-transparent' className="badge-sm text-danger fw-normal fs-11">
                              Cancelled
                            </Badge>
                          </td>
                          <td className="fs-14 fw-semibold">$6745.99</td>
                          <td>
                            <span className="me-2">25 Mar 2022</span>
                          </td>
                          <td>
                            <div className="hstack gap-2 fs-1">
                              <Link to="#" aria-label="anchor" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                <i className="ri-edit-line"></i>
                              </Link>
                              <Link aria-label="anchor" to='#' className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                <i className="ri-delete-bin-7-line"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom user-list">
                          <td className="user-checkbox text-center">
                            <input className="form-check-input" type="checkbox" value="" />
                          </td>
                          <td className="fs-14 fw-semibold">
                            <Link className="text-dark" to="#"> #1539832 </Link>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-sm avatar-radius me-2">
                                <img src={ALLImages('shop4')} className="avatar-radius" alt="product" />
                              </span>
                              Mony layer headphones
                            </div>
                          </td>
                          <td className="fw-semibold fs-15">4.5{" "} <span className="text-muted fw-normal fs-12"> (65 Mem) </span>{" "} <i className="fa fa-star text-warning fs-12"></i>
                          </td>
                          <td className="fs-14">
                            <Link className="text-dark" to="#"> Jessica </Link>
                          </td>
                          <td className="text-center">1</td>
                          <td>
                            <Badge bg='info-transparent' className="badge-sm text-info fw-normal fs-11"> Under Process </Badge>
                          </td>
                          <td className="fs-14 fw-semibold">$1176.89</td>
                          <td>
                            <span className="me-2">27 Feb 2022</span>
                          </td>
                          <td>
                            <div className="hstack gap-2 fs-1">
                              <Link to='#' aria-label="anchor" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light"> <i className="ri-edit-line"></i></Link>
                              <Link to='#' aria-label="anchor" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"><i className="ri-delete-bin-7-line"></i></Link>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom user-list">
                          <td className="user-checkbox text-center">
                            <input className="form-check-input" type="checkbox" value="" />
                          </td>
                          <td className="fs-14 fw-semibold">
                            <Link className="text-dark" to="#"> #1538267 </Link>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-sm avatar-radius me-2">
                                <img src={ALLImages('shop3')} className="avatar-radius" alt="product" />
                              </span>
                              Sportive coloured shoes
                            </div>
                          </td>
                          <td className="fw-semibold fs-15">
                            2.5{" "}
                            <span className="text-muted fw-normal fs-12">
                              (15 Mem)
                            </span>{" "}
                            <i className="fa fa-star text-warning fs-12"></i>
                          </td>
                          <td className="fs-14">
                            <Link className="text-dark" to="#" > Jason Stathman </Link>
                          </td>
                          <td className="text-center">1</td>
                          <td>
                            <Badge bg='warning-transparent' className="badge-sm text-warning fw-normal fs-11">
                              Pending
                            </Badge>
                          </td>
                          <td className="fs-14 fw-semibold">$1867.29</td>
                          <td>
                            <span className="me-2">2 Apr 2022</span>
                          </td>
                          <td>
                            <div className="hstack gap-2 fs-1">
                              <Link to='#' aria-label="anchor" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light"
                              ><i className="ri-edit-line"></i> </Link>
                              <Link to='#' aria-label="anchor" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                <i className="ri-delete-bin-7-line"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom user-list">
                          <td className="user-checkbox text-center">
                            <input className="form-check-input" type="checkbox" value="" />
                          </td>
                          <td className="fs-14 fw-semibold">
                            <Link className="text-dark" to="#"> #1537890 </Link>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-sm avatar-radius me-2">
                                <img src={ALLImages("shop7")} className="avatar-radius" alt="product" />
                              </span>
                              Vayon black shades
                            </div>
                          </td>
                          <td className="fw-semibold fs-15">
                            3.5{" "}
                            <span className="text-muted fw-normal fs-12">
                              (36 Mem)
                            </span>{" "}
                            <i className="fa fa-star text-warning fs-12"></i>
                          </td>
                          <td className="fs-14">
                            <Link className="text-dark" to="#"> Khabib Hussain </Link>
                          </td>
                          <td className="text-center">1</td>
                          <td>
                            <Badge bg='success-transparent' className="badge-sm text-success fw-normal fs-11">
                              Shipped
                            </Badge>
                          </td>
                          <td className="fs-14 fw-semibold">$2439.99</td>
                          <td>
                            <span className="me-2">8 Apr 2022</span>
                          </td>
                          <td>
                            <div className="hstack gap-2 fs-1">
                              <Link to='#' aria-label="anchor" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                <i className="ri-edit-line"></i>
                              </Link>
                              <Link to='#' aria-label="anchor" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                <i className="ri-delete-bin-7-line"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Indexpage;