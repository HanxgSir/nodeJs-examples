/**
 * Created by Administrator on 2017/2/28.
 */
import React from 'react';

export default class LeftBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabBar: [
                {title: '所有问题'},
                {title: '我提交的'},
                {title: '我解决的'},
                {title: '提交问题'}
            ]
        }
    }

    render() {
        return (
            <div className={this.props.class}>
                {this.state.tabBar.map(function (item, index) {
                    let item_click = this.item_click.bind(this, index);
                    return <div key={index} className="tabBar_item" onClick={item_click}>
                        {item.title}
                    </div>
                }.bind(this))}
            </div>
        )
    }

    item_click(index) {
        switch (index){
            case 0:
                location.href = "/home";
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                location.href = "/refer";
                break;
        }
    }
}