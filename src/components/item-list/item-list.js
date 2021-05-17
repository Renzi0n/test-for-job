import React, {Component} from 'react';

import Item from '../item/item';
import generateItems from '../../mocks/item';

export default class ItemList extends Component {

    itemsData = generateItems();

    state = {
        sortType: 'default',
        itemsData: this.itemsData.slice()
    }

    renderItems () {

        return this.state.itemsData.map((it) => {
            return <Item 
                        itemData={it} 
                        key={it.id} 
                        onOrderButtonClick={this.props.onOrderButtonClick}
                    />;
        });
    };

    sortItemsData (sortType, data) {
        if (sortType === 'up') {
            return data
                .slice()
                .sort((prev, next) => {
                    return prev.price - next.price;
                });
        } else if (sortType === 'down') {
            return data
                .slice()
                .sort((prev, next) => {
                    return next.price - prev.price;
                });
        }

        return this.itemsData.slice();
    };

    onSortSelectChange = ({target}) => {
        this.setState(({itemsData}) => {

            return { 
                sortType: target.value,
                itemsData: this.sortItemsData(target.value, itemsData)
            }
        });
    };

    render () {
        
        return (
            <section className="products">
                <h2 className="products__title">Фотобудки</h2>
        
                <div className="products__sort">
                    <p>Сортировка:</p>
            
                    <select className="products__sort-select" name="sort" id="sort" value={this.state.sortType} onChange={this.onSortSelectChange}>
                        <option value="default">По умолчанию</option>
                        <option value="up">По возрастанию</option>
                        <option value="down">По убыванию</option>
                    </select>
                </div>

                {this.renderItems()}
            </section>
        );
    };
};