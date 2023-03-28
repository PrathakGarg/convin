import { AnyAction } from "@reduxjs/toolkit";

import { Bucket } from "./bucket.types";
import { updateBuckets } from "./bucket.action";

export type BucketState = {
    buckets: Bucket[];
};

const INITIAL_STATE: BucketState = {
    buckets: [
        {
            id: 1,
            bucket_name: "Education",
            cards: [
                {
                    id: 1,
                    card_name: "Python for Beginners - Learn Python in 1 Hour",
                    link: "https://youtu.be/kqtD5dpn9C8",
                    bucketId: 1,
                },
                {
                    id: 2,
                    card_name: "React Course - Beginner's Tutorial for React JavaScript Library [2022]",
                    link: "https://youtu.be/bMknfKXIFA8",
                    bucketId: 1,
                },
                {
                    id: 3,
                    card_name: "Python Django Explained In 8 Minutes",
                    link: "https://youtu.be/0-S5a0eXPoc",
                    bucketId: 1,
                }
            ]
        },
        {
            id: 2,
            bucket_name: "Music",
            cards: [
                {
                    id: 1,
                    card_name: "The Weeknd - Blinding Lights",
                    link: "https://youtu.be/4NRXx6U8ABQ",
                    bucketId: 2,
                },
                {
                    id: 2,  
                    card_name: "Kabira (Encore) | Pritam | Ranbir Kapoor, Deepika Padukone",
                    link: "https://youtu.be/lwLVJ0E8gN4",
                    bucketId: 2,
                },
                {
                    id: 3,
                    card_name: "Arijit Singh - Tum Hi Ho",
                    link: "https://youtu.be/2ZIpFytCSVc",
                    bucketId: 2,
                }
            ]
        },
        {
            id: 3,
            bucket_name: "Movies",
            cards: [
                {
                    id: 1,
                    card_name: "The Shawshank Redemption",
                    link: "https://youtu.be/6hB3S9bIaco",
                    bucketId: 3,
                },
                {
                    id: 2,
                    card_name: "The Dark Knight",
                    link: "https://youtu.be/EXeTwQWrcwY",
                    bucketId: 3,
                },
            ]
        },
    ],
};

export const bucketReducer = (state = INITIAL_STATE, action: AnyAction) => {
    if (updateBuckets.match(action))
        return {
            ...state,
            buckets: action.payload,
        };
    
    return state;
}