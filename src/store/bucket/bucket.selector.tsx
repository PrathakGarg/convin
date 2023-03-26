import { createSelector } from "reselect";

import { RootState } from "../store";

const selectBucket = (state: RootState) => state.bucket;

export const selectBuckets = createSelector(
    [selectBucket],
    (bucket) => bucket.buckets
);

export const selectBucketNames = createSelector(
    [selectBucket],
    (bucket) => bucket.bucket_names
);