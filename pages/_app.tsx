import type { AppProps } from "next/app";
import {
  StoniosConnectClientProvider,
  StoniosConnectWallet,
  getWallets,
} from "@stonios/connect-react";

const providers = {
  wallet: new StoniosConnectWallet(),
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoniosConnectClientProvider
      client={{
        providers,
      }}
      contextSharing={true}
    >
      <Component {...pageProps} />
    </StoniosConnectClientProvider>
  );
}
