import { Routes, Route } from "react-router-dom";

import BucketsPreview from "../../components/buckets-preview/buckets-preview.categories";

const Bucket = () => {
    return (
        <Routes>
            <Route path=":bucketId" element={<BucketsPreview />} />
        </Routes>
    );
};

export default Bucket;