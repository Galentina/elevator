// Core
import { createStore, applyMiddleware } from 'redux';

// Instruments


import { rootReducer } from "./init/roodReducer";

import { composeEnhancers, middleware } from "./init/middleware";

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
);
export type RootState = ReturnType<typeof store.getState>;
