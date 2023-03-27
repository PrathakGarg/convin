import { AnyAction } from "@reduxjs/toolkit";

import { Bucket } from "./bucket.types";
import { updateBuckets } from "./bucket.action";

export type BucketState = {
    buckets: Bucket[];
};

const INITIAL_STATE: BucketState = {
    buckets: [],
};

export const bucketReducer = (state = INITIAL_STATE, action: AnyAction) => {
    if (updateBuckets.match(action))
        return {
            ...state,
            buckets: action.payload,
        };
    
    return state;
}