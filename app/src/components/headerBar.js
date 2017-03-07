/**
 * Created by Administrator on 2017/2/28.
 */
import React from 'react';
export default class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const logoutStyle = {float: 'right', marginRight: '15px'};
        return (
            <header style={{width:'100%',background:'#dcb67f'}}>
                <div style={{width:'1000px',height:'40px',lineHeight:'40px',margin:'0 auto',background:'#dcb67f'}}>
                    <div className="username">{document.cookie.user}</div>
                    <div style={logoutStyle}>
                        <a className="logout_btn" style={{color: '#FF1713'}}>退出</a>
                    </div>
                </div>
            </header>
        )
    }
}