import React from 'react';
import './App.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <div>

    <div className="App" style={{width:400, margin:"auto", marginTop:50}}>
        <Form className="login-form">
        <Form.Item>
        
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            {" "} Forgot password
          </a>
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
}

export default App;
