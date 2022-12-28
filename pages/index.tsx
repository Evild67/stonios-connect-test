import {
  usePolkadotAccounts,
  StoniosConnectButton,
} from "@stonios/connect-react";
import { useEffect, useState } from "react";

export default function Home() {
  const accounts = usePolkadotAccounts();

  useEffect(() => {
    console.log("accounts", accounts);
  }, [accounts]);

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <StoniosConnectButton />
        {accounts ? <span>Your wallet: {accounts[0]}</span> : null}
      </div>
    </div>
  );
}
