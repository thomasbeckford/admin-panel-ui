import React, { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { Avatar, Dropdown, Layout, Menu } from 'antd'
import { Route } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import { AuthContext } from '../../context/Auth'
import { ME } from '../../graphql/User/queries'

import HomePage from '../Home/HomePage'
import AdminMenu from './Menu'

import 'antd/dist/antd.css'
import './Admin.css'

function Admin({ match }: any): JSX.Element {
  const { data, loading, error } = useQuery(ME)
  const { Header, Content, Footer, Sider } = Layout
  const [collapsed, setCollapsed] = React.useState(false)
  const { logout } = useContext(AuthContext)!

  const adminUserMenu = (
    <Menu>
      <Menu.Item onClick={() => logout()}>Salir</Menu.Item>
    </Menu>
  )

  if (loading) return <div>Loading admin..</div>
  if (error) console.log(error)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <AdminMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="header-admin-layout">
          <Dropdown overlay={adminUserMenu} placement="bottomLeft">
            <div className="admin-user-avatar">
              <span>Hello, {data.me.firstName} </span>
              <Avatar icon={<UserOutlined />}></Avatar>
            </div>
          </Dropdown>
        </Header>
        <Content className="content-background">
          <Route path={match.url + '/'} exact render={() => <HomePage />} />
        </Content>

        <Footer style={{ textAlign: 'center' }}>©2020</Footer>
      </Layout>
    </Layout>
  )
}

export default Admin
