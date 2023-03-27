import { AnyAction } from "@reduxjs/toolkit";

import { HistoryState } from "./history.types";
import { updateHistoryAction, deleteHistoryAction } from "./history.action";

const INITIAL_STATE: HistoryState = {
    history: [],
};

export const historyReducer = (state = INITIAL_STATE, action: AnyAction) => {
    if (updateHistoryAction.match(action))
        return { ...state, history: action.payload };
    if (deleteHistoryAction.match(action))
        return { ...state, history: [] };
    
    return state;
}