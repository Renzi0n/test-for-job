import React, {Component, Fragment} from 'react';

import Header from '../header/header';
import Info from '../info/info';
import Modal from '../modal/modal';

export default class App extends Component {

    state = {
        isMediaModal: false
    };

    onMediaButtonClick = () => {
        this.setState({
            isMediaModal: true
        });
    };

    onCloseButtonClick = () => {
        this.setState({
            isMediaModal: false
        });
    };

    render () {
        
        return (
            <Fragment>
                <Header onMediaButtonClick={this.onMediaButtonClick} />

                <Info />

                <Modal isMediaModal={this.state.isMediaModal} 
                       onCloseButtonClick={this.onCloseButtonClick} />
            </Fragment>
        );
    };
};