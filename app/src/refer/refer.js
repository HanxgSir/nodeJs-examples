/**
 * Created by Administrator on 2017/2/28.
 */
import React from 'react';
import { render } from 'react-dom';
import Modal from 'antd/lib/modal';
import message from 'antd/lib/message';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';
import LeftBar from '../components/leftBar';

const Option = Select.Option;
const messageCodeStyle = {
    width: '300px',
    height: '85px',
    textAlign: 'center',
    lineHeight: '85px',
    fontWeight: 'bold'
};

class Refer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 1
        };
        this.selectLevel = this.selectLevel.bind(this);
        this.submit_bugs = this.submit_bugs.bind(this);
    }

    render() {
        return (
            <div className="contentBox">
                <div className="bug">
                    <label>
                        <span> 问题描述：</span>
                        <textarea rows="10" ref="description"/>
                    </label>
                    <label>
                        <span>测试用浏览器：</span>
                        <Input style={{width:"165px"}} ref="browser"/>
                    </label>
                    <label>
                        <span>问题级别：</span>
                        <Select style={{width:"120px"}} defaultValue={"0"} ref="level" onChange={this.selectLevel}>
                            <Option value={"0"}>请选择</Option>
                            <Option value={"1"}>一&emsp;级</Option>
                            <Option value={"2"}>二&emsp;级</Option>
                            <Option value={"3"}>三&emsp;级</Option>
                        </Select>
                    </label>
                    <button className="submit_btn" onClick={this.submit_bugs}>提交</button>
                </div>
                <LeftBar
                    class="left_bar"
                />
            </div>
        )
    }

    // 取select value
    selectLevel(value) {
        this.setState({
            level: value
        })
    }

    // 提交
    submit_bugs() {
        let params = {
            description: this.refs.description.value,
            browser: this.refs.browser.refs.input.value,
            level: this.state.level
        };
        Modal.confirm({
            title: "提交bug",
            content: '是否确认提交该bug',
            onOk() {
                $.post('/refer', params, function (data) {
                    if (data.status == 0) {
                        message.success(
                            <div style={messageCodeStyle}>
                                提交成功
                            </div>
                        );
                    }
                })
            }
        });
    }
}

render(< Refer/>, document.getElementById('container'));