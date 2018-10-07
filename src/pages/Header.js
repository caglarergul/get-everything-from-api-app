import React, {Component} from 'react';
import Aux from "../components/UI/Auxilary";
import Logo from "../images/logo.png";
import SearchForm from "../components/Products/SearchForm";
class Header extends Component {
    render() {
        return (
            <Aux>
                {/*-- ============================================== HEADER ============================================== --*/}
                <header className="header-style-1">


                    <div className="main-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
                                    {/*-- ============================================================= LOGO ============================================================= --*/}
                                    <div className="logo"> <a href="/"> <img src={Logo} alt="logo" /> </a> </div>
                                    {/*-- /.logo --*/}
                                    {/*-- ============================================================= LOGO : END ============================================================= --*/} </div>
                                {/*-- /.logo-holder --*/}

                                <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">
                                    {/*-- /.contact-row --*/}
                                    {/*-- ============================================================= SEARCH AREA ============================================================= --*/}
                                   <SearchForm/>
                                    {/*-- /.search-area --*/}
                                    {/*-- ============================================================= SEARCH AREA : END ============================================================= --*/} </div>
                                {/*-- /.top-search-holder --*/}

                                <div className="col-xs-12 col-sm-12 col-md-2 animate-dropdown top-cart-row">
                                    {/*-- ============================================================= SHOPPING CART DROPDOWN ============================================================= --*/}



                                    {/*-- /.dropdown-cart --*/}

                                    {/*-- ============================================================= SHOPPING CART DROPDOWN : END============================================================= --*/} </div>
                                {/*-- /.top-cart-row --*/}
                            </div>
                            {/*-- /.row --*/}

                        </div>
                        {/*-- /.container --*/}

                    </div>
                    {/*-- /.main-header --*/}

                    {/*-- ============================================== NAVBAR ============================================== --*/}
                    <div className="header-nav animate-dropdown">
                        <div className="container-fluid">
                            <div className="yamm navbar navbar-default" role="navigation">
                                <div className="navbar-header">
                                    <button data-target="/mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                                        <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                                </div>
                                <div className="nav-bg-className">
                                    <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                                        <div className="nav-outer">
                                            <ul className="nav navbar-nav">
                                                <li className=""> <a href="/"  >ANASAYFA</a> </li>
                                                <li className=""> <a href="http://www.binbirpromosyon.com.tr/fiyatlistesi-2019.pdf" target="_blank" >2019 FİYAT LİSTESİ</a> </li>
                                                <li className=""> <a href="/hakkimizda"  >HAKKIMIZDA</a> </li>
                                                <li className=""> <a href="https://www.dropbox.com/s/8k7ys5n81dpw2v0/2019-digitalKatalog.pdf?dl=0"  target="_blank"  >2019 DİJİTAL KATALOG</a> </li>
                                                <li className=""> <a href="/iletisim"  >İLETİŞİM</a> </li>

                                            </ul>
                                            {/*-- /.navbar-nav --*/}
                                            <div className="clearfix"></div>
                                        </div>
                                        {/*-- /.nav-outer --*/}
                                    </div>
                                    {/*-- /.navbar-collapse --*/}

                                </div>
                                {/*-- /.nav-bg-className --*/}
                            </div>
                            {/*-- /.navbar-default --*/}
                        </div>
                        {/*-- /.container-className --*/}

                    </div>
                    {/*-- /.header-nav --*/}
                    {/*-- ============================================== NAVBAR : END ============================================== --*/}

                </header>

                {/*-- ============================================== HEADER : END ============================================== --*/}
            </Aux>
        );
    }
}

export default Header;