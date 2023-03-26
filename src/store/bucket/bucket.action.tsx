import { useSelector } from "react-redux";

import { Bucket, BUCKET_ACTION_TYPES, CardItem } from "./bucket.types";
import { selectBuckets } from "./bucket.selector";
import { createAction, withMatcher, ActionWithPayload, Action } from "../../utils/reducer/reducer.utils";

type UpdateBuckets = ActionWithPayload<BUCKET_ACTION_TYPES.UPDATE_BUCKETS, Bucket[]>;

const addNewBucket = (bucketList: Bucket[], bucketName: string): Bucket[] => {
    const last_id = bucketList[bucketList.length - 1].id;
    const newBucket: Bucket = {
        id: last_id + 1,
        bucket_name: bucketName,
        cards: []
    };

    return [...bucketList, newBucket];
}

export const updateBuckets = withMatcher((buckets: Bucket[]): UpdateBuckets => createAction(BUCKET_ACTION_TYPES.UPDATE_BUCKETS, buckets))

export const addBucket = (bucketName: string) => {
    const bucketList = useSelector(selectBuckets);
    const newBucketList = addNewBucket(bucketList, bucketName);

    return updateBuckets(newBucketList);
}