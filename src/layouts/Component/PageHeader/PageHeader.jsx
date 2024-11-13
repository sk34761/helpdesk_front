import { FC, Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';



const Pageheader = (props) => {
    return (
        <Fragment>
            <div className="page-header d-flex align-items-center justify-content-between border-bottom mb-4">
                <h1 className="page-title">{props.heading}</h1>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item>{props.homepage}</Breadcrumb.Item>
                        <Breadcrumb.Item active>{props.activepage}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </Fragment>
    );
};

export default Pageheader;