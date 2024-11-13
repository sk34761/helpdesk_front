import { FC, Fragment, useState } from 'react';
import Pageheader from '../../layouts/Component/PageHeader/PageHeader';
import { Button, Toast, ToastContainer } from 'react-bootstrap';
import ALLImages from '../../common/ImageData';


const ToastComponent = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(true);
    const [show3, setShow3] = useState(true);
    const [show4, setShow4] = useState(true);
    const [show5, setShow5] = useState(true);
    const [show6, setShow6] = useState(true);
    const [show7, setShow7] = useState(true);
    const [show8, setShow8] = useState(true);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);
    const [show13, setShow13] = useState(false);
    const [show14, setShow14] = useState(false);
    const [show15, setShow15] = useState(false);
    const [show16, setShow16] = useState(false);
    const [show17, setShow17] = useState(false);
    const [show18, setShow18] = useState(false);
    const [show19, setShow19] = useState(false);
    const [show20, setShow20] = useState(false);
    const [show21, setShow21] = useState(true);
    const [show22, setShow22] = useState(true);
    const [show23, setShow23] = useState(true);

    const [showToasts, setShowToasts] = useState(['primary', 'secondary', 'success', 'danger']);

    const handleClose = (idx) => {
        const updatedToasts = showToasts.filter((color) => color !== idx);
        setShowToasts(updatedToasts);
    };

    return (
        <Fragment>
            <Pageheader heading="Toasts" homepage="UI Kit" activepage='Toasts' />

            <div className="main-container container-fluid">

                <div className="row">
                    <div className="col-xl-4 col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h3 className="card-title">Live Toasts</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <Button variant="primary" onClick={() => setShow(true)}>Show live toast</Button>
                                </div>
                                {show && (
                                <ToastContainer className="position-fixed top-0 end-0 p-3" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                    <Toast>
                                    <Toast.Header className="text-default mb-0">
                                        <img className="bd-placeholder-img rounded me-2" src={ALLImages('logo3')} alt="..." />
                                        <strong className="me-auto">Vexel</strong>
                                        <small>11 mins ago</small>
                                        <button className="btn-close fs-20" onClick={() => setShow(false)}><span aria-hidden="true">×</span></button>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Hello, world! This is a toast message.
                                    </Toast.Body>
                                    </Toast>
                                </ToastContainer>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h3 className="card-title">Basic Toasts</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="card-content p-3 p-sm-5">
                                    {show1 && (
                                        <Toast className="show">
                                            <div className="toast-header">
                                                <img src={ALLImages('logo5')} alt="" className="me-2" height="18" />
                                                <strong className="me-auto">React_Bootstrap</strong>
                                                <small>11 mins ago</small>
                                                <button className="btn-close fs-20" onClick={() => setShow1(false)}><span aria-hidden="true">×</span></button>
                                            </div>
                                            <div className="toast-body">
                                                Hello, world! This is a toast message.
                                            </div>
                                        </Toast>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h3 className="card-title">Translucent Toasts</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    {show2 && (
                                        <Toast className="show">
                                            <div className="toast-header">
                                                <img src={ALLImages('logo5')} alt="" className="me-2" height="18" />
                                                <strong className="me-auto">Bootstrap</strong>
                                                <small>11 mins ago</small>
                                                <button className="btn-close fs-20" onClick={() => setShow2(false)}><span aria-hidden="true">×</span></button>
                                            </div>
                                            <div className="toast-body">
                                                Hello, world! This is a toast message.
                                            </div>
                                        </Toast>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h3 className="card-title">Custom content Toasts</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 col-xl-6 mt-1">
                                        {show3 && (
                                            <Toast className="align-items-center show">
                                                <div className="d-flex">
                                                    <div className="toast-body">
                                                        Hello, world! This is a toast message.
                                                    </div>
                                                    <button aria-label="Close" className="btn-close fs-20 ms-auto mt-2 pe-2" onClick={() => setShow3(false)}><span aria-hidden="true">×</span></button>
                                                </div>
                                            </Toast>
                                        )}

                                    </div>
                                    <div className="col-md-12 col-xl-6 mt-1">
                                        {show4 && (
                                            <Toast className="show">
                                                <div className="toast-body">
                                                    Hello, world! This is a toast message.
                                                    <div className="mt-2 pt-2 border-top">
                                                        <Button variant='primary' size='sm' className='me-2'>Take action</Button>
                                                        <Button variant='secondary' size='sm' onClick={() => setShow4(false)}>Close</Button>
                                                    </div>
                                                </div>
                                            </Toast>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h3 className="card-title">Color Toasts</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {showToasts.map((idx) => (
                                        <div key={idx} className="col-md-6">
                                            <Toast className={`align-items-center tx-fixed-white bg-${idx} border-0 show my-2`}>
                                                <div className="d-flex">
                                                    <div className="toast-body">
                                                        Hello, world! This is a toast message.
                                                    </div>
                                                    <button className="btn-close fs-20 ms-auto mt-2 pe-2 tx-fixed-white" onClick={() => handleClose(idx)}>
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                            </Toast>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h3 className="card-title">Toasts Styles</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <div className="row gy-3">

                                        <div className="col-lg-6 col-xl-3 col-sm-6">
                                            {show5 && (
                                                <Toast className="show bg-primary tx-fixed-white">
                                                    <div className="toast-header flex-wrap">
                                                        <img src={ALLImages('logo5')} alt="" className="me-2" height="18" />
                                                        <strong className="me-auto text-primary">Bootstrap</strong>
                                                        <small>11 mins ago</small>
                                                        <Button variant='' className="btn-close fs-20" onClick={() => setShow5(false)}><span aria-hidden="true">×</span></Button>
                                                    </div>
                                                    <div className="toast-body">
                                                        Hello, world! This is a toast message.
                                                    </div>
                                                </Toast>
                                            )}
                                        </div>
                                        <div className="col-lg-6 col-xl-3 col-sm-6">
                                            {show6 && (
                                                <Toast className="show">
                                                    <div className="toast-header bg-info tx-fixed-white flex-wrap">
                                                        <img src={ALLImages('logo4')} alt="" className="me-2" height="18" />
                                                        <strong className="me-auto">Bootstrap</strong>
                                                        <small>11 mins ago</small>
                                                        <Button variant='' className="btn-close fs-20 tx-fixed-white" onClick={() => setShow6(false)}><span aria-hidden="true">×</span></Button>
                                                    </div>
                                                    <div className="toast-body">
                                                        Hello, world! This is a toast message.
                                                    </div>
                                                </Toast>
                                            )}
                                        </div>

                                        <div className="col-lg-6 col-xl-3 col-sm-6">
                                            {show7 && (
                                                <Toast className="toast-border-secondary bg-secondary-transparent align-items-center show">
                                                    <div className="d-flex">
                                                        <div className="toast-body d-flex flex-wrap">
                                                            <span className="avatar avatar-md avatar-radius bg-secondary me-2"><i className="bi bi-bell fs-15"></i></span>
                                                            <div>
                                                                <h6 className="mb-0">Header Toast</h6>
                                                                <p className="mb-0 fs-14">Hello, world! This is a toast message.</p>
                                                            </div>
                                                        </div>
                                                        <button className="btn-close fs-20 ms-auto mt-2 pe-2" onClick={() => setShow7(false)}><span aria-hidden="true">×</span></button>
                                                    </div>
                                                </Toast>
                                            )}
                                        </div>
                                        <div className="col-lg-6 col-xl-3 col-sm-6">
                                            {show8 && (
                                                <Toast className="toast toast-border-success align-items-center show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                                                    <div className="d-flex">
                                                        <div className="toast-body d-flex flex-wrap">
                                                            <span className="avatar avatar-md rounded-pill bg-success me-2"><i className="bi bi-headset fs-15"></i></span>
                                                            <div>
                                                                <h6 className="mb-0">Header Toast</h6>
                                                                <p className="mb-0 text-muted fs-14">Hello, world! This is a toast message.</p>
                                                            </div>
                                                        </div>
                                                        <button className="btn-close fs-20 ms-auto mt-2 pe-2" onClick={() => setShow8(false)}><span aria-hidden="true">×</span></button>
                                                    </div>
                                                </Toast>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-xl-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h3 className="card-title">Top Toasts Alignments</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <div className="btn-list">
                                        <Button variant="primary" onClick={() => setShow9(true)}>Top Left</Button>
                                        <Button variant="secondary" onClick={() => setShow10(true)}>Top Center</Button>
                                        <Button variant="success" onClick={() => setShow11(true)}>Top Right</Button>
                                        <Button variant="info" onClick={() => setShow12(true)}>Top Full Width</Button>
                                    </div>

                                    {show9 && (
                                        <ToastContainer className="position-fixed top-0 start-0 p-3">
                                            <Toast className="border-0">
                                                <div className="toast-header toast-header bg-primary text-white">
                                                    <img src={ALLImages('logo4')} alt="" className="me-2" height="18" />
                                                    <strong className="me-auto">Bootstrap</strong>
                                                    <button className="btn-close fs-20 text-white" onClick={() => setShow9(false)}><span aria-hidden="true">×</span></button>
                                                </div>
                                                <div className="toast-body">
                                                    Your,toast message here.
                                                </div>
                                            </Toast>
                                        </ToastContainer>
                                    )}

                                </div>

                                {show10 && (
                                    <ToastContainer className="position-fixed top-0 start-50 translate-middle-x p-3">
                                        <Toast className="border-0">
                                            <div className="toast-header toast-header bg-secondary text-white">
                                                <img src={ALLImages('logo4')} alt="" className="me-2" height="18" />
                                                <strong className="me-auto">Bootstrap</strong>
                                                <button className="btn-close fs-20 text-white" onClick={() => setShow10(false)}><span aria-hidden="true">×</span></button>
                                            </div>
                                            <div className="toast-body">
                                                Your,toast message here.
                                            </div>
                                        </Toast>
                                    </ToastContainer>
                                )}

                                {show11 && (
                                    <ToastContainer className="position-fixed top-0 end-0 p-3">
                                        <Toast className="border-0">
                                            <div className="toast-header toast-header bg-success text-white">
                                                <img src={ALLImages('logo4')} alt="" className="me-2" height="18" />
                                                <strong className="me-auto">Bootstrap</strong>
                                                <button className="btn-close fs-20 text-white" onClick={() => setShow11(false)}><span aria-hidden="true">×</span></button>
                                            </div>
                                            <div className="toast-body">
                                                Your,toast message here.
                                            </div>
                                        </Toast>
                                    </ToastContainer>
                                )}

                                {show12 && (
                                    <ToastContainer className="position-fixed top-0 end-0 start-0 w-100 p-3">
                                        <Toast className="border-0 w-100">
                                            <div className="toast-header toast-header bg-info text-white">
                                                <img src={ALLImages('logo4')} alt="" className="me-2" height="18" />
                                                <strong className="me-auto">Bootstrap</strong>
                                                <button className="btn-close fs-20 text-white" onClick={() => setShow12(false)}><span aria-hidden="true">×</span></button>
                                            </div>
                                            <div className="toast-body">
                                                Your,toast message here.
                                            </div>
                                        </Toast>
                                    </ToastContainer>
                                )}

                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-xl-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h3 className="card-title">Bottom Toasts Alignments</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <div className="btn-list">
                                        <Button variant="info-light" onClick={() => setShow13(true)}>Bottom Left</Button>
                                        <Button variant="success-light" onClick={() => setShow14(true)}>Bottom Center</Button>
                                        <Button variant="primary-light" onClick={() => setShow15(true)}>Bottom Right</Button>
                                        <Button variant="danger-light" onClick={() => setShow16(true)}>Bottom Full Width</Button>
                                    </div>
                                </div>
                                {show13 && (
                                    <ToastContainer className="position-fixed bottom-0 start-0 p-3">
                                        <Toast className="border-0 bg-info-transparent backdropfilter-20">
                                            <div className="toast-header toast-header bg-info-transparent">
                                                <img src={ALLImages('logo4')} alt="" className="me-2" height="18" />
                                                <strong className="me-auto">Bootstrap</strong>
                                                <button className="btn-close fs-20 text-info" onClick={() => setShow13(false)}><span aria-hidden="true">×</span></button>
                                            </div>
                                            <div className="toast-body">
                                                Your,toast message here.
                                            </div>
                                        </Toast>
                                    </ToastContainer>
                                )}
                                {show14 && (

                                    <ToastContainer className="position-fixed bottom-0 start-50 translate-middle-x p-3">
                                        <Toast className="border-0 bg-success-transparent backdropfilter-20">
                                            <div className="toast-header toast-header bg-success-transparent">
                                                <img src={ALLImages('logo4')} alt="" className="me-2" height="18" />
                                                <strong className="me-auto">Bootstrap</strong>
                                                <button className="btn-close fs-20 text-success" onClick={() => setShow14(false)}><span aria-hidden="true">×</span></button>
                                            </div>
                                            <div className="toast-body">
                                                Your,toast message here.
                                            </div>
                                        </Toast>
                                    </ToastContainer>
                                )}
                                {show15 && (
                                    <ToastContainer className="position-fixed bottom-0 end-0 p-3">
                                        <Toast className="border-0 bg-primary-transparent backdropfilter-20">
                                            <div className="toast-header toast-header bg-primary-transparent">
                                                <img src={ALLImages('logo4')} alt="" className="me-2" height="18" />
                                                <strong className="me-auto">Bootstrap</strong>
                                                <button className="btn-close fs-20 text-primary" onClick={() => setShow15(false)}><span aria-hidden="true">×</span></button>
                                            </div>
                                            <div className="toast-body">
                                                Your,toast message here.
                                            </div>
                                        </Toast>
                                    </ToastContainer>
                                )}
                                {show16 && (
                                    <ToastContainer className="position-fixed bottom-0 end-0 start-0 w-100 p-3">
                                        <Toast className="border-0 bg-danger-transparent backdropfilter-20 w-100">
                                            <div className="toast-header toast-header bg-danger-transparent">
                                                <img src={ALLImages('logo4')} alt="" className="me-2" height="18" />
                                                <strong className="me-auto">Bootstrap</strong>
                                                <button className="btn-close fs-20 text-danger" onClick={() => setShow16(false)}><span aria-hidden="true">×</span></button>
                                            </div>
                                            <div className="toast-body">
                                                Your,toast message here.
                                            </div>
                                        </Toast>
                                    </ToastContainer>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-xl-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h3 className="card-title">Middle Toasts Alignments</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <div className="btn-list">
                                        <Button variant="outline-primary" onClick={() => setShow17(true)}>Middle Left</Button>
                                        <Button variant="outline-secondary" onClick={() => setShow18(true)}>Middle Center</Button>
                                        <Button variant="outline-success" onClick={() => setShow19(true)}>Middle Right</Button>
                                        <Button variant="outline-info" onClick={() => setShow20(true)}>Middle Full Width</Button>
                                    </div>
                                </div>
                                {show17 && (
                                    <ToastContainer className="position-fixed top-50 start-0 translate-middle-y p-3">
                                        <Toast className="border-primary bg-primary-transparent backdropfilter-20">
                                            <div className="toast-header toast-header bg-primary text-white">
                                                <img src={ALLImages('logo4')} alt="" className="me-2" height="18" />
                                                <strong className="me-auto">Bootstrap</strong>
                                                <button className="btn-close fs-20 text-white" onClick={() => setShow17(false)}><span aria-hidden="true">×</span></button>
                                            </div>
                                            <div className="toast-body">
                                                Your,toast message here.
                                            </div>
                                        </Toast>
                                    </ToastContainer>
                                )}
                                {show18 && (
                                    <ToastContainer className="position-fixed top-50 start-50 translate-middle">
                                        <Toast className="border-secondary bg-secondary-transparent backdropfilter-20">
                                            <div className="toast-header toast-header bg-secondary text-white">
                                                <img src={ALLImages('logo4')} alt="" className="me-2" height="18" />
                                                <strong className="me-auto">Bootstrap</strong>
                                                <button className="btn-close fs-20 text-white" onClick={() => setShow18(false)}><span aria-hidden="true">×</span></button>
                                            </div>
                                            <div className="toast-body">
                                                Your,toast message here.
                                            </div>
                                        </Toast>
                                    </ToastContainer>
                                )}
                                {show19 && (
                                    <ToastContainer className="position-fixed top-50 end-0 translate-middle-y p-3">
                                        <Toast className="border-success bg-success-transparent backdropfilter-20">
                                            <div className="toast-header toast-header bg-success text-white">
                                                <img src={ALLImages('logo4')} alt="" className="me-2" height="18" />
                                                <strong className="me-auto">Bootstrap</strong>
                                                <button className="btn-close fs-20 text-white" onClick={() => setShow19(false)}><span aria-hidden="true">×</span></button>
                                            </div>
                                            <div className="toast-body">
                                                Your,toast message here.
                                            </div>
                                        </Toast>
                                    </ToastContainer>
                                )}
                                {show20 && (
                                    <ToastContainer className="position-fixed top-50 start-50 translate-middle w-100">
                                        <Toast className="border-info w-100 bg-info-transparent backdropfilter-20">
                                            <div className="toast-header toast-header bg-info text-white">
                                                <img src={ALLImages('logo4')} alt="" className="me-2" height="18" />
                                                <strong className="me-auto">Bootstrap</strong>
                                                <button className="btn-close fs-20 text-white" onClick={() => setShow20(false)}><span aria-hidden="true">×</span></button>
                                            </div>
                                            <div className="toast-body">
                                                Your,toast message here.
                                            </div>
                                        </Toast>
                                    </ToastContainer>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h3 className="card-title">Stacking Toasts</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="p-4 bg-light border">
                                    <ToastContainer className="position-static">
                                        {show21 && (
                                            <Toast className="show">
                                                <div className="toast-header">
                                                    <img src={ALLImages('logo5')} alt="" className="me-2" height="18" />
                                                    <strong className="me-auto">Bootstrap</strong>
                                                    <small className="text-muted">just now</small>
                                                    <button className="btn-close fs-20"><span aria-hidden="true" onClick={() => setShow21(false)}>×</span></button>
                                                </div>
                                                <div className="toast-body">
                                                    See? Just like this.
                                                </div>
                                            </Toast>
                                        )}
                                        {show22 && (
                                            <Toast className="show">
                                                <div className="toast-header">
                                                    <img src={ALLImages('logo5')} alt="" className="me-2" height="18" />
                                                    <strong className="me-auto">Bootstrap</strong>
                                                    <small className="text-muted">2 secs ago</small>
                                                    <button className="btn-close fs-20"><span aria-hidden="true" onClick={() => setShow22(false)}>×</span></button>
                                                </div>
                                                <div className="toast-body">
                                                    Heads up, toasts will stack automatically
                                                </div>
                                            </Toast>
                                        )}
                                    </ToastContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h3 className="card-title">Placement Toast</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="p-4 bg-light border">
                                    <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100 h-180">
                                        {show23 && (
                                            <Toast className="show">
                                                <div className="toast-header">
                                                    <img src={ALLImages('logo5')} alt="" className="me-2" height="18" />
                                                    <strong className="me-auto">Bootstrap</strong>
                                                    <small>11 mins ago</small>
                                                    <button className="btn-close fs-20"><span aria-hidden="true" onClick={() => setShow23(false)}>×</span></button>
                                                </div>
                                                <div className="toast-body">
                                                    Hello, world! This is a toast message.
                                                </div>
                                            </Toast>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default ToastComponent;