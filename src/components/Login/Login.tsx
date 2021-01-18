import React, { useState, useEffect, useContext } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/client'
import { Card } from 'antd'
import { SIGN_IN } from '../../graphql/auth'
import { AuthContext } from '../../context/Auth'
import { Typography } from 'antd'
import './Login.css'
import { Spin } from 'antd'

const Login = (): JSX.Element => {
  const { login } = useContext(AuthContext)!
  const [error, setError] = React.useState('')

  const [signInMutation, { loading }] = useMutation(SIGN_IN, {
    onCompleted({ signIn }) {
      login(
        { id: signIn.user.id },
        { accessToken: signIn.accessToken, refreshToken: signIn.refreshToken }
      )
    },
    onError(err) {
      setError(err.message)
    },
  })

  const [form] = Form.useForm()
  const [, forceUpdate] = useState() // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({})
  }, [])

  const onFinish = (values: any) => {
    signInMutation({
      variables: {
        LoginInput: {
          username: values.username,
          password: values.password,
          role: 'ADMIN',
        },
      },
    })
  }

  return (
    <Card title="Admin Panel" className="login-card">
      {loading ? (
        <div className="login-spinner">
          <Spin />
        </div>
      ) : (
        <div>
          <Typography>{error.length ? error : null}</Typography>
          <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="User" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item shouldUpdate className="login-button">
              {() => (
                <Button type="primary" htmlType="submit">
                  Sign In
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      )}
    </Card>
  )
}

export default Login
