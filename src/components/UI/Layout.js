import React, {Component} from 'react';
import Aux from './Auxilary';
import Navigation from './Navigation';
class Layout extends Component {
    render() {
        return (
            <Aux>
                <header>

                    <Navigation />

                </header>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;