import { FC, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CardList from "../card-list/card-list.component";
import { selectBucketById } from "../../store/bucket/bucket.selector";

const BucketsPreview: FC = () => {
    const navigate = useNavigate();
    const { bucketId } = useParams();

    const bucket = useSelector(selectBucketById(Number(bucketId)));
    
    useEffect(() => {
        if (!bucket) 
            navigate('/bucket');
    }, [bucket, navigate]);

    return (
        <div className="site-layout-background" style={{ padding: 0, minHeight: 380 }}>
            <CardList cards={bucket?.cards || []} bucketId={Number(bucketId)} />
        </div>
    )
}

export default BucketsPreview;