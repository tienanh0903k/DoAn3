import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'

import '../../App.css'
import { Link } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}

const { Header, Sider, Content } = Layout

const Admin: React.FC<Props> = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='demo-logo-vertical flex justify-center gap-1 py-2'>
          <img
            src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
            style={{ height: '20px', width: '20px' }}
            alt='logo'
          />
          <h1 className='text-lg text-white'>NTASPORTS</h1>
        </div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to='/admin/product'>Trang chủ</Link>
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to='/admin/category'>Danh mục</Link>
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3'
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'nav 3'
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: 'nav 3'
            },
            {
              key: '6',
              icon: <UploadOutlined />,
              label: 'nav 3'
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Admin
