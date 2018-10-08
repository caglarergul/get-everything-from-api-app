import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import * as XMLUrl from "../UI/XMLUrl";


class searchForm extends Component {
    state = {
        urlName: null,
        productId: null
    };

    constructor(props) {
        super(props);
        this.updateNameInUrl = this.updateNameInUrl.bind(this);
    }

    updateNameInUrl(event) {

        let newName = event.target.value;
        this.setState({urlName: newName});
        this.getProductsFromAPI(newName)
    }

    getProductsFromAPI = (searchKey) => {
        let request = new Request(XMLUrl.productXML);

        fetch(request).then((results) => {
            // results returns XML. lets cast this to a string, then create
            // a new DOM object out of it!
            results
                .text()
                .then((str) => {
                    let parser = new DOMParser();
                    let responseDoc = parser.parseFromString(str, 'application/xml');
                    let x = responseDoc.documentElement.childNodes;
                    let newProductList = [];

                    for (let i = 0; i < x.length; i++) {
                        // eslint-disable-next-line to
                        if (x[i].childNodes[6].textContent === searchKey) {
                            let ProductIdValue = x[i].childNodes[1].textContent; // Model Name
                            this.setState({productId: ProductIdValue});
                        }

                    }
                    console.log(newProductList);

                });

        });
    };

    render() {
        return (
            <div className="search-area">

                <div className="control-group">

                    <input className="search-field" placeholder="Ürün arayın..." onChange={this.updateNameInUrl}/>
                    <NavLink className="search-button" to={"/product/" + this.state.productId} exact>&nbsp;</NavLink>
                </div>

            </div>
        );

    }


}


export default searchForm;