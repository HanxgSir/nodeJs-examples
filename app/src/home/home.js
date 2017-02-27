/**
 * Created by Administrator on 2017/2/27.
 */
import React from 'react';
import { render } from 'react-dom';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contentBox">
                <div className="search">
                    <label className="code">编号：<Input type="text" placeholder="请输入编号" style={{width:"195px"}}/></label>
                    <label className="">
                        级别：
                        <Select style={{width:"120px"}} defaultValue={0}>
                            <option value={0}>全部</option>
                            <option value={1}>一级</option>
                            <option value={2}>二级</option>
                            <option value={3}>三级</option>
                        </Select>
                    </label>
                    <label className="status">
                        状态：
                        <Select style={{width:"120px"}} defaultValue={0}>
                            <option value={0}>全部</option>
                            <option value={1}>待处理</option>
                            <option value={2}>已处理</option>
                            <option value={3}>已关闭</option>
                        </Select>
                    </label>
                </div>
            </div>
        )
    }
}

render(<Index />, document.getElementById('container'));