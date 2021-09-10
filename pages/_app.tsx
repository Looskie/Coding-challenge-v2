import type { AppProps } from "next/app";
import { Provider } from "jotai";
import { ModalManager } from "../components";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider>
      <Global />
      <ModalManager />
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
