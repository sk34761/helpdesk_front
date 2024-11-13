import { Fragment, useState } from 'react';
import { Alert, Button, Card, Col, Form, Row, } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ALLImages from '../../common/ImageData';



const Login = () => {
    const [data, setData] = useState({
        email: "adminreact@gmail.com",
        password: "1234567890",
    });
    const [err, setError] = useState("");
    const [loading, setLoader] = useState(false);

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    }

    const Login = (e) => {
        e.preventDefault();
        setLoader(true);
        const { email, password } = data;

        auth.signInWithEmailAndPassword(email, password).then(
            _user => {
                RouteChange();
                setLoader(false);
            }
        ).catch(err => {
            setError(err.message);
            setLoader(false);
        });
    }

    const navigate = useNavigate();

    const RouteChange = () => {
        let path = `${import.meta.env.BASE_URL}Dashboard/IndexPage`;
        navigate(path);
    }

    const [email1, setEmail1] = useState('admin@insightztechnology.com');
    const [password1, setPassword1] = useState('spruko@123');
    const [rememberMe, setRememberMe] = useState(true);
    const [error1, setError1] = useState(null);

    const handleSignIn = () => {
        if (!email1.trim()) {
            setError1('Please enter your email or username.');
            return;
        }

        if (!password1.trim() || password1.trim().length < 8 || password1.trim().length > 10) {
            setError1('Password must be between 8 and 10 characters.');
            return;
        }



        window.location.href = `${import.meta.env.BASE_URL}Dashboard/IndexPage/`;
    };

    return (
        <Fragment>
            <div className="">
                <div className="text-center">
                    <Link to={`${import.meta.env.BASE_URL}Dashboard/IndexPage/`}><img src={ALLImages('logo1')} className="header-brand-img" alt="" /></Link>
                </div>
            </div>
            <div className="container-lg">
                            <Row className="justify-content-center mt-4 mx-0">
                                <Col xl={4} lg={6}>
                                    <Card className="shadow-none">
                                        <Card.Body className="p-sm-6">
                                            <div className="text-center mb-4">
                                                <h4 className="mb-1">Sign In</h4>
                                                <p>Sign in to your account to continue.</p>
                                            </div>
                                            {error1 && (
                                                <Alert variant="danger" onClose={() => setError1(null)} dismissible>
                                                    {error1}
                                                </Alert>
                                            )}
                                            <Row>
                                                <Col sm={12}>
                                                    <div className="mb-3">
                                                        <Form.Label className="mb-2 fw-500">Email<span className="text-danger ms-1">*</span></Form.Label>
                                                        <Form.Control
                                                            className="ms-0"
                                                            type="text" // Use 'text' to allow both email and username
                                                            placeholder="Enter your Email"
                                                            value={email1}
                                                            onChange={(e) => setEmail1(e.target.value)}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col sm={12}>
                                                    <div className="mb-3">
                                                        <label className="mb-2 fw-500">Password<span className="text-danger ms-1">*</span></label>
                                                        <div>
                                                            <Form.Control
                                                                type="password"
                                                                id="input-password"
                                                                placeholder="Password"
                                                                value={password1}
                                                                onChange={(e) => setPassword1(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={12}>
                                                    <div className="d-flex mb-3">
                                                        <Form.Check
                                                            className='d-flex align-items-center'
                                                            type="checkbox"
                                                            aria-label="radio 1"
                                                            label='Remember me'
                                                            checked={rememberMe}
                                                            onChange={() => setRememberMe(!rememberMe)}
                                                        />
                                                        <div className="ms-auto">
                                                            <Link to={`${import.meta.env.BASE_URL}Authentication/ForgotPassword/`} className="tx-primary ms-1 tx-13">Forgot Password?</Link>
                                                        </div>
                                                    </div>
                                                    <div className="d-grid mb-3">
                                                        <Button onClick={handleSignIn}> Login</Button>
                                                    </div>
                                                 
                                                </Col>
                                            </Row>
                                        
                                           
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
        </Fragment>
    );
};

export default Login;