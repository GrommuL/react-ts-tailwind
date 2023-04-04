import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import productsReducer from './slices/productsSlice'
import cartReducer from './slices/cartSlice'
import { userApi } from '@/services/UserService'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { productApi } from '@/services/ProductsService'

const rootReducer = combineReducers({
	user: userReducer,
	products: productsReducer,
	cart: cartReducer,
	[userApi.reducerPath]: userApi.reducer,
	[productApi.reducerPath]: productApi.reducer
})

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat(userApi.middleware, productApi.middleware)
})

export const persistor = persistStore(store)

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
