import type { AppProps } from "next/app";
import { Provider } from "jotai";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
