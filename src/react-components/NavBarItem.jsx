import React from 'react';

import {Link} from 'react-router';

const NavBarItem = ({loginfunc, navText, urlLink}) => (
    <Link className="nav-item" to={urlLink}>
        {navText}
    </Link>
);

export default NavBarItem