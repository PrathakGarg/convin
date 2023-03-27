export enum BUCKET_ACTION_TYPES {
    UPDATE_BUCKETS = "bucket/UPDATE_BUCKET",
    UPDATE_CARD = "bucket/UPDATE_CARD",
}

export type CardItem = {
    id: number,
    bucketId: number,
    card_name: string, 
    link: string
}

export type Bucket = {
    id: number,
    bucket_name: string,
    cards: CardItem[]
}