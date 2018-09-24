import React, {Component} from 'react';
import Aux from './Auxilary';
class Layout extends Component {
    render() {
        return (
            <Aux>
                <header>
                    HEADER
                </header>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;