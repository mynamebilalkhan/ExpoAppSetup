import { configureStore } from "@reduxjs/toolkit";
import BasicReducer from "./features/basic/slice";

const store = configureStore({
     reducer: {
          Basic: BasicReducer,
     }
});

export default store;