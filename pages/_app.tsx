import type { AppProps } from "next/app";
import { Provider } from "jotai";
import { ModalManager } from "../components";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider>
      <Component {...pageProps} />
      <ModalManager />
    </Provider>
  );
}
export default MyApp;
