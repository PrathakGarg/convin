import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RightCircleFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

import { selectBuckets } from '../../store/bucket/bucket.selector';

import { SiderStyled, LogoContainer } from './navbar.styles';

const { Footer } = Layout;

const Navbar: React.FC = () => {
    const items: MenuProps['items'] = useSelector(selectBuckets).map((bucket, index) => ({
        key: String(bucket.id),
        icon: React.createElement(RightCircleFilled),
        label: `nav ${bucket.bucket_name}`,
    }));
    
    return (
        <Layout hasSider>
            <SiderStyled>
                <LogoContainer/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </SiderStyled>
            <Layout className="site-layout" style={{ marginLeft: 200, minHeight: "98vh" }}>
                <Outlet />
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Navbar;