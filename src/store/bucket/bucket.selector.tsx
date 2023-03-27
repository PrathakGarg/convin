import { createSelector } from "reselect";

import { RootState } from "../store";

const selectBucket = (state: RootState) => state.bucket;

export const selectBuckets = createSelector(
    [selectBucket],
    (bucket) => bucket.buckets
);

export const selectBucketById = (bucketId: string | number) =>
    createSelector([selectBuckets], (buckets) =>
        buckets.find((bucket) => bucket.id === Number(bucketId))
    );

export const selectCardById = (bucketId: string | number, cardId: string | number) =>
    createSelector([selectBucketById(bucketId)], (bucket) =>
        bucket?.cards.find((card) => card.id === Number(cardId))
    );