import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todos/todoSlice'
import { productsApi } from '../services/products/product'
import { setupListeners } from '@reduxjs/toolkit/query'
import { recipesApi } from '../services/recipes/recipes'
import { jsontodosApi } from '../services/jsontodos/jsontodos'
export const store = configureStore({
    reducer: {
        counterReducer,
        todoReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [recipesApi.reducerPath]: recipesApi.reducer,
        [jsontodosApi.reducerPath]: jsontodosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return (
            getDefaultMiddleware()
                .concat(productsApi.middleware)
                .concat(recipesApi.middleware)
                .concat(jsontodosApi.middleware)
        )
    }

})
setupListeners(store.dispatch)