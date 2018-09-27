import React, {Component} from 'react';
import Aux from "../components/UI/Auxilary";
import Logo from "../images/logo.png";
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
                                    <div className="search-area">
                                        <form>
                                            <div className="control-group">
                                                <ul className="categories-filter animate-dropdown">
                                                    <li className="dropdown"> <a className="dropdown-toggle"  data-toggle="dropdown" href="category.html">Categories <b className="caret"></b></a>
                                                        <ul className="dropdown-menu" role="menu" >
                                                            <li className="menu-header">Computer</li>
                                                            <li role="presentation"><a role="menuitem"  href="category.html">- Clothing</a></li>
                                                            <li role="presentation"><a role="menuitem"  href="category.html">- Electronics</a></li>
                                                            <li role="presentation"><a role="menuitem"  href="category.html">- Shoes</a></li>
                                                            <li role="presentation"><a role="menuitem"  href="category.html">- Watches</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <input className="search-field" placeholder="Search here..." />
                                                <a className="search-button" href="/" >&nbsp;</a> </div>
                                        </form>
                                    </div>
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
                                                <li className=""> <a href="/"  >2019 FİYAT LİSTESİ</a> </li>
                                                <li className=""> <a href="/"  >HAKKIMIZDA</a> </li>
                                                <li className=""> <a href="/"  >2019 DİJİTAL KATALOG</a> </li>
                                                <li className=""> <a href="/"  >İLETİŞİM</a> </li>

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