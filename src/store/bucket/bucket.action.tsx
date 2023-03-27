import { Bucket, BUCKET_ACTION_TYPES, CardItem } from "./bucket.types";
import { createAction, withMatcher, ActionWithPayload } from "../../utils/reducer/reducer.utils";

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

const addNewCard = (bucketList: Bucket[], bucketId: number, cardName: string, link: string): Bucket[] => {
    const bucketIndex = bucketList.findIndex(bucket => bucket.id === bucketId);
    const bucket = bucketList[bucketIndex];
    const last_id = bucket.cards.length ? bucket.cards[bucket.cards.length - 1].id : 0;
    const newCard: CardItem = {
        id: last_id + 1,
        bucketId: bucketId,
        card_name: cardName,
        link
    }

    const newBucketList = [...bucketList];
    newBucketList[bucketIndex] = {
        ...bucket,
        cards: [...bucket.cards, newCard]
    }

    return newBucketList;
}

const editCardFields = (bucketList: Bucket[], bucketId: number, cardId: number, cardName: string, link: string): Bucket[] => {
    const bucketIndex = bucketList.findIndex(bucket => bucket.id === bucketId);
    const bucket = bucketList[bucketIndex];
    const cardIndex = bucket.cards.findIndex(card => card.id === cardId);
    const card = bucket.cards[cardIndex];

    const newBucketList = [...bucketList];
    newBucketList[bucketIndex] = {
        ...bucket,
        cards: [
            ...bucket.cards.slice(0, cardIndex),
            {
                ...card,
                card_name: cardName,
                link: link
            },
            ...bucket.cards.slice(cardIndex + 1)
        ]
    }

    return newBucketList;
}

const deleteCard = (bucketList: Bucket[], bucketId: number, cardId: number): Bucket[] => {
    const bucketIndex = bucketList.findIndex(bucket => bucket.id === bucketId);
    const bucket = bucketList[bucketIndex];
    const cardIndex = bucket.cards.findIndex(card => card.id === cardId);

    const newBucketList = [...bucketList];
    newBucketList[bucketIndex] = {
        ...bucket,
        cards: [
            ...bucket.cards.slice(0, cardIndex),
            ...bucket.cards.slice(cardIndex + 1)
        ]
    }

    return newBucketList;
}

const moveCardtoBucket = (bucketList: Bucket[], bucketId: number, cardId: number, newBucketId: number): Bucket[] => {
    const bucketIndex = bucketList.findIndex(bucket => bucket.id === bucketId);
    const bucket = bucketList[bucketIndex];
    const cardIndex = bucket.cards.findIndex(card => card.id === cardId);
    const card = bucket.cards[cardIndex];

    const newBucketIndex = bucketList.findIndex(bucket => bucket.id === newBucketId);
    const newBucket = bucketList[newBucketIndex];
    const last_id = newBucket.cards.length ? newBucket.cards[newBucket.cards.length - 1].id : 0;

    const newBucketList = [...bucketList];
    newBucketList[bucketIndex] = {
        ...bucket,
        cards: [
            ...bucket.cards.slice(0, cardIndex),
            ...bucket.cards.slice(cardIndex + 1)
        ]
    }
    newBucketList[newBucketIndex] = {
        ...newBucket,
        cards: [
            ...newBucket.cards,
            {
                ...card,
                id: last_id + 1,
                bucketId: newBucketId
            }
        ]
    }

    return newBucketList;
}

export const updateBuckets = withMatcher((buckets: Bucket[]): UpdateBuckets => createAction(BUCKET_ACTION_TYPES.UPDATE_BUCKETS, buckets))

export const addBucket = (bucketList: Bucket[], bucketName: string) => {
    const newBucketList = addNewBucket(bucketList, bucketName);
    return updateBuckets(newBucketList);
}

export const addCardToBucket = (bucketList: Bucket[], bucketId: number, cardName: string, link: string) => {
    const newBucketList = addNewCard(bucketList, bucketId, cardName, link);
    return updateBuckets(newBucketList);
}

export const editCard = (bucketList: Bucket[], bucketId: number, cardId: number, cardName: string, link: string) => {
    const newBucketList = editCardFields(bucketList, bucketId, cardId, cardName, link);
    return updateBuckets(newBucketList);
}

export const deleteCardFromBucket = (bucketList: Bucket[], bucketId: number, cardId: number) => {
    const newBucketList = deleteCard(bucketList, bucketId, cardId);
    return updateBuckets(newBucketList);
}

export const moveCard = (getBuckets: () => Bucket[], bucketId: number, cardId: number, newBucketId: number) => {
    return (dispatch: any, getState: any) => {
        const { bucket } = getState();
        const { buckets } = bucket;
        console.log("moveCard", buckets, bucketId, cardId, newBucketId);
        const newBucketList = moveCardtoBucket(buckets, bucketId, cardId, newBucketId);

        dispatch(updateBuckets(newBucketList));
    }
}