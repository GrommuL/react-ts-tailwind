import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import productsReducer from './slices/productsSlice'
import cartReducer from './slices/cartSlice'
import orderReducer from './slices/orderSlice'
import filterReducer from './slices/filterSlice'
import searchReducer from './slices/searchSlice'
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
import { orderApi } from '@/services/OrderService'

const rootReducer = combineReducers({
	user: userReducer,
	products: productsReducer,
	cart: cartReducer,
	order: orderReducer,
	filter: filterReducer,
	search: searchReducer,
	[userApi.reducerPath]: userApi.reducer,
	[productApi.reducerPath]: productApi.reducer,
	[orderApi.reducerPath]: orderApi.reducer
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
		}).concat(userApi.middleware, productApi.middleware, orderApi.middleware)
})

export const persistor = persistStore(store)

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
