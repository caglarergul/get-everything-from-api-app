import React, {Component} from 'react';


class Contact extends Component {

    state = {}

    render() {
        return (
            <div>
                <h1>İletişim</h1>
                <div className="contact-page">
                    <div className="row">


                        <div className="col-md-12 contact-map outer-bottom-vs">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368.81235443596063!2d27.132135491767563!3d38.419644051501116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e47ff6295f%3A0x6e76a98d7720f60!2sKonak+Mahallesi%2C+863.+Sk.+No%3A49%2C+35250+Konak%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1538986267234"
                                width="100%" height="450" frameBorder="0">&nbsp;</iframe>
                        </div>

                        <div className="col-md-12 contact-info">
                            <div className="contact-title">
                                <h4>İletişim Bilgilerimiz</h4>
                            </div>
                            <div className="clearfix address">
                                <span className="contact-i"><i className="fa fa-map-marker">&nbsp;</i></span>
                                <span className="contact-span">KONAK MAHALLESİ 863 SOKAK NO: 49 KONAK / İZMİR</span>
                            </div>
                            <div className="clearfix phone-no">
                                <span className="contact-i"><i className="fa fa-mobile">&nbsp;</i></span>
                                <span className="contact-span"><a href="mailto:satis@binbirpromosyon.com.tr">satis@binbirpromosyon.com.tr</a></span>
                            </div>
                            <div className="clearfix email">
                                <span className="contact-i"><i className="fa fa-envelope">&nbsp;</i></span>
                                <span className="contact-span"><a href="mailto:info@binbirpromosyon.com.tr">info@binbirpromosyon.com.tr</a></span>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Contact;
