import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RightCircleFilled, PlusCircleOutlined, HistoryOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

import Logo from '../../assets/logo.svg';
import NavbarBucketItem from '../../components/navbar-bucket-item/navbar-bucket-Item.component';

import { selectBuckets } from '../../store/bucket/bucket.selector';
import { addBucket } from '../../store/bucket/bucket.action';
import { AppDispatch } from '../../store/store';

import { SiderStyled, LogoContainer } from './navbar.styles';

const { Header, Content, Footer } = Layout;

const Navbar: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
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

    const historyItem: MenuProps['items'] = [{
        key: "history",
        icon: (<HistoryOutlined />),
        label: "History",
        onClick: () => navigate('/history'),
    }]

    return (
        <Layout hasSider>
            <SiderStyled>
                <LogoContainer />
                <Menu theme='dark' mode='inline' defaultSelectedKeys={[]} items={addItem} selectable={false} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[]} items={items} selectable={false} />
                <Menu className="history" theme="dark" mode="inline" defaultSelectedKeys={[]} items={historyItem} selectable={false} />
            </SiderStyled>
            <Layout className="site-layout" style={{ marginLeft: 250, minHeight: "98vh" }}>
                <Header className='header' style={{backgroundColor: '#F5F5F5', width: "100%", height: "10%"}}>
                    <div className="logo" style={{width: "100%", height: "100%"}}>
                        <img src={Logo} alt="logo" style={{width: "100%", height: "100%", paddingTop: 20}} />
                    </div>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50 }}>
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Convin.AI Frontend Task © 2023 Created by Prathak Garg</Footer>
            </Layout>
        </Layout>
    );
};

export default Navbar;