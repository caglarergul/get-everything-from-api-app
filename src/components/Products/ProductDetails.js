import Image from "react-lazy-image";
import React from "react";

const productsPartial = (props) => (

    <div className="col-sm-6 col-xs-6 col-md-9 col-lg-9">
        <div className="col-md-6">
            <Image source={props.ProductImage} width="100%" className="img-thumbnail" />
        </div>
        <div className="col-md-6">
            <h3>{props.ModelName}</h3>
            <p>
                <span className="price"> Fiyat: {props.ProductPrice} ₺ + KDV</span><br />
                <span className="price-taxed"> Kdv Dahil: {props.ProductKDVPrice} ₺</span><br />
                <span className="label label-default">Toplam Stok: {props.UnitInStock}</span>

            </p>
        </div>
    </div>
);
export default productsPartial;