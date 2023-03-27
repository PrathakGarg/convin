import { FC } from "react"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Layout } from "antd";

import CardList from "../card-list/card-list.component";
import { selectBucketById } from "../../store/bucket/bucket.selector";

const { Header, Content } = Layout;

const BucketsPreview: FC = () => {
    const { bucketId } = useParams();

    const bucket = useSelector(selectBucketById(Number(bucketId)));

    return (
        <>
            <Header>
                <div className="logo" />
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50 }}>
                <div className="site-layout-background" style={{ padding: 0, minHeight: 380 }}>
                    <CardList cards={bucket?.cards || []} bucketId={Number(bucketId)} />
                </div>
            </Content>
        </>
    )
}

export default BucketsPreview;