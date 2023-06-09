import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../../store/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
