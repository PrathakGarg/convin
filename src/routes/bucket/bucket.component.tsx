import { Routes, Route } from "react-router-dom";

import BucketsPreview from "../../components/buckets-preview/buckets-preview.categories";
import BucketMain from "../../components/bucket-main/bucket-main.component";

const Bucket = () => {
    return (
        <Routes>
            <Route index element={<BucketMain />} />
            <Route path=":bucketId" element={<BucketsPreview />} />
        </Routes>
    );
};

export default Bucket;