import React, {Component} from 'react';
import ProductDetails from "../components/Products/ProductDetails";
import * as XMLUrl from "../components/UI/XMLUrl";

class GetProductDetails extends Component {

    state = {
        productId : this.props.match.params.id,
        productDetails: []
    };


    getTheProductFromAPI = (productId) => {
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
                    let newProductDetails = [];

                    for (let i = 0; i < x.length; i++) {
                        // eslint-disable-next-line to
                        if (x[i].childNodes[1].textContent === productId) {
                            let ModelNameValue = x[i].childNodes[6].textContent; // Model Name
                            let ProductIdValue = x[i].childNodes[1].textContent; // Product ID
                            let ProductImageValue = x[i].childNodes[30].textContent; // Model Name
                            let ProductPrice = x[i].childNodes[18].textContent; // Price
                            let ProductKDVPrice = x[i].childNodes[17].textContent; // KDVPrice
                            let UnitInStock = x[i].childNodes[13].textContent; // Stock
                            let ProductCategoryName =  x[i].childNodes[34].textContent; // Category Name
                            let Description =  x[i].childNodes[9].textContent; // Description
                            let ParentCategoryName = x[i].childNodes[37].textContent; // ParentCategoryName

                            let VariantSubs = [];
                            for (let j = 0; j<x[i].childNodes[39].childNodes.length; j++) {
                                VariantSubs.push({
                                    color : x[i].childNodes[39].childNodes[j].childNodes[1].textContent,
                                    price: x[i].childNodes[39].childNodes[j].childNodes[7].textContent,
                                    stock:x[i].childNodes[39].childNodes[j].childNodes[8].textContent
                                })
                            }


                            newProductDetails.push({
                                ModelName : ModelNameValue,
                                ProductId : ProductIdValue,
                                ProductImage : ProductImageValue,
                                ProductPrice : ProductPrice,
                                ProductKDVPrice : ProductKDVPrice,
                                UnitInStock : UnitInStock,
                                ProductCategoryName: ProductCategoryName,
                                Description: Description,
                                Variant: VariantSubs,
                                ParentCategoryName: ParentCategoryName

                            });
                            this.setState({categoryName: ProductCategoryName});
                        }

                    }

                    console.log(newProductDetails);


                    this.setState({
                        productDetails: newProductDetails
                    });
                });

        });
    };

    componentDidMount() {
        this.getTheProductFromAPI(this.state.productId);
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
        window.scrollTo(0, 0);
        this.setState({
            isLoading: true
        });
        this.getTheProductFromAPI(nextProps.match.params.id);
    }


    render() {
        const productDetails = Object.values(this.state.productDetails).map((data) =>
            <ProductDetails
                key={data.ProductId} ModelName={data.ModelName} ProductId={data.ProductId}
                ProductImage={data.ProductImage} ProductKDVPrice={data.ProductKDVPrice} ProductPrice={data.ProductPrice}
                UnitInStock={data.UnitInStock} ProductCategoryName={data.ProductCategoryName} Description={data.Description} Variant={data.Variant} ParentCategoryName={data.ParentCategoryName}/>
        );
        return (
            <div>


                {productDetails}
            </div>
        );
    }
}

export default GetProductDetails;