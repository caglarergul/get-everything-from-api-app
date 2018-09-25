import React from 'react';
import Image from 'react-lazy-image';
import {NavLink} from "react-router-dom";
const productsPartial = (props) => (

    <div className="col-sm-6 col-xs-6 col-md-3 col-lg-3">

        <div className="thumbnail">
            <Image source={props.ProductImage} width={240} height={240} />
                <div className="caption">
                    <h3> {props.ModelName}</h3>
                    <p>Fiyat: {props.ProductListPrice} ₺<br />
                        <span className="label label-default">Toplam Stok: {props.UnitInStock}</span> </p>
                    <p><NavLink to={"/product/"+props.ProductId} className="btn btn-default btn-block" role="button">Ürünü İncele</NavLink></p>
                </div>
        </div>
    </div>


);

export default productsPartial;