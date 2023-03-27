import { createSelector } from "reselect";

const selectHistory = (state: any) => state.history;

export const selectHistoryItems = createSelector(
    [selectHistory],
    (history) => history.history
);