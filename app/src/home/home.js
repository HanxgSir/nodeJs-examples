/**
 * Created by Administrator on 2017/2/27.
 */
import React from 'react';
import { render } from 'react-dom';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';
import LeftBar from '../components/leftBar';
import HeaderBar from '../components/headerBar';
const Option = Select.Option;
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bugs: []
        };
        this.click_bar = this.click_bar.bind(this);
        this.queryData = this.queryData.bind(this);
    }

    render() {
        return (
            <div className="contentBox">
                <div className="search">
                    <label className="code">编号：<Input type="text" placeholder="请输入编号"
                                                      style={{width:"195px"}}/></label>
                    <label className="level">
                        级别：
                        <Select style={{width:"120px"}} defaultValue={"0"}>
                            <Option value={"0"}>全部</Option>
                            <Option value={"1"}>一级</Option>
                            <Option value={"2"}>二级</Option>
                            <Option value={"3"}>三级</Option>
                        </Select>
                    </label>
                    <label className="status">
                        状态：
                        <Select style={{width:"120px"}} defaultValue={"0"}>
                            <Option value={"0"}>全部</Option>
                            <Option value={"1"}>待处理</Option>
                            <Option value={"2"}>已处理</Option>
                            <Option value={"3"}>已关闭</Option>
                        </Select>
                    </label>
                    <button className="search_btn">查询</button>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>编号</th>
                        <th>级别</th>
                        <th>描述</th>
                        <th>提交者</th>
                        <th>状态</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.state.bugs.map(function (bug, index) {
                        return <tr key={"bug"+index}>
                            <td>{index+1}</td>
                            <td>{bug.level}</td>
                            <td>{bug.description}</td>
                            <td>{bug.user}</td>
                            <td>{bug.delete == 1 ? '已关闭' :'待处理'}</td>
                        </tr>
                    })}

                    </tbody>
                </table>
                <LeftBar
                    class="left_bar"
                    click_bar={this.click_bar}
                />
            </div>
        )
    }

    componentDidMount() {
        //console.log(document.cookie);
        this.queryData()
    }

    click_bar(index) {
        console.log(index);
        if (index == 3) {
            location.href = "/refer";
        }
    }

    queryData() {
        $.post('/home', function (data) {
            console.log(data);
            if (data.status == 0) {
                this.setState({
                    bugs: data.bugs
                })
            }
        }.bind(this))
    }
}

render(<Index />, document.getElementById('container'));