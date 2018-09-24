import React from 'react';

const productsPartial = (props) => (

    <div className="col-sm-6 col-md-3">

        <div className="thumbnail">
            <img src={props.ProductImage} alt="..." />
                <div className="caption">
                    <h3> {props.ModelName}</h3>
                    <p>Fiyat: {props.ProductListPrice} ₺<br />
                        <span className="label label-default">Toplam Stok: {props.UnitInStock}</span> </p>
                    <p><a href="#" className="btn btn-default btn-block" role="button">Ürünü İncele</a></p>
                </div>
        </div>
    </div>


);

export default productsPartial;