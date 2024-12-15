import { configureStore } from "@reduxjs/toolkit";
//導入子模塊reducer
import counterReducer from './modules/counterStore'

const store = configureStore({
	reducer:{
		counter:counterReducer
	}
})

export default store;