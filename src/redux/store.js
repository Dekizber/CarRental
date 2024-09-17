import { configureStore } from "@reduxjs/toolkit";
import { handleFavorite, rentCarReducer } from "./slice";
import localStorage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const persistConfig = {
    key: 'root',
    version: 1,
    localStorage,
    whitelist: ['favorite'],
};


export const store = configureStore(
    {
        reducer: {
            favorite: persistReducer(persistConfig, handleFavorite),
            cars: rentCarReducer,
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            })
    }
);

export const persistor = persistStore(store);
