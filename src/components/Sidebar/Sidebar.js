import React from 'react';
import {NavLink} from 'react-router-dom';
import Aux from '../UI/Auxilary';

const sidebarPartial = (props) => (
    <Aux>

        <NavLink to={"/category/" + props.CategoryId} className="list-group-item" exact activclassname="active">
            {props.CategoryName}
        </NavLink>
    </Aux>

);

export default sidebarPartial;