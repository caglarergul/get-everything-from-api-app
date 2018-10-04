import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


class searchForm extends Component {
    state = {
        urlName: null
    }
    constructor(props) {
        super(props);
        this.updateNameInUrl = this.updateNameInUrl.bind(this);
    }

    updateNameInUrl (event) {

        let newName = event.target.value;
        this.setState({urlName: newName});
    }


    render() {
        return (
            <div className="search-area">

                <div className="control-group">

                    <input className="search-field"   placeholder="Ürün arayın..." onChange={this.updateNameInUrl}/>
                    <NavLink className="search-button" to={"/search/" + this.state.urlName}  exact >&nbsp;</NavLink> </div>

            </div>
        );

    }


}


export default searchForm;