import React from "react";
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
let style = {
    color: "#ffffff"
};


const productsPartial = (props) => (

    <div className="detail-block">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-5">

                <ImageGallery items={props.VariantImagesURL} showPlayButton={false} showFullscreenButton={false} sizes="100%"/>

            </div>
            {/* /.gallery-holder */}
            <div className='col-sm-6 col-md-7 product-info-block'>
                <div className="product-info">

                    <div className="col-md-7">
                        <h1 className="name">{props.ModelName}</h1>
                        <div className="stock-container info-container m-t-10">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="stock-box text-right">
                                        <span className="label"><b>Toplam Stok :</b></span>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="stock-box">
                                        {props.ParentCategoryName === "Duvar Saatleri" ?
                                            <span className="value badge" style={style}>Üretimdir Stok Var!</span>
                                            :
                                            <span className="value badge" style={style}>{props.UnitInStock} Adet</span>
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.stock-container */}

                        <div className="description-container m-t-20">
                            <div
                                dangerouslySetInnerHTML={{__html: props.Description.replace(/(<? *script)/gi, 'illegalscript')}}>
                            </div>

                        </div>
                        {/* /.description-container */}

                        <div className="price-container info-container m-t-20">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="price-box">
                                        {(props.ProductKDVPrice !== "0.00") ?
                                            <div>
                                                <span className="price">{props.ProductPrice} ₺ + KDV</span><br/>
                                                <span className="price-kdv">Kdv Dahil: {props.ProductKDVPrice} ₺</span>
                                            </div>
                                            : <span className="price">Fiyat Sorunuz</span>}
                                    </div>
                                </div>
                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.price-container */}
                    </div>
                    <div className="col-md-5 hidden">
                        {(props.Variant.length > 0) && (props.ParentCategoryName !== "Duvar Saatleri") ?
                            <table className="VariantTable">
                                <thead>
                                <tr>
                                    <th>Renk</th>
                                    <th>Adet</th>
                                </tr>
                                </thead>

                                <tbody>
                                {props.Variant.map((data, igkey) => {
                                        return (

                                            <tr key={igkey}>
                                                <td>
                                                    {data.color}
                                                </td>
                                                <td> {data.stock}</td>
                                            </tr>

                                        );
                                    }
                                )}
                                </tbody>
                            </table>
                            : ""}
                    </div>
                </div>
                {/* /.product-info */}
            </div>
            {/* /.col-sm-7 */}
        </div>
        {/* /.row */}
    </div>
);
export default productsPartial;