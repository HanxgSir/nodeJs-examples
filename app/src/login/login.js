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
                                rules: [{required: true, message: 'Please input your username!'}]
                            })(
                                <Input addonBefore={<Icon type="user" />} placeholder="Username"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}]
                            })(
                                <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot">Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                $.post('/login', values, function (data) {
                    console.log(data.msg);
                }.bind(this))
            }
        });
    }
}

const Index = Form.create()(Login);

render(<Index />, document.getElementById('container'));