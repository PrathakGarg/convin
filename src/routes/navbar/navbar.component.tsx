import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RightCircleFilled, PlusCircleOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

import NavbarBucketItem from '../../components/navbar-bucket-item/navbar-bucket-Item.component';
import { selectBuckets } from '../../store/bucket/bucket.selector';
import { addBucket } from '../../store/bucket/bucket.action';
import { AppDispatch } from '../../store/store';

import { SiderStyled, LogoContainer } from './navbar.styles';

const { Header, Content, Footer } = Layout;

const Navbar: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const buckets = useSelector(selectBuckets);

    const onAddBucket = () => { dispatch(addBucket(buckets, "New Bucket")) };

    const items: MenuProps['items'] = buckets.map((bucket, index) => ({
            key: String(bucket.id),
            icon: React.createElement(RightCircleFilled),
            label: (<NavbarBucketItem bucket={bucket} />),
        }
    ));

    const addItem: MenuProps['items'] = [{
        key: 'add',
        icon: React.createElement(PlusCircleOutlined),
        label: (
            <div>
                <span>Add Bucket</span>
            </div>
        ),
        onClick: onAddBucket,
    }]

    return (
        <Layout hasSider>
            <SiderStyled>
                <LogoContainer>Convin</LogoContainer>
                <Menu theme='dark' mode='inline' defaultSelectedKeys={[]} items={addItem} selectable={false} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[]} items={items} selectable={false} />
            </SiderStyled>
            <Layout className="site-layout" style={{ marginLeft: 250, minHeight: "98vh" }}>
                <Header>
                    <div className="logo" />
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50 }}>
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Navbar;