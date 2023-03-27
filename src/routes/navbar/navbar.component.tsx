import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';

import { RightCircleFilled, PlusCircleOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

import { CardDragItem } from '../../components/card/card.component';
import { selectBuckets } from '../../store/bucket/bucket.selector';
import { addBucket, moveCard } from '../../store/bucket/bucket.action';
import { AppDispatch } from '../../store/store';

import { SiderStyled, LogoContainer } from './navbar.styles';

const { Footer } = Layout;

const Navbar: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const buckets = useSelector(selectBuckets);

    const onAddBucket = () => {dispatch(addBucket(buckets, "New Bucket"))}
    const getBuckets = () => buckets;

    const items: MenuProps['items'] = buckets.map((bucket, index) => {
        const [_, drop] = useDrop(() => ({
            accept: 'card',
            drop: (item: CardDragItem) => {dispatch(moveCard(getBuckets, item.card.bucketId, item.card.id, bucket.id))},
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        }));

        return {
        key: String(bucket.id),
        icon: React.createElement(RightCircleFilled),
        label: (
            <div ref={drop}>
                <span>{bucket.bucket_name}</span>
            </div>
            ),
        onClick: () => navigate(`/bucket/${bucket.id}`),
    }
});

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