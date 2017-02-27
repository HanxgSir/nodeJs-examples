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
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="contentBox">
                <div className="form_box">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: '请输入用户名！'}]
                            })(
                                <Input addonBefore={<Icon type="user" />} placeholder="用户名"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码！'}]
                            })(
                                <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}
                            <a className="login-form-forgot">忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            没有帐号？ <a href="/register" className="register_btn">快来注册吧!</a>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }

    componentDidMount() {

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                $.post('/login', values, function (data) {
                    console.log(data);
                    if (data.status == 0) {
                        location.href = "/home"
                    }
                    else {
                        console.log(data);
                    }
                }.bind(this))
            }
        });
    }
}

const Index = Form.create()(Login);

render(<Index />, document.getElementById('container'));