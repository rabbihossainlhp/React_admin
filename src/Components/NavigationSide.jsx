import React from 'react';
import {
    DashboardOutlined,BorderlessTableOutlined,BellOutlined,
    StarOutlined,UsergroupAddOutlined,SettingOutlined,
    TagsOutlined,UserOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


const NavigationSide = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const NavigationCoustomClass = 'hover:!bg-gray-500 !rounded-full text-lg font-bold'

  const NavigationItems = [
    {label:"Dashboard",     key: 'dashboard',    className:NavigationCoustomClass,   icon: <DashboardOutlined  className='!text-2xl ' /> } , 
    {label:"Catagories",    key: 'catagories',   className:NavigationCoustomClass,   icon: <BorderlessTableOutlined className='!text-2xl ' /> } , 
    {label:"Notification",  key: 'notification', className:NavigationCoustomClass,   icon: <BellOutlined className='!text-2xl ' /> } , 
    {label:"Review",        key: 'review' ,      className:NavigationCoustomClass,   icon: <StarOutlined className='!text-2xl ' /> } , 
    {label:"User",          key: 'user',         className:NavigationCoustomClass,   icon: <UsergroupAddOutlined className='!text-2xl ' /> } , 
    {label:"Settings",      key: 'settings',     className:NavigationCoustomClass,   icon: <SettingOutlined className='!text-2xl ' /> } , 
    {label:"Tags",          key: 'tags',         className:NavigationCoustomClass,   icon: <TagsOutlined className='!text-2xl ' /> } , 
];



  return (
    <Layout className='!min-h-screen' >
      <Sider
        width={'290px'}
        className='!px-4 '
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
            console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical h-30 flex justify-center items-end  text-yellow-600 text-2xl font-bold pb-4 ">
            <h1 className='cursor-pointer' >.SoHOJ-Por@</h1>
        </div>
        <Menu 
            theme="dark" mode="inline" defaultSelectedKeys={['dashboard']} items={NavigationItems.map(item=>({
                ...item,
                className:item.className
            }))} /> 

      </Sider>
      <Layout>
        <Header style={{background:'none'}} className='shadow-md flex items-center justify-between'>
            <strong className='text-2xl text-yellow-900' >.SoHOJ-Por@-Admin</strong>
            <div className='cursor-pointer border-1 p-2 w-10 h-10 rounded-full text-2xl flex'><UserOutlined/></div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default NavigationSide;