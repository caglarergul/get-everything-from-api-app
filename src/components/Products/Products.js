import React from 'react';
import Image from 'react-lazy-image';
import {NavLink} from "react-router-dom";


const productsPartial = (props) => (

    <div className="col-sm-6 col-xs-6 col-md-3 col-lg-3 ">
        <div className="products">
            <div className="product">
                <div className="product-image">
                    <div className="image">
                        <NavLink to={"/product/" + props.ProductId}  role="button">

                            <Image source={props.ProductImage} width={240} height={240}/>

                        </NavLink>
                    </div>


                </div>


                <div className="product-info text-left">
                    <h3 className="name">
                        <NavLink to={"/product/" + props.ProductId}  role="button">
                            {props.ModelName}
                        </NavLink>
                    </h3>

                    <div className="product-price hidden">
                        <span className="price"> {props.ProductListPrice === "0.00" ? "fiyat isteyiniz" : props.ProductListPrice} ₺ </span>
                    </div>


                </div>


            </div>

        </div>


    </div>
);

export default productsPartial;