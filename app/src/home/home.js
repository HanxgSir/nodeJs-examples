/**
 * Created by Administrator on 2017/2/27.
 */
import React from 'react';
import { render } from 'react-dom';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div class="contentBox">
                <h1>首页</h1>
            </div>
        )
    }
}

render(<Index />,document.getElementById('container'));