import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RightCircleFilled, PlusCircleOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

import { selectBuckets } from '../../store/bucket/bucket.selector';
import { addBucket } from '../../store/bucket/bucket.action';

import { SiderStyled, LogoContainer } from './navbar.styles';

const { Footer } = Layout;

const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const buckets = useSelector(selectBuckets);

    const onAddBucket = () => {dispatch(addBucket(buckets, "New Bucket"))}

    const items: MenuProps['items'] = buckets.map((bucket, index) => ({
        key: String(bucket.id),
        icon: React.createElement(RightCircleFilled),
        label: `${bucket.bucket_name}`,
        onClick: () => navigate(`/bucket/${bucket.id}`),
    }));

    const addItem: MenuProps['items'] = [{
        key: 'add',
        icon: React.createElement(PlusCircleOutlined),
        label: 'Add Bucket',
        onClick: onAddBucket,
    }]

    return (
        <Layout hasSider>
            <SiderStyled>
                <LogoContainer/>
                <Menu theme='dark' mode='inline' defaultSelectedKeys={[]} items={addItem}/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[]} items={items} />
            </SiderStyled>
            <Layout className="site-layout" style={{ marginLeft: 200, minHeight: "98vh" }}>
                <Outlet />
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Navbar;