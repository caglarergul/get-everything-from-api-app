import React from 'react';
import {NavLink} from 'react-router-dom';
import Aux from '../UI/Auxilary';

const sidebarPartial = (props) => (
    <Aux>
        <li className="menu-item">
            <NavLink to={"/category/" + props.CategoryId}  exact activclassname="active">
                {props.CategoryName}
            </NavLink>
        </li>

    </Aux>

);

export default sidebarPartial;