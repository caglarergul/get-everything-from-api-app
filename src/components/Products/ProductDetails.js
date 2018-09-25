import Image from "react-lazy-image";
import React from "react";

const productsPartial = (props) => (

    <div className="col-sm-6 col-xs-6 col-md-9 col-lg-9">
        <div className="col-md-8">
            <Image source={props.ProductImage} width={650} height={640} />
        </div>
        <div className="col-md-4">
            <h3>{props.ModelName}</h3>
            <p>Fiyat: {props.ProductListPrice} ₺<br />
                <span className="label label-default">Toplam Stok: {props.UnitInStock}</span> </p>
        </div>





    </div>
);
export default productsPartial;