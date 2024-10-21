import { foo } from "@kickass-dev/shared/src/consts/common";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <h1>App!! {foo}</h1>
      <Component {...pageProps} />
    </>
  );
};

export default App;
