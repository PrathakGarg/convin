import { AnyAction } from "@reduxjs/toolkit";

import { BUCKET_ACTION_TYPES } from "./bucket.types";
import { Bucket } from "./bucket.types";

export type BucketState = {
    bucket_names: string[];
    buckets: Bucket[];
};

const INITIAL_STATE: BucketState = {
    bucket_names: [],
    buckets: [],
};

export const bucketReducer = (state = INITIAL_STATE, action: AnyAction) => {
    return state;
}