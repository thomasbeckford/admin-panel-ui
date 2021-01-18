import React from 'react'
import { Link } from 'react-router-dom'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'

const AdminMenu = (): JSX.Element => {
  return (
    <Menu defaultSelectedKeys={[window.location.pathname]} theme="light" mode="inline">
      <Menu.Item key="/admin" icon={<HomeOutlined />}>
        Home
        <Link to="/admin" />
      </Menu.Item>
      <Menu.Item key="/admin/users" icon={<UserOutlined />}>
        Users
        <Link to="/admin/users" />
      </Menu.Item>
    </Menu>
  )
}

export default AdminMenu
