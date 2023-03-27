import { HistoryItem, HISTORY_ACTION_TYPES } from "./history.types";
import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";

type UpdateHistory = ActionWithPayload<HISTORY_ACTION_TYPES.UPDATE_HISTORY, HistoryItem[]>;
type DeleteHistory = Action<HISTORY_ACTION_TYPES.DELETE_HISTORY>;

const addHistory = (historyList: HistoryItem[], bucketId: number, cardId: number, cardName: string, link: string): HistoryItem[] => {
    const card = historyList.find((item) => item.cardId === cardId);

    if (card) {
        const newHistoryList = historyList.filter((item) => item.cardId !== cardId);
        return addHistory(newHistoryList, bucketId, cardId, cardName, link);
    }
    
    const last_id = historyList.length ? historyList[historyList.length - 1].id : 0;
    const newHistory: HistoryItem = {
        id: last_id + 1,
        bucketId,
        cardId,
        card_name: cardName,
        link,
        date: new Date().toDateString()
    }

    return [...historyList, newHistory];
}

export const updateHistoryAction = withMatcher((historyList: HistoryItem[]): UpdateHistory => createAction(HISTORY_ACTION_TYPES.UPDATE_HISTORY, historyList));
export const deleteHistoryAction = withMatcher((): DeleteHistory => createAction(HISTORY_ACTION_TYPES.DELETE_HISTORY));

export const addCardToHistory = (historyList: HistoryItem[], bucketId: number, cardId: number, cardName: string, link: string) => {
    const newHistoryList = addHistory(historyList, bucketId, cardId, cardName, link);
    return updateHistoryAction(newHistoryList);
}

export const deleteHistory = () => {
    return deleteHistoryAction();
}