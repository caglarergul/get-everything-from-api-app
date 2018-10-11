import React, {Component} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import * as XMLUrl from "../UI/XMLUrl";
import GetSearchResults from "../../pages/GetSearchResults";
import Aux from "../UI/Auxilary";

class searchForm extends Component {
    state = {
        urlName: null,
        searchKey: null,
        redirect: false
    };

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    constructor(props) {
        super(props);

    }


    handleKeyPress = (e) => {
        let newName = e.target.value.toUpperCase();
        if (e.key === "Enter") {
            console.log(newName);
            this.setState({redirect: true});
            this.setState({searchKey: newName});
        }
    };


    render() {

        if (this.state.redirect) {
            return (

                <Aux>
                    <Redirect to={"/search/" + this.state.searchKey}/>
                    <div className="search-area">

                        <div className="control-group">

                            <input className="search-field" placeholder="Ürün arayın..." onKeyPress={this.handleKeyPress}/>
                            <a className="search-button" >&nbsp;</a>
                        </div>
                    </div>
                </Aux>
            )
        } else {
            return (
                <div className="search-area">

                    <div className="control-group">

                        <input className="search-field" placeholder="Ürün arayın..." onKeyPress={this.handleKeyPress}/>
                        <NavLink className="search-button" to={"/search/" + this.state.searchKey} exact>&nbsp;</NavLink>
                    </div>
                </div>

            )
        }


    }


}


export default searchForm;