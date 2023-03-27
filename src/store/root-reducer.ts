import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { PersistConfig, persistReducer } from "redux-persist";

import { bucketReducer } from "./bucket/bucket.reducer";
import { historyReducer } from "./history/history.reducer";
import { RootState } from "./store";

const rootPersistConfig: PersistConfig<RootState> & { blacklist: (keyof RootState)[] } = {
    key: "root",
    storage,
    blacklist: [],
};

export const rootReducer = combineReducers({
    bucket: bucketReducer,
    history: historyReducer
})

export const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);
