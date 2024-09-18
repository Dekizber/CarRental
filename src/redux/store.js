import { configureStore } from "@reduxjs/toolkit";
import { rentCarReducer } from "./slice";
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const persistConfig = {
    key: 'cars',
    storage,
    whitelist: ['favoriteItems'],
};


export const store = configureStore(
    {
        reducer: {
            cars: persistReducer(persistConfig, rentCarReducer)
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
