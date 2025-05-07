import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../store/store";
import "../globals.css";

const RootLayout = () => {
     return (
          <Provider store={store}>
               <Stack />
          </Provider>
     );
}

export default RootLayout;