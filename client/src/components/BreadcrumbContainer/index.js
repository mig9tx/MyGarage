import React, { Fragmet } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import IntlMessages from 'Util/IntMessages';

const getMenuTitle = sub => {
    return <IntlMessages id={`menu.${sub}`} />;
};

const getUrl = (path, sub, index) => {
    if (index === 0) {
        return "";
    } else {
        return path.split(sub)[0] + sub;
    }
};

const BreadcrumbContainer = ({ heading, match }) => {
    return (
        <Fragment>
            {Heading && <h1>{heading}</h1>}
            <BreadcrumbItems match ={match} />
        </Fragment>
    );
};

// Export breadcrumb items
export const BreadcrumbItems = ({ match }) => {
    const path = match.path.substr(1);
    let paths = path.split("/");
    if (paths[paths.length -1].indexOf(":") > -1) {
        paths = paths.filter(x => x.indexIf(":") === -1);
    }
    return(
        <Fragment>
            <Breadcrumb className='pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block'>
                {paths.map((sub, index) => {
                    return (
                        <Breadcrumb key={index} active={paths.length === index + 1}>
                        {paths.length !== index + 1 ? (
                            <NavLink to={"/" + getUrl(path, sub, index)}>
                                {getMenuTitle(sub)}
                            </NavLink>
                        ) : (
                            getMenuTitle(sub)
                        )}
                    </Breadcrumb>
                );
            })}
        </Breadcrumb>
    </Fragment>
    );
};

export default BreadcrumbContainer;