import { Bucket, BUCKET_ACTION_TYPES } from "./bucket.types";
import { createAction, withMatcher, ActionWithPayload, Action } from "../../utils/reducer/reducer.utils";

type UpdateBuckets = ActionWithPayload<BUCKET_ACTION_TYPES.UPDATE_BUCKETS, Bucket[]>;

const addNewBucket = (bucketList: Bucket[], bucketName: string): Bucket[] => {
    const last_id = bucketList.length ? bucketList[bucketList.length - 1].id : 0;
    const newBucket: Bucket = {
        id: last_id + 1,
        bucket_name: bucketName,
        cards: []
    };

    return [...bucketList, newBucket];
}

export const updateBuckets = withMatcher((buckets: Bucket[]): UpdateBuckets => createAction(BUCKET_ACTION_TYPES.UPDATE_BUCKETS, buckets))

export const addBucket = (bucketList: Bucket[], bucketName: string) => {
    const newBucketList = addNewBucket(bucketList, bucketName);

    return updateBuckets(newBucketList);
}