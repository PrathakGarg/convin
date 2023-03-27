export enum HISTORY_ACTION_TYPES {
    UPDATE_HISTORY = "history/UPDATE_HISTORY",
    DELETE_HISTORY = "history/DELETE_HISTORY",
}

export type HistoryItem = {
    id: number,
    bucketId: number,
    cardId: number,
    card_name: string,
    link: string,
    date: string,
}

export type HistoryState = {
    history: HistoryItem[];
};
