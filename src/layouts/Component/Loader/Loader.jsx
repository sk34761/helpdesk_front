import { FC, Fragment } from 'react';
import ALLImages from '../../../common/ImageData';



const Loader = () => {
    return (
        <Fragment>
            <div id="loader">
                <img src={ALLImages('loader')} className="loader-img" alt="Loader"/>
            </div>
        </Fragment>
    );
};

export default Loader;