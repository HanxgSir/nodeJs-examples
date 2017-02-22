/**
 * Created by Administrator on 2017/2/21.
 */
import React from 'react';
import { render } from 'react-dom';
import Form from 'antd/lib/form';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Checkbox  from 'antd/lib/checkbox';

const FormItem = Form.Item;
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    render() {
        return (
            <div className="contentBox">
                <div className="form_box">
                    <Form>
                        <FormItem>
                            <Input addonBefore={<Icon type="user" />} placeholder="用户名" ref="username"/>
                        </FormItem>
                        <FormItem>
                            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" ref="password"/>
                        </FormItem>
                        <FormItem>
                            <Checkbox>记住密码</Checkbox>
                            <a className="login-form-forgot">忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.login}>
                                登录
                            </Button>
                            Or <a>register now!</a>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }

    componentDidMount() {

    }

    login(){
        console.log('log');
        let params = {
            username:this.refs.username.value,
            password:this.refs.password.value
        };
        $.post('/login',params,function(data){
            console.log('success');
            console.log('success',data);
        })
    }
}

render(<Index />, document.getElementById('container'));