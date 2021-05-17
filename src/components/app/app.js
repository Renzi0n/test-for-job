import React, {Component, Fragment} from 'react';

import ItemList from '../item-list/item-list';
import Header from '../header/header';
import Info from '../info/info';
import Modal from '../modal/modal';
import Faq from '../faq/faq';
import News from '../news/news';
import Contacts from '../contacts/contacts';

export default class App extends Component {

    state = {
        isMediaModal: false,
        orderData: null,
        newsData: null,
        isSuccessModal: false
    };

    onMediaButtonClick = () => {
        this.setState({
            isMediaModal: true
        });
    };

    onOrderButtonClick = (orderData) => {
        this.setState({orderData});
    };

    onNewsItemClick = (newsData) => {
        this.setState({newsData});
    };

    onSubmitForm = (evt) => {
        evt.preventDefault();
        
        this.setState({
            orderData: null,
            isSuccessModal: true
        });
    };

    closeAllModal = () => {
        this.setState({
            isMediaModal: false,
            orderData: null,
            newsData: null,
            isSuccessModal: false
        });
    };

    componentDidCatch = (err) => {
        console.log(err);
    }

    render () {
        
        return (
            <Fragment>
                <Header onMediaButtonClick={this.onMediaButtonClick} />

                <Info />
                <ItemList onOrderButtonClick={this.onOrderButtonClick} />
                <Faq />
                <News onNewsItemClick={this.onNewsItemClick} />
                <Contacts />

                <Modal 
                    isMediaModal={this.state.isMediaModal} 
                    orderData={this.state.orderData}
                    isSuccessModal={this.state.isSuccessModal}
                    newsData={this.state.newsData}
                    closeAllModal={this.closeAllModal} 
                    onSubmitForm={this.onSubmitForm}
                />
            </Fragment>
        );
    };
};